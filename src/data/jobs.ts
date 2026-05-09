export interface JobSkill {
  id: string;
  name: string;
  nameLabel: { zh: string; en: string };
  type: 'weaponskill' | 'spell' | 'ability';
  level: number;
}

export interface Job {
  id: string;
  name: string;
  nameLabel: { zh: string; en: string };
  role: 'tank' | 'healer' | 'melee' | 'ranged' | 'caster';
  skills: JobSkill[];
}

export const JOB_ROLES: Array<{
  id: string;
  nameLabel: { zh: string; en: string };
}> = [
  { id: 'tank',   nameLabel: { zh: '坦克', en: 'Tank' } },
  { id: 'healer', nameLabel: { zh: '治疗', en: 'Healer' } },
  { id: 'melee',  nameLabel: { zh: '近战', en: 'Melee DPS' } },
  { id: 'ranged', nameLabel: { zh: '远程', en: 'Ranged DPS' } },
  { id: 'caster', nameLabel: { zh: '法系', en: 'Caster DPS' } },
];

export const JOBS: Job[] = [
  // ===== 坦克 Tank =====
  {
    id: 'pld',
    name: 'Paladin',
    nameLabel: { zh: '骑士', en: 'Paladin' },
    role: 'tank',
    skills: [
      { id: 'pld-fast-blade',      name: 'Fast Blade',        nameLabel: { zh: '先锋剑',      en: 'Fast Blade' },        type: 'weaponskill', level: 1 },
      { id: 'pld-fight-or-flight', name: 'Fight or Flight',   nameLabel: { zh: '战逃反应',    en: 'Fight or Flight' },   type: 'ability',      level: 2 },
      { id: 'pld-riot-blade',      name: 'Riot Blade',        nameLabel: { zh: '暴乱剑',      en: 'Riot Blade' },        type: 'weaponskill', level: 4 },
      { id: 'pld-shield-bash',     name: 'Shield Bash',       nameLabel: { zh: '盾牌猛击',    en: 'Shield Bash' },       type: 'weaponskill', level: 10 },
      { id: 'pld-iron-will',       name: 'Iron Will',          nameLabel: { zh: '钢铁信念',    en: 'Iron Will' },          type: 'ability',      level: 10 },
      { id: 'pld-shield-lob',      name: 'Shield Lob',         nameLabel: { zh: '飞盾',        en: 'Shield Lob' },         type: 'weaponskill', level: 15 },
      { id: 'pld-provoke',         name: 'Provoke',            nameLabel: { zh: '挑衅',        en: 'Provoke' },            type: 'ability',      level: 15 },
      { id: 'pld-interject',       name: 'Interject',          nameLabel: { zh: '插言',        en: 'Interject' },          type: 'ability',      level: 18 },
      { id: 'pld-rage-of-halone',  name: 'Rage of Halone',     nameLabel: { zh: '战女神之怒',  en: 'Rage of Halone' },     type: 'weaponskill', level: 26 },
      { id: 'pld-spirits-within',  name: 'Spirits Within',     nameLabel: { zh: '深奥之灵',    en: 'Spirits Within' },     type: 'ability',      level: 30 },
      { id: 'pld-arms-length',     name: "Arm's Length",       nameLabel: { zh: '亲疏自行',    en: "Arm's Length" },       type: 'ability',      level: 32 },
      { id: 'pld-sheltron',        name: 'Sheltron',           nameLabel: { zh: '盾阵',        en: 'Sheltron' },           type: 'ability',      level: 35 },
      { id: 'pld-cover',           name: 'Cover',              nameLabel: { zh: '保护',        en: 'Cover' },              type: 'ability',      level: 35 },
      { id: 'pld-sentinel',        name: 'Sentinel',           nameLabel: { zh: '预警',        en: 'Sentinel' },           type: 'ability',      level: 38 },
      { id: 'pld-prominence',      name: 'Prominence',         nameLabel: { zh: '日珥斩',      en: 'Prominence' },         type: 'weaponskill', level: 40 },
      { id: 'pld-circle-of-scorn', name: 'Circle of Scorn',    nameLabel: { zh: '厄运流转',    en: 'Circle of Scorn' },    type: 'ability',      level: 50 },
      { id: 'pld-hallowed-ground', name: 'Hallowed Ground',    nameLabel: { zh: '神圣领域',    en: 'Hallowed Ground' },    type: 'ability',      level: 50 },
      { id: 'pld-goring-blade',    name: 'Goring Blade',       nameLabel: { zh: '沥血剑',      en: 'Goring Blade' },       type: 'weaponskill', level: 54 },
      { id: 'pld-divine-veil',     name: 'Divine Veil',        nameLabel: { zh: '圣光幕帘',    en: 'Divine Veil' },        type: 'ability',      level: 56 },
      { id: 'pld-clemency',        name: 'Clemency',           nameLabel: { zh: '深仁厚泽',    en: 'Clemency' },           type: 'spell',        level: 58 },
      { id: 'pld-royal-authority', name: 'Royal Authority',    nameLabel: { zh: '王权剑',      en: 'Royal Authority' },    type: 'weaponskill', level: 60 },
      { id: 'pld-intervention',    name: 'Intervention',       nameLabel: { zh: '干预',        en: 'Intervention' },       type: 'ability',      level: 62 },
      { id: 'pld-holy-spirit',     name: 'Holy Spirit',        nameLabel: { zh: '圣灵',        en: 'Holy Spirit' },        type: 'spell',        level: 64 },
      { id: 'pld-requiescat',      name: 'Requiescat',         nameLabel: { zh: '安魂祈祷',    en: 'Requiescat' },         type: 'ability',      level: 68 },
      { id: 'pld-passage-of-arms', name: 'Passage of Arms',    nameLabel: { zh: '武装戍卫',    en: 'Passage of Arms' },    type: 'ability',      level: 70 },
      { id: 'pld-holy-circle',     name: 'Holy Circle',        nameLabel: { zh: '圣环',        en: 'Holy Circle' },        type: 'spell',        level: 72 },
      { id: 'pld-intervene',       name: 'Intervene',          nameLabel: { zh: '调停',        en: 'Intervene' },          type: 'ability',      level: 74 },
      { id: 'pld-atonement',       name: 'Atonement',          nameLabel: { zh: '赎罪剑',      en: 'Atonement' },          type: 'weaponskill', level: 76 },
      { id: 'pld-confiteor',       name: 'Confiteor',          nameLabel: { zh: '悔罪',        en: 'Confiteor' },          type: 'spell',        level: 80 },
      { id: 'pld-holy-sheltron',   name: 'Holy Sheltron',      nameLabel: { zh: '圣盾阵',      en: 'Holy Sheltron' },      type: 'ability',      level: 82 },
      { id: 'pld-expiacion',       name: 'Expiacion',          nameLabel: { zh: '偿赎剑',      en: 'Expiacion' },          type: 'ability',      level: 86 },
      { id: 'pld-blade-of-faith',  name: 'Blade of Faith',     nameLabel: { zh: '信念之剑',    en: 'Blade of Faith' },     type: 'spell',        level: 90 },
      { id: 'pld-blade-of-truth',  name: 'Blade of Truth',     nameLabel: { zh: '真理之剑',    en: 'Blade of Truth' },     type: 'spell',        level: 90 },
      { id: 'pld-blade-of-valor',  name: 'Blade of Valor',     nameLabel: { zh: '英勇之剑',    en: 'Blade of Valor' },     type: 'spell',        level: 90 },
    ],
  },
  {
    id: 'war',
    name: 'Warrior',
    nameLabel: { zh: '战士', en: 'Warrior' },
    role: 'tank',
    skills: [],
  },
  {
    id: 'drk',
    name: 'Dark Knight',
    nameLabel: { zh: '暗黑骑士', en: 'Dark Knight' },
    role: 'tank',
    skills: [],
  },
  {
    id: 'gnb',
    name: 'Gunbreaker',
    nameLabel: { zh: '绝枪战士', en: 'Gunbreaker' },
    role: 'tank',
    skills: [],
  },

  // ===== 治疗 Healer =====
  {
    id: 'whm',
    name: 'White Mage',
    nameLabel: { zh: '白魔法师', en: 'White Mage' },
    role: 'healer',
    skills: [
      { id: 'whm-stone',             name: 'Stone',              nameLabel: { zh: '飞石',        en: 'Stone' },              type: 'spell',   level: 1 },
      { id: 'whm-cure',              name: 'Cure',               nameLabel: { zh: '治疗',        en: 'Cure' },               type: 'spell',   level: 2 },
      { id: 'whm-aero',              name: 'Aero',               nameLabel: { zh: '疾风',        en: 'Aero' },               type: 'spell',   level: 4 },
      { id: 'whm-repose',            name: 'Repose',             nameLabel: { zh: '沉静',        en: 'Repose' },             type: 'spell',   level: 8 },
      { id: 'whm-esuna',             name: 'Esuna',              nameLabel: { zh: '康复',        en: 'Esuna' },              type: 'spell',   level: 10 },
      { id: 'whm-medica',            name: 'Medica',             nameLabel: { zh: '医治',        en: 'Medica' },             type: 'spell',   level: 10 },
      { id: 'whm-raise',             name: 'Raise',              nameLabel: { zh: '复活',        en: 'Raise' },              type: 'spell',   level: 12 },
      { id: 'whm-stone-ii',          name: 'Stone II',           nameLabel: { zh: '坚石',        en: 'Stone II' },           type: 'spell',   level: 18 },
      { id: 'whm-lucid-dreaming',    name: 'Lucid Dreaming',     nameLabel: { zh: '醒梦',        en: 'Lucid Dreaming' },     type: 'ability', level: 24 },
      { id: 'whm-swiftcast',         name: 'Swiftcast',          nameLabel: { zh: '即刻咏唱',    en: 'Swiftcast' },          type: 'ability', level: 18 },
      { id: 'whm-presence-of-mind',  name: 'Presence of Mind',   nameLabel: { zh: '神速咏唱',    en: 'Presence of Mind' },   type: 'ability', level: 30 },
      { id: 'whm-cure-ii',           name: 'Cure II',            nameLabel: { zh: '救疗',        en: 'Cure II' },            type: 'spell',   level: 30 },
      { id: 'whm-regen',             name: 'Regen',              nameLabel: { zh: '再生',        en: 'Regen' },              type: 'spell',   level: 35 },
      { id: 'whm-cure-iii',          name: 'Cure III',           nameLabel: { zh: '愈疗',        en: 'Cure III' },           type: 'spell',   level: 40 },
      { id: 'whm-holy',              name: 'Holy',               nameLabel: { zh: '神圣',        en: 'Holy' },               type: 'spell',   level: 45 },
      { id: 'whm-benediction',       name: 'Benediction',        nameLabel: { zh: '天赐祝福',    en: 'Benediction' },        type: 'ability', level: 50 },
      { id: 'whm-medica-ii',         name: 'Medica II',          nameLabel: { zh: '医济',        en: 'Medica II' },          type: 'spell',   level: 50 },
      { id: 'whm-afflatus-solace',   name: 'Afflatus Solace',    nameLabel: { zh: '安慰之心',    en: 'Afflatus Solace' },    type: 'ability', level: 52 },
      { id: 'whm-asylum',            name: 'Asylum',             nameLabel: { zh: '庇护所',      en: 'Asylum' },             type: 'ability', level: 52 },
      { id: 'whm-stone-iii',         name: 'Stone III',          nameLabel: { zh: '垒石',        en: 'Stone III' },          type: 'spell',   level: 54 },
      { id: 'whm-assize',            name: 'Assize',             nameLabel: { zh: '法令',        en: 'Assize' },             type: 'ability', level: 56 },
      { id: 'whm-thin-air',          name: 'Thin Air',           nameLabel: { zh: '无中生有',    en: 'Thin Air' },           type: 'ability', level: 58 },
      { id: 'whm-tetragrammaton',    name: 'Tetragrammaton',     nameLabel: { zh: '神名',        en: 'Tetragrammaton' },     type: 'ability', level: 60 },
      { id: 'whm-stone-iv',          name: 'Stone IV',           nameLabel: { zh: '崩石',        en: 'Stone IV' },           type: 'spell',   level: 64 },
      { id: 'whm-divine-benison',    name: 'Divine Benison',     nameLabel: { zh: '神祝祷',      en: 'Divine Benison' },     type: 'ability', level: 66 },
      { id: 'whm-plenary-indulgence',name: 'Plenary Indulgence', nameLabel: { zh: '全大赦',      en: 'Plenary Indulgence' }, type: 'ability', level: 70 },
      { id: 'whm-dia',               name: 'Dia',                nameLabel: { zh: '天辉',        en: 'Dia' },                type: 'spell',   level: 72 },
      { id: 'whm-glare',             name: 'Glare',              nameLabel: { zh: '闪耀',        en: 'Glare' },              type: 'spell',   level: 72 },
      { id: 'whm-afflatus-misery',   name: 'Afflatus Misery',    nameLabel: { zh: '苦难之心',    en: 'Afflatus Misery' },    type: 'ability', level: 74 },
      { id: 'whm-afflatus-rapture',  name: 'Afflatus Rapture',   nameLabel: { zh: '狂喜之心',    en: 'Afflatus Rapture' },   type: 'ability', level: 76 },
      { id: 'whm-temperance',        name: 'Temperance',         nameLabel: { zh: '节制',        en: 'Temperance' },         type: 'ability', level: 80 },
      { id: 'whm-aquaveil',          name: 'Aquaveil',           nameLabel: { zh: '水流幕',      en: 'Aquaveil' },           type: 'ability', level: 86 },
      { id: 'whm-liturgy-of-the-bell',name:'Liturgy of the Bell',nameLabel: { zh: '礼仪之铃',    en: 'Liturgy of the Bell' },type: 'ability', level: 90 },
      { id: 'whm-glare-iii',         name: 'Glare III',          nameLabel: { zh: '闪灼',        en: 'Glare III' },          type: 'spell',   level: 82 },
    ],
  },
  {
    id: 'sch',
    name: 'Scholar',
    nameLabel: { zh: '学者', en: 'Scholar' },
    role: 'healer',
    skills: [],
  },
  {
    id: 'ast',
    name: 'Astrologian',
    nameLabel: { zh: '占星术士', en: 'Astrologian' },
    role: 'healer',
    skills: [],
  },
  {
    id: 'sge',
    name: 'Sage',
    nameLabel: { zh: '贤者', en: 'Sage' },
    role: 'healer',
    skills: [],
  },

  // ===== 近战 Melee DPS =====
  {
    id: 'mnk',
    name: 'Monk',
    nameLabel: { zh: '武僧', en: 'Monk' },
    role: 'melee',
    skills: [],
  },
  {
    id: 'drg',
    name: 'Dragoon',
    nameLabel: { zh: '龙骑士', en: 'Dragoon' },
    role: 'melee',
    skills: [],
  },
  {
    id: 'nin',
    name: 'Ninja',
    nameLabel: { zh: '忍者', en: 'Ninja' },
    role: 'melee',
    skills: [],
  },
  {
    id: 'sam',
    name: 'Samurai',
    nameLabel: { zh: '武士', en: 'Samurai' },
    role: 'melee',
    skills: [],
  },
  {
    id: 'rpr',
    name: 'Reaper',
    nameLabel: { zh: '钐镰客', en: 'Reaper' },
    role: 'melee',
    skills: [],
  },
  {
    id: 'vpr',
    name: 'Viper',
    nameLabel: { zh: '蝰蛇剑士', en: 'Viper' },
    role: 'melee',
    skills: [],
  },

  // ===== 远程 Ranged DPS =====
  {
    id: 'brd',
    name: 'Bard',
    nameLabel: { zh: '吟游诗人', en: 'Bard' },
    role: 'ranged',
    skills: [],
  },
  {
    id: 'mch',
    name: 'Machinist',
    nameLabel: { zh: '机工士', en: 'Machinist' },
    role: 'ranged',
    skills: [],
  },
  {
    id: 'dnc',
    name: 'Dancer',
    nameLabel: { zh: '舞者', en: 'Dancer' },
    role: 'ranged',
    skills: [],
  },

  // ===== 法系 Caster DPS =====
  {
    id: 'blm',
    name: 'Black Mage',
    nameLabel: { zh: '黑魔法师', en: 'Black Mage' },
    role: 'caster',
    skills: [
      { id: 'blm-blizzard',            name: 'Blizzard',             nameLabel: { zh: '冰结',        en: 'Blizzard' },             type: 'spell',   level: 2 },
      { id: 'blm-fire',                name: 'Fire',                 nameLabel: { zh: '火炎',        en: 'Fire' },                 type: 'spell',   level: 2 },
      { id: 'blm-transpose',           name: 'Transpose',            nameLabel: { zh: '移转',        en: 'Transpose' },            type: 'ability', level: 4 },
      { id: 'blm-thunder',             name: 'Thunder',              nameLabel: { zh: '闪雷',        en: 'Thunder' },              type: 'spell',   level: 6 },
      { id: 'blm-sleep',               name: 'Sleep',                nameLabel: { zh: '催眠',        en: 'Sleep' },                type: 'spell',   level: 14 },
      { id: 'blm-blizzard-ii',         name: 'Blizzard II',          nameLabel: { zh: '冰冻',        en: 'Blizzard II' },          type: 'spell',   level: 12 },
      { id: 'blm-scathe',              name: 'Scathe',               nameLabel: { zh: '崩溃',        en: 'Scathe' },               type: 'spell',   level: 15 },
      { id: 'blm-fire-ii',             name: 'Fire II',              nameLabel: { zh: '烈炎',        en: 'Fire II' },              type: 'spell',   level: 18 },
      { id: 'blm-thunder-ii',          name: 'Thunder II',           nameLabel: { zh: '震雷',        en: 'Thunder II' },           type: 'spell',   level: 26 },
      { id: 'blm-manafont',            name: 'Manafont',             nameLabel: { zh: '魔泉',        en: 'Manafont' },             type: 'ability', level: 30 },
      { id: 'blm-fire-iii',            name: 'Fire III',             nameLabel: { zh: '爆炎',        en: 'Fire III' },             type: 'spell',   level: 34 },
      { id: 'blm-blizzard-iii',        name: 'Blizzard III',         nameLabel: { zh: '冰封',        en: 'Blizzard III' },         type: 'spell',   level: 40 },
      { id: 'blm-thunder-iii',         name: 'Thunder III',          nameLabel: { zh: '暴雷',        en: 'Thunder III' },          type: 'spell',   level: 45 },
      { id: 'blm-flare',               name: 'Flare',                nameLabel: { zh: '核爆',        en: 'Flare' },                type: 'spell',   level: 50 },
      { id: 'blm-aetherial-manipulation',name:'Aetherial Manipulation',nameLabel:{ zh: '以太步',      en: 'Aetherial Manipulation' },type:'ability', level: 50 },
      { id: 'blm-ley-lines',           name: 'Ley Lines',            nameLabel: { zh: '黑魔纹',      en: 'Ley Lines' },            type: 'ability', level: 52 },
      { id: 'blm-sharpcast',           name: 'Sharpcast',            nameLabel: { zh: '激情咏唱',    en: 'Sharpcast' },            type: 'ability', level: 54 },
      { id: 'blm-enochian',            name: 'Enochian',             nameLabel: { zh: '天语',        en: 'Enochian' },             type: 'ability', level: 56 },
      { id: 'blm-blizzard-iv',         name: 'Blizzard IV',          nameLabel: { zh: '冰澈',        en: 'Blizzard IV' },          type: 'spell',   level: 58 },
      { id: 'blm-fire-iv',             name: 'Fire IV',              nameLabel: { zh: '炽炎',        en: 'Fire IV' },              type: 'spell',   level: 60 },
      { id: 'blm-between-the-lines',   name: 'Between the Lines',    nameLabel: { zh: '魔纹步',      en: 'Between the Lines' },    type: 'ability', level: 62 },
      { id: 'blm-triplecast',          name: 'Triplecast',           nameLabel: { zh: '三连咏唱',    en: 'Triplecast' },           type: 'ability', level: 66 },
      { id: 'blm-foul',                name: 'Foul',                 nameLabel: { zh: '秽浊',        en: 'Foul' },                 type: 'spell',   level: 70 },
      { id: 'blm-despair',             name: 'Despair',              nameLabel: { zh: '绝望',        en: 'Despair' },              type: 'spell',   level: 72 },
      { id: 'blm-umbral-soul',         name: 'Umbral Soul',          nameLabel: { zh: '灵极魂',      en: 'Umbral Soul' },          type: 'spell',   level: 35 },
      { id: 'blm-xenoglossy',          name: 'Xenoglossy',           nameLabel: { zh: '异言',        en: 'Xenoglossy' },           type: 'spell',   level: 80 },
      { id: 'blm-amplifier',           name: 'Amplifier',            nameLabel: { zh: '详述',        en: 'Amplifier' },            type: 'ability', level: 86 },
      { id: 'blm-paradox',             name: 'Paradox',              nameLabel: { zh: '悖论',        en: 'Paradox' },              type: 'spell',   level: 90 },
      { id: 'blm-addle',               name: 'Addle',                nameLabel: { zh: '病毒',        en: 'Addle' },                type: 'ability', level: 8 },
      { id: 'blm-swiftcast',           name: 'Swiftcast',            nameLabel: { zh: '即刻咏唱',    en: 'Swiftcast' },            type: 'ability', level: 18 },
      { id: 'blm-lucid-dreaming',      name: 'Lucid Dreaming',       nameLabel: { zh: '醒梦',        en: 'Lucid Dreaming' },       type: 'ability', level: 24 },
      { id: 'blm-surecast',            name: 'Surecast',             nameLabel: { zh: '沉稳咏唱',    en: 'Surecast' },             type: 'ability', level: 44 },
    ],
  },
  {
    id: 'smn',
    name: 'Summoner',
    nameLabel: { zh: '召唤师', en: 'Summoner' },
    role: 'caster',
    skills: [],
  },
  {
    id: 'rdm',
    name: 'Red Mage',
    nameLabel: { zh: '赤魔法师', en: 'Red Mage' },
    role: 'caster',
    skills: [],
  },
  {
    id: 'pct',
    name: 'Pictomancer',
    nameLabel: { zh: '绘灵法师', en: 'Pictomancer' },
    role: 'caster',
    skills: [],
  },
];
