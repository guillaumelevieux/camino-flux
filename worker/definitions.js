const definitions = [
  // --------------------------------------
  {
    domaineIds: ['c'],
    typeIds: ['apx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['c'],
    typeIds: ['arc'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['c'],
    typeIds: ['pxc'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['c'],
    typeIds: ['apx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['c'],
    typeIds: ['arc'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['c'],
    typeIds: ['pxc'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['c'],
    typeIds: ['apx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['c'],
    typeIds: ['arc'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['c'],
    typeIds: ['pxc'],
    statutIds: ['ech']
  },
  // --------------------------------------
  {
    domaineIds: ['f'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['f'],
    typeIds: ['prx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['f'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['f'],
    typeIds: ['prx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['f'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['f'],
    typeIds: ['prx'],
    statutIds: ['ech']
  },
  // --------------------------------------
  {
    domaineIds: ['g'],
    typeIds: ['arg'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['g'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['g'],
    typeIds: ['prx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['g'],
    typeIds: ['pxg'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['g'],
    typeIds: ['arg'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['g'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['g'],
    typeIds: ['prx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['g'],
    typeIds: ['pxg'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['g'],
    typeIds: ['arg'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['g'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['g'],
    typeIds: ['prx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['g'],
    typeIds: ['pxg'],
    statutIds: ['ech']
  },
  // --------------------------------------
  {
    domaineIds: ['h'],
    typeIds: ['apx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['h'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['h'],
    typeIds: ['prh'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['h'],
    typeIds: ['pxh'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['h'],
    typeIds: ['apx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['h'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['h'],
    typeIds: ['prh'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['h'],
    typeIds: ['pxh'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['h'],
    typeIds: ['apx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['h'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['h'],
    typeIds: ['prh'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['h'],
    typeIds: ['pxh'],
    statutIds: ['ech']
  },
  // --------------------------------------
  {
    domaineIds: ['m'],
    typeIds: ['apx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['arm'],
    statutIds: ['val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['axm'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['prx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['pxm'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['m'],
    typeIds: ['apx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['m'],
    typeIds: ['axm'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['m'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['m'],
    typeIds: ['prx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['m'],
    typeIds: ['pxm'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['m'],
    typeIds: ['apx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['arm'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['axm'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['prx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['pxm'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['m'],
    typeIds: ['arm'],
    statutIds: ['dmc']
  },
  // --------------------------------------
  {
    domaineIds: ['s'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['s'],
    typeIds: ['prx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['s'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['s'],
    typeIds: ['prx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['s'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['s'],
    typeIds: ['prx'],
    statutIds: ['ech']
  },
  // --------------------------------------
  {
    domaineIds: ['w'],
    typeIds: ['apx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['w'],
    typeIds: ['cxx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['w'],
    typeIds: ['prx'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['w'],
    typeIds: ['arc'],
    statutIds: ['mod', 'val']
  },
  {
    domaineIds: ['w'],
    typeIds: ['apx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['w'],
    typeIds: ['cxx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['w'],
    typeIds: ['prx'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['w'],
    typeIds: ['arc'],
    statutIds: ['dmi']
  },
  {
    domaineIds: ['w'],
    typeIds: ['apx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['w'],
    typeIds: ['cxx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['w'],
    typeIds: ['prx'],
    statutIds: ['ech']
  },
  {
    domaineIds: ['w'],
    typeIds: ['arc'],
    statutIds: ['ech']
  }
]

module.exports = definitions
