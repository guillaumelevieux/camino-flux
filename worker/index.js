// efface le dossier /public/geojson, le recréé et y ajoute:
// - un fichier .geojson par definition présent dans le fichier definitions.js
// - un fichier infos.json contenant la liste des fichiers générés

require('dotenv').config()
const { join } = require('path')
var { job } = require('cron')

const fileImport = require('./_utils/file-import')
const fileCreate = require('./_utils/file-create')
const directoryDelete = require('./_utils/directory-delete')
const directoryCreate = require('./_utils/directory-create')
const apiFetch = require('./_utils/api-fetch')
const geojsonFormat = require('./geojson-format')
const definitions = require('./definitions')
const EXPORT_DIRECTORY = '../public/geojson/'

const apiUrl = process.env.API_URL

job(
  // cronTime
  '00 00 04 * * 1-5',
  // onTick
  run,
  //  onComplete
  null,
  // start
  true,
  // timezone
  'Europe/Paris',
  // context
  null,
  // runOnInit
  true
  // utcOffset
  // unrefTimeout
)

// ------------------------------------
// process
// ------------------------------------

async function run() {
  try {
    // importe les requêtes graphQL
    const titresQuery = await fileImport(join(__dirname, 'queries/titres.gql'))
    const typesQuery = await fileImport(join(__dirname, 'queries/types.gql'))
    const domainesQuery = await fileImport(
      join(__dirname, 'queries/domaines.gql')
    )
    const statutsQuery = await fileImport(
      join(__dirname, 'queries/statuts.gql')
    )

    // efface le dossier cible et son contenu
    await directoryDelete(join(__dirname, EXPORT_DIRECTORY))

    // créé le dossier cible
    await directoryCreate(join(__dirname, EXPORT_DIRECTORY))

    // récupère les types
    const types = await typesGet(apiUrl, typesQuery)
    // récupère les domaines
    const domaines = await domainesGet(apiUrl, domainesQuery)
    // récupère les statuts
    const statuts = await statutsGet(apiUrl, statutsQuery)

    const metas = { types, domaines, statuts }

    // parcourt les définitions et construit un tableau de geojsons
    // dont l'entrée properties contient, entre autre le nom du fichier
    const geojsons = await geojsonsBuild(definitions, titresQuery, metas)

    // génère un fichier par geojson
    // retourne la liste des fichiers générés
    const infos = await filesCreate(geojsons)

    // créé le fichier récapitulatif infos.json
    await infosFileCreate(infos)
  } catch (e) {
    console.error(e)
  }
}

// ------------------------------------
// fonctions
// ------------------------------------

async function typesGet(url, query) {
  const res = await apiFetch(url, JSON.stringify({ query }))

  return res && res.data && res.data.types
}

async function domainesGet(url, query) {
  const res = await apiFetch(url, JSON.stringify({ query }))

  return res && res.data && res.data.domaines
}

async function statutsGet(url, query) {
  const res = await apiFetch(url, JSON.stringify({ query }))

  return res && res.data && res.data.statuts
}

async function titresGet(url, query, variables) {
  const res = await apiFetch(url, JSON.stringify({ query, variables }))

  return res && res.data && res.data.titres
}

async function geojsonsBuild(definitions, titresQuery, metas) {
  return definitions.reduce(async (geojsons, definition) => {
    // récupère les titres
    const titres = await titresGet(apiUrl, titresQuery, definition)

    // si la réponse contient des titres
    return titres && titres.length
      ? // formate les données et les ajoute
        [...(await geojsons), geojsonFormat(definition, titres, metas)]
      : geojsons
  }, Promise.resolve([]))
}

async function filesCreate(geojsons) {
  return Promise.all(
    geojsons.map(async geojson => {
      await fileCreate(
        join(__dirname, EXPORT_DIRECTORY, geojson.properties.fichier),
        JSON.stringify(geojson, null, 2)
      )

      return geojson.properties
    })
  )
}

// génère un fichier infos contenant la liste des fichiers générés
async function infosFileCreate(infos) {
  await fileCreate(
    join(__dirname, EXPORT_DIRECTORY, 'infos.json'),
    JSON.stringify(infos, null, 2)
  )

  console.log(`${infos.length} fichiers générés`)
}
