export enum CommandCategory {
  ACTION = 'action',
  TEXT = 'text',
  WAIT = 'wait',
  TARGET = 'target',
  UI = 'ui',
  UTILITY = 'utility',
  SOCIAL = 'social',
  MACRO = 'macro',
  MENU = 'menu',
  SETTINGS = 'settings',
  CONDITIONAL = 'conditional'
}

export interface Parameter {
  name: string;
  type: 'string' | 'number' | 'select';
  required: boolean;
  options?: string[];
  defaultValue?: string;
  description: string;
  descriptionLabel?: { zh: string; en: string };
  optionLabels?: Record<string, { zh: string; en: string }>;
  min?: number;
  max?: number;
}

export interface MacroCommand {
  id: string;
  name: string;
  category: CommandCategory;
  syntax: string;
  description: string;
  parameters: Parameter[];
  example: string;
  nameLabel?: { zh: string; en: string };
  descriptionLabel?: { zh: string; en: string };
}

const TARGET_OPTION_LABELS: Record<string, { zh: string; en: string }> = {
  '<t>': { zh: '当前目标', en: 'Current Target' },
  '<me>': { zh: '自己', en: 'Self' },
  '<mo>': { zh: '鼠标悬停目标', en: 'Mouse Over' },
  '<f>': { zh: '焦点目标', en: 'Focus Target' },
  '<focus>': { zh: '焦点目标', en: 'Focus Target' },
  '<tt>': { zh: '目标的目标', en: "Target's Target" },
  '<2>': { zh: '队员2', en: 'Party Member 2' },
  '<3>': { zh: '队员3', en: 'Party Member 3' },
  '<4>': { zh: '队员4', en: 'Party Member 4' },
  '<5>': { zh: '队员5', en: 'Party Member 5' },
  '<6>': { zh: '队员6', en: 'Party Member 6' },
  '<7>': { zh: '队员7', en: 'Party Member 7' },
  '<8>': { zh: '队员8', en: 'Party Member 8' },
};

export const COMMANDS: MacroCommand[] = [
  // ===== ACTION =====
  {
    id: 'action',
    name: 'Action',
    category: CommandCategory.ACTION,
    syntax: '/ac "{skill}" {target}',
    description: 'Execute an action or skill',
    nameLabel: { zh: '技能', en: 'Action' },
    descriptionLabel: { zh: '对指定目标使用指定技能', en: 'Execute an action or skill on target' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'Skill name (e.g., "Holy Spirit")',
        descriptionLabel: { zh: '技能名称', en: 'Skill name' }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target placeholder',
        descriptionLabel: { zh: '目标', en: 'Target' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/ac "Holy Spirit" <t>'
  },
  {
    id: 'blueaction',
    name: 'Blue Magic',
    category: CommandCategory.ACTION,
    syntax: '/blueaction "{spell}" {target}',
    description: 'Use a blue magic spell on target',
    nameLabel: { zh: '青魔法技能', en: 'Blue Magic' },
    descriptionLabel: { zh: '对指定目标使用青魔法', en: 'Use a blue magic spell on target' },
    parameters: [
      {
        name: 'spell',
        type: 'string',
        required: true,
        description: 'Blue magic spell name',
        descriptionLabel: { zh: '青魔法名称', en: 'Blue magic spell name' }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target placeholder',
        descriptionLabel: { zh: '目标', en: 'Target' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/blueaction "Water Cannon" <t>'
  },
  {
    id: 'pvpaction',
    name: 'PvP Action',
    category: CommandCategory.ACTION,
    syntax: '/pvpaction "{skill}" {target}',
    description: 'Use a PvP action on target',
    nameLabel: { zh: '对战技能', en: 'PvP Action' },
    descriptionLabel: { zh: '对指定目标使用对战技能', en: 'Use a PvP action on target' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'PvP skill name',
        descriptionLabel: { zh: '对战技能名称', en: 'PvP skill name' }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target placeholder',
        descriptionLabel: { zh: '目标', en: 'Target' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/pvpaction "Combo" <t>'
  },
  {
    id: 'wait_action',
    name: 'Wait Action',
    category: CommandCategory.ACTION,
    syntax: '/wac "{skill}" {target}',
    description: 'Execute an action with automatic wait',
    nameLabel: { zh: '等待技能', en: 'Wait Action' },
    descriptionLabel: { zh: '使用技能并自动等待', en: 'Execute an action with automatic wait' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'Skill name',
        descriptionLabel: { zh: '技能名称', en: 'Skill name' }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target placeholder',
        descriptionLabel: { zh: '目标', en: 'Target' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/wac "Holy Spirit" <t>'
  },
  {
    id: 'generalaction',
    name: 'General Action',
    category: CommandCategory.ACTION,
    syntax: '/generalaction "{skill}"',
    description: 'Use a general action',
    nameLabel: { zh: '共通技能', en: 'General Action' },
    descriptionLabel: { zh: '发动共通技能', en: 'Use a general action' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'General action name',
        descriptionLabel: { zh: '共通技能名称', en: 'General action name' }
      }
    ],
    example: '/generalaction "Sprint"'
  },
  {
    id: 'petaction',
    name: 'Pet Action',
    category: CommandCategory.ACTION,
    syntax: '/petaction "{skill}" {target}',
    description: 'Command pet to use a skill',
    nameLabel: { zh: '召唤兽技能', en: 'Pet Action' },
    descriptionLabel: { zh: '命令召唤兽使用技能', en: 'Command pet to use a skill' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'Pet skill name',
        descriptionLabel: { zh: '召唤兽技能名称', en: 'Pet skill name' }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>'],
        defaultValue: '<t>',
        description: 'Target placeholder',
        descriptionLabel: { zh: '目标', en: 'Target' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/petaction "Obey" <t>'
  },
  {
    id: 'mount',
    name: 'Mount',
    category: CommandCategory.ACTION,
    syntax: '/mount "{mount}"',
    description: 'Mount a specified mount',
    nameLabel: { zh: '坐骑', en: 'Mount' },
    descriptionLabel: { zh: '乘上指定的坐骑', en: 'Mount a specified mount' },
    parameters: [
      {
        name: 'mount',
        type: 'string',
        required: true,
        description: 'Mount name',
        descriptionLabel: { zh: '坐骑名称', en: 'Mount name' }
      }
    ],
    example: '/mount "Company Chocobo"'
  },
  {
    id: 'minion',
    name: 'Minion',
    category: CommandCategory.ACTION,
    syntax: '/minion "{minion}"',
    description: 'Summon a minion',
    nameLabel: { zh: '宠物', en: 'Minion' },
    descriptionLabel: { zh: '召唤指定的宠物', en: 'Summon a minion' },
    parameters: [
      {
        name: 'minion',
        type: 'string',
        required: true,
        description: 'Minion name',
        descriptionLabel: { zh: '宠物名称', en: 'Minion name' }
      }
    ],
    example: '/minion "Wind-up Tonberry"'
  },
  {
    id: 'recast',
    name: 'Recast',
    category: CommandCategory.ACTION,
    syntax: '/recast "{skill}"',
    description: 'Display recast time of a skill',
    nameLabel: { zh: '复唱时间', en: 'Recast' },
    descriptionLabel: { zh: '显示技能的复唱时间', en: 'Display recast time of a skill' },
    parameters: [
      {
        name: 'skill',
        type: 'string',
        required: true,
        description: 'Skill name',
        descriptionLabel: { zh: '技能名称', en: 'Skill name' }
      }
    ],
    example: '/recast "Aetherflow"'
  },

  // ===== TEXT =====
  {
    id: 'say',
    name: 'Say',
    category: CommandCategory.TEXT,
    syntax: '/say {message}',
    description: 'Send a message to local chat',
    nameLabel: { zh: '说话频道', en: 'Say' },
    descriptionLabel: { zh: '在身边小范围内发言', en: 'Send a message to local chat (20m)' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/say Hello everyone!'
  },
  {
    id: 'yell',
    name: 'Yell',
    category: CommandCategory.TEXT,
    syntax: '/yell {message}',
    description: 'Send a message to wide area chat',
    nameLabel: { zh: '呼喊频道', en: 'Yell' },
    descriptionLabel: { zh: '在身边大范围内发言(100m)', en: 'Send a message to wide area (100m)' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/yell Looking for group!'
  },
  {
    id: 'shout',
    name: 'Shout',
    category: CommandCategory.TEXT,
    syntax: '/shout {message}',
    description: 'Send a message to entire zone',
    nameLabel: { zh: '喊话频道', en: 'Shout' },
    descriptionLabel: { zh: '向当前区域所有玩家发言', en: 'Send a message to entire zone' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/shout FATE incoming!'
  },
  {
    id: 'tell',
    name: 'Tell',
    category: CommandCategory.TEXT,
    syntax: '/tell {player} {message}',
    description: 'Send a private message',
    nameLabel: { zh: '悄悄话', en: 'Tell' },
    descriptionLabel: { zh: '向指定玩家发送悄悄话', en: 'Send a private message to a player' },
    parameters: [
      {
        name: 'player',
        type: 'string',
        required: true,
        description: 'Player name@Server',
        descriptionLabel: { zh: '玩家名@服务器', en: 'Player name@Server' }
      },
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/tell Player@Server Hello!'
  },
  {
    id: 'reply',
    name: 'Reply',
    category: CommandCategory.TEXT,
    syntax: '/reply {message}',
    description: 'Reply to last tell',
    nameLabel: { zh: '回复', en: 'Reply' },
    descriptionLabel: { zh: '回复最后收到的悄悄话', en: 'Reply to last received tell' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/reply Thanks!'
  },
  {
    id: 'party',
    name: 'Party',
    category: CommandCategory.TEXT,
    syntax: '/p {message}',
    description: 'Send a message to party chat',
    nameLabel: { zh: '小队频道', en: 'Party' },
    descriptionLabel: { zh: '向小队成员发送消息', en: 'Send a message to party chat' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/p Incoming!'
  },
  {
    id: 'alliance',
    name: 'Alliance',
    category: CommandCategory.TEXT,
    syntax: '/a {message}',
    description: 'Send a message to alliance chat',
    nameLabel: { zh: '团队频道', en: 'Alliance' },
    descriptionLabel: { zh: '向团队成员发送消息', en: 'Send a message to alliance chat' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/a Boss incoming!'
  },
  {
    id: 'freecompany',
    name: 'Free Company',
    category: CommandCategory.TEXT,
    syntax: '/fc {message}',
    description: 'Send a message to free company chat',
    nameLabel: { zh: '部队频道', en: 'Free Company' },
    descriptionLabel: { zh: '向部队成员发送消息', en: 'Send a message to free company chat' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/fc Hello everyone!'
  },
  {
    id: 'echo',
    name: 'Echo',
    category: CommandCategory.TEXT,
    syntax: '/echo {message}',
    description: 'Show a message only to yourself',
    nameLabel: { zh: '默语', en: 'Echo' },
    descriptionLabel: { zh: '显示只有自己能看到的消息', en: 'Show a message only to yourself' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/echo Macro started'
  },
  {
    id: 'beginner',
    name: 'Novice Network',
    category: CommandCategory.TEXT,
    syntax: '/beginner {message}',
    description: 'Send a message to novice network',
    nameLabel: { zh: '新人频道', en: 'Novice Network' },
    descriptionLabel: { zh: '向新人频道发送消息', en: 'Send a message to novice network' },
    parameters: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Message text',
        descriptionLabel: { zh: '发言内容', en: 'Message text' }
      }
    ],
    example: '/beginner Hello!'
  },

  // ===== WAIT =====
  {
    id: 'wait',
    name: 'Wait',
    category: CommandCategory.WAIT,
    syntax: '/wait {seconds}',
    description: 'Wait for specified seconds',
    nameLabel: { zh: '等待', en: 'Wait' },
    descriptionLabel: { zh: '等待指定的秒数', en: 'Wait for specified seconds' },
    parameters: [
      {
        name: 'seconds',
        type: 'number',
        required: true,
        defaultValue: '1',
        description: 'Wait duration in seconds (max 60)',
        descriptionLabel: { zh: '等待秒数（最多60）', en: 'Wait duration in seconds (max 60)' },
        min: 1,
        max: 60
      }
    ],
    example: '/wait 2'
  },
  {
    id: 'countdown',
    name: 'Countdown',
    category: CommandCategory.WAIT,
    syntax: '/countdown {seconds}',
    description: 'Start a countdown timer',
    nameLabel: { zh: '倒计时', en: 'Countdown' },
    descriptionLabel: { zh: '发起战斗开始倒计时', en: 'Start a countdown timer' },
    parameters: [
      {
        name: 'seconds',
        type: 'number',
        required: true,
        defaultValue: '10',
        description: 'Countdown in seconds (5-30)',
        descriptionLabel: { zh: '倒计时秒数（5-30）', en: 'Countdown in seconds (5-30)' },
        min: 5,
        max: 30
      }
    ],
    example: '/countdown 10'
  },

  // ===== TARGET =====
  {
    id: 'target',
    name: 'Target',
    category: CommandCategory.TARGET,
    syntax: '/target {target}',
    description: 'Target a specific entity',
    nameLabel: { zh: '选中', en: 'Target' },
    descriptionLabel: { zh: '选中指定的目标', en: 'Target a specific entity' },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: true,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>', '<2>', '<3>', '<4>', '<5>', '<6>', '<7>', '<8>'],
        defaultValue: '<t>',
        description: 'Target to select',
        descriptionLabel: { zh: '要选中的目标', en: 'Target to select' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/target <mo>'
  },
  {
    id: 'targetpc',
    name: 'Target PC',
    category: CommandCategory.TARGET,
    syntax: '/targetpc',
    description: 'Target nearest player',
    nameLabel: { zh: '选中最近玩家', en: 'Target PC' },
    descriptionLabel: { zh: '选中距离最近的玩家', en: 'Target nearest player character' },
    parameters: [],
    example: '/targetpc'
  },
  {
    id: 'targetenemy',
    name: 'Target Enemy',
    category: CommandCategory.TARGET,
    syntax: '/targetenemy',
    description: 'Target nearest enemy',
    nameLabel: { zh: '选中最近敌人', en: 'Target Enemy' },
    descriptionLabel: { zh: '选中距离最近的敌人', en: 'Target nearest enemy' },
    parameters: [],
    example: '/targetenemy'
  },
  {
    id: 'battletarget',
    name: 'Battle Target',
    category: CommandCategory.TARGET,
    syntax: '/battletarget',
    description: 'Target nearest enemy engaged with you',
    nameLabel: { zh: '战斗目标', en: 'Battle Target' },
    descriptionLabel: { zh: '选中敌视自己的最近敌人', en: 'Target nearest enemy engaged with you' },
    parameters: [],
    example: '/battletarget'
  },
  {
    id: 'focus',
    name: 'Focus Target',
    category: CommandCategory.TARGET,
    syntax: '/focustarget {target}',
    description: 'Set focus target',
    nameLabel: { zh: '焦点目标', en: 'Focus Target' },
    descriptionLabel: { zh: '设置焦点目标', en: 'Set focus target' },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: true,
        options: ['<t>', '<me>', '<mo>', '<f>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target to focus',
        descriptionLabel: { zh: '要设为焦点的目标', en: 'Target to focus' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/focustarget <t>'
  },
  {
    id: 'clear_target',
    name: 'Clear Target',
    category: CommandCategory.TARGET,
    syntax: '/cleartarget',
    description: 'Clear current target',
    nameLabel: { zh: '清除目标', en: 'Clear Target' },
    descriptionLabel: { zh: '清除当前目标', en: 'Clear current target' },
    parameters: [],
    example: '/cleartarget'
  },
  {
    id: 'assist',
    name: 'Assist',
    category: CommandCategory.TARGET,
    syntax: '/assist {target}',
    description: "Target your target's target",
    nameLabel: { zh: '目标的目标', en: 'Assist' },
    descriptionLabel: { zh: '选中目标的当前目标', en: "Target your target's target" },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: true,
        options: ['<2>', '<3>', '<4>', '<5>', '<6>', '<7>', '<8>', '<mo>'],
        defaultValue: '<2>',
        description: 'Party member to assist',
        descriptionLabel: { zh: '要协助的队员', en: 'Party member to assist' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/assist <2>'
  },
  {
    id: 'lockon',
    name: 'Lock On',
    category: CommandCategory.TARGET,
    syntax: '/lockon',
    description: 'Toggle camera lock on target',
    nameLabel: { zh: '锁定', en: 'Lock On' },
    descriptionLabel: { zh: '锁定/解除锁定当前目标', en: 'Toggle camera lock on target' },
    parameters: [],
    example: '/lockon'
  },
  {
    id: 'facetarget',
    name: 'Face Target',
    category: CommandCategory.TARGET,
    syntax: '/facetarget',
    description: 'Turn to face current target',
    nameLabel: { zh: '转向目标', en: 'Face Target' },
    descriptionLabel: { zh: '转身面向当前目标', en: 'Turn to face current target' },
    parameters: [],
    example: '/facetarget'
  },
  {
    id: 'nexttarget',
    name: 'Next Target',
    category: CommandCategory.TARGET,
    syntax: '/nexttarget',
    description: 'Cycle to next enemy (clockwise)',
    nameLabel: { zh: '右侧选择', en: 'Next Target' },
    descriptionLabel: { zh: '按顺时针方向选中下一个敌人', en: 'Cycle to next enemy (clockwise)' },
    parameters: [],
    example: '/nexttarget'
  },
  {
    id: 'previoustarget',
    name: 'Previous Target',
    category: CommandCategory.TARGET,
    syntax: '/previoustarget',
    description: 'Cycle to previous enemy (counter-clockwise)',
    nameLabel: { zh: '左侧选择', en: 'Previous Target' },
    descriptionLabel: { zh: '按逆时针方向选中上一个敌人', en: 'Cycle to previous enemy (counter-clockwise)' },
    parameters: [],
    example: '/previoustarget'
  },
  {
    id: 'targetlasttarget',
    name: 'Last Target',
    category: CommandCategory.TARGET,
    syntax: '/targetlasttarget',
    description: 'Target last target',
    nameLabel: { zh: '上次目标', en: 'Last Target' },
    descriptionLabel: { zh: '重新选中上次的目标', en: 'Re-select last target' },
    parameters: [],
    example: '/targetlasttarget'
  },
  {
    id: 'marking',
    name: 'Marking',
    category: CommandCategory.TARGET,
    syntax: '/marking {type} {target}',
    description: 'Place a marking on target',
    nameLabel: { zh: '标记', en: 'Marking' },
    descriptionLabel: { zh: '给目标加上标记', en: 'Place a marking on target' },
    parameters: [
      {
        name: 'type',
        type: 'select',
        required: true,
        options: ['attack1', 'attack2', 'attack3', 'attack4', 'attack5', 'bind1', 'bind2', 'bind3', 'stop1', 'stop2', 'square', 'circle', 'cross', 'triangle', 'clear'],
        defaultValue: 'attack1',
        description: 'Marking type',
        descriptionLabel: { zh: '标记类型', en: 'Marking type' },
        optionLabels: {
          'attack1': { zh: '攻击1', en: 'Attack 1' },
          'attack2': { zh: '攻击2', en: 'Attack 2' },
          'attack3': { zh: '攻击3', en: 'Attack 3' },
          'attack4': { zh: '攻击4', en: 'Attack 4' },
          'attack5': { zh: '攻击5', en: 'Attack 5' },
          'bind1': { zh: '止步1', en: 'Bind 1' },
          'bind2': { zh: '止步2', en: 'Bind 2' },
          'bind3': { zh: '止步3', en: 'Bind 3' },
          'stop1': { zh: '禁止1', en: 'Stop 1' },
          'stop2': { zh: '禁止2', en: 'Stop 2' },
          'square': { zh: '方块', en: 'Square' },
          'circle': { zh: '圆圈', en: 'Circle' },
          'cross': { zh: '十字', en: 'Cross' },
          'triangle': { zh: '三角', en: 'Triangle' },
          'clear': { zh: '清除', en: 'Clear' },
        }
      },
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<me>', '<mo>', '<f>', '<focus>', '<tt>'],
        defaultValue: '<t>',
        description: 'Target to mark',
        descriptionLabel: { zh: '要标记的目标', en: 'Target to mark' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/marking attack1 <t>'
  },
  {
    id: 'statusoff',
    name: 'Status Off',
    category: CommandCategory.TARGET,
    syntax: '/statusoff "{status}"',
    description: 'Remove a beneficial status effect',
    nameLabel: { zh: '解除状态', en: 'Status Off' },
    descriptionLabel: { zh: '解除指定的强化状态', en: 'Remove a beneficial status effect' },
    parameters: [
      {
        name: 'status',
        type: 'string',
        required: true,
        description: 'Status effect name',
        descriptionLabel: { zh: '状态名称', en: 'Status effect name' }
      }
    ],
    example: '/statusoff "Defiance"'
  },

  // ===== UI =====
  {
    id: 'hotbar',
    name: 'Hotbar',
    category: CommandCategory.UI,
    syntax: '/hotbar {action} {slot} {bar}',
    description: 'Modify hotbar',
    nameLabel: { zh: '热键栏', en: 'Hotbar' },
    descriptionLabel: { zh: '对热键栏进行操作', en: 'Modify hotbar settings' },
    parameters: [
      {
        name: 'action',
        type: 'select',
        required: true,
        options: ['set', 'change', 'display', 'share', 'remove', 'copy'],
        defaultValue: 'set',
        description: 'Action to perform',
        descriptionLabel: { zh: '操作类型', en: 'Action to perform' },
        optionLabels: {
          'set': { zh: '设置', en: 'Set' },
          'change': { zh: '切换', en: 'Change' },
          'display': { zh: '显示', en: 'Display' },
          'share': { zh: '共通', en: 'Share' },
          'remove': { zh: '清除', en: 'Remove' },
          'copy': { zh: '复制', en: 'Copy' },
        }
      },
      {
        name: 'slot',
        type: 'number',
        required: true,
        defaultValue: '1',
        description: 'Slot number',
        descriptionLabel: { zh: '槽位编号', en: 'Slot number' }
      },
      {
        name: 'bar',
        type: 'number',
        required: true,
        defaultValue: '1',
        description: 'Hotbar number',
        descriptionLabel: { zh: '热键栏编号', en: 'Hotbar number' }
      }
    ],
    example: '/hotbar set "Sprint" 1 1'
  },
  {
    id: 'crosshotbar',
    name: 'Cross Hotbar',
    category: CommandCategory.UI,
    syntax: '/crosshotbar {action} {slot} {bar}',
    description: 'Modify cross hotbar',
    nameLabel: { zh: '十字热键栏', en: 'Cross Hotbar' },
    descriptionLabel: { zh: '对十字热键栏进行操作', en: 'Modify cross hotbar settings' },
    parameters: [
      {
        name: 'action',
        type: 'select',
        required: true,
        options: ['set', 'change', 'display', 'share', 'remove', 'copy'],
        defaultValue: 'set',
        description: 'Action to perform',
        descriptionLabel: { zh: '操作类型', en: 'Action to perform' },
        optionLabels: {
          'set': { zh: '设置', en: 'Set' },
          'change': { zh: '切换', en: 'Change' },
          'display': { zh: '显示', en: 'Display' },
          'share': { zh: '共通', en: 'Share' },
          'remove': { zh: '清除', en: 'Remove' },
          'copy': { zh: '复制', en: 'Copy' },
        }
      },
      {
        name: 'slot',
        type: 'string',
        required: true,
        defaultValue: 'LD1',
        description: 'Slot position (e.g., LD1, RA1)',
        descriptionLabel: { zh: '槽位位置', en: 'Slot position' }
      },
      {
        name: 'bar',
        type: 'number',
        required: true,
        defaultValue: '1',
        description: 'Cross hotbar number',
        descriptionLabel: { zh: '十字热键栏编号', en: 'Cross hotbar number' }
      }
    ],
    example: '/crosshotbar set "Sprint" LD1 1'
  },
  {
    id: 'hud',
    name: 'HUD',
    category: CommandCategory.UI,
    syntax: '/hud {element}',
    description: 'Toggle HUD element visibility',
    nameLabel: { zh: '界面显示', en: 'HUD' },
    descriptionLabel: { zh: '切换界面元素的显示', en: 'Toggle HUD element visibility' },
    parameters: [
      {
        name: 'element',
        type: 'select',
        required: true,
        options: ['TargetInfo', 'FocusTarget', 'PartyList', 'EnemyList', 'MyParam', 'NaviMap', 'MainCommand', 'GeneralInfo', 'CurrencyStatus', 'ItemSign', 'ToDoList', 'LimitGauge', 'ExpBar', 'BuffDebuffStatus', 'Hotbar1', 'Hotbar2', 'Hotbar3', 'Hotbar4', 'Hotbar5', 'Crosshotbar'],
        defaultValue: 'TargetInfo',
        description: 'HUD element name',
        descriptionLabel: { zh: '界面元素名称', en: 'HUD element name' },
        optionLabels: {
          'TargetInfo': { zh: '目标情报', en: 'Target Info' },
          'FocusTarget': { zh: '焦点目标', en: 'Focus Target' },
          'PartyList': { zh: '小队列表', en: 'Party List' },
          'EnemyList': { zh: '敌对列表', en: 'Enemy List' },
          'MyParam': { zh: '角色参数', en: 'My Parameters' },
          'NaviMap': { zh: '导向地图', en: 'Navigation Map' },
          'MainCommand': { zh: '快捷指令', en: 'Main Command' },
          'GeneralInfo': { zh: '基本情报', en: 'General Info' },
          'CurrencyStatus': { zh: '所持金币', en: 'Currency' },
          'ItemSign': { zh: '背包缩略图', en: 'Inventory' },
          'ToDoList': { zh: '任务情报', en: 'To-Do List' },
          'LimitGauge': { zh: '极限槽', en: 'Limit Gauge' },
          'ExpBar': { zh: '经验值栏', en: 'EXP Bar' },
          'BuffDebuffStatus': { zh: '状态效果', en: 'Buff/Debuff' },
          'Hotbar1': { zh: '热键栏1', en: 'Hotbar 1' },
          'Hotbar2': { zh: '热键栏2', en: 'Hotbar 2' },
          'Hotbar3': { zh: '热键栏3', en: 'Hotbar 3' },
          'Hotbar4': { zh: '热键栏4', en: 'Hotbar 4' },
          'Hotbar5': { zh: '热键栏5', en: 'Hotbar 5' },
          'Crosshotbar': { zh: '十字热键栏', en: 'Cross Hotbar' },
        }
      }
    ],
    example: '/hud PartyList'
  },
  {
    id: 'displayhead',
    name: 'Display Head',
    category: CommandCategory.UI,
    syntax: '/displayhead',
    description: 'Toggle display of head gear',
    nameLabel: { zh: '显示头部装备', en: 'Display Head' },
    descriptionLabel: { zh: '切换头部装备的显示', en: 'Toggle display of head gear' },
    parameters: [],
    example: '/displayhead'
  },

  // ===== UTILITY =====
  {
    id: 'macroicon',
    name: 'Macro Icon',
    category: CommandCategory.UTILITY,
    syntax: '/macroicon "{icon}"',
    description: 'Set macro icon',
    nameLabel: { zh: '宏图标', en: 'Macro Icon' },
    descriptionLabel: { zh: '设置宏在热键栏上显示的图标', en: 'Set the macro icon on hotbar' },
    parameters: [
      {
        name: 'icon',
        type: 'string',
        required: true,
        description: 'Icon name (skill/item/emote)',
        descriptionLabel: { zh: '图标名称', en: 'Icon name' }
      }
    ],
    example: '/macroicon "Cure"'
  },
  {
    id: 'merror',
    name: 'Macro Error',
    category: CommandCategory.UTILITY,
    syntax: '/merror {state}',
    description: 'Toggle macro error messages',
    nameLabel: { zh: '宏错误提示', en: 'Macro Error' },
    descriptionLabel: { zh: '设置是否显示宏错误提示', en: 'Toggle macro error messages' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'off',
        description: 'Error message visibility',
        descriptionLabel: { zh: '错误提示显示', en: 'Error message visibility' },
        optionLabels: {
          'on': { zh: '显示', en: 'On' },
          'off': { zh: '隐藏', en: 'Off' },
        }
      }
    ],
    example: '/merror off'
  },
  {
    id: 'macrolock',
    name: 'Macro Lock',
    category: CommandCategory.MACRO,
    syntax: '/macrolock',
    description: 'Lock macro execution until complete',
    nameLabel: { zh: '锁定宏指令', en: 'Macro Lock' },
    descriptionLabel: { zh: '锁定宏执行直到完成', en: 'Lock macro execution until complete' },
    parameters: [],
    example: '/macrolock'
  },
  {
    id: 'comment',
    name: 'Comment',
    category: CommandCategory.UTILITY,
    syntax: '// {comment}',
    description: 'Add a comment (not executed)',
    nameLabel: { zh: '注释', en: 'Comment' },
    descriptionLabel: { zh: '添加注释（不会被执行）', en: 'Add a comment (not executed)' },
    parameters: [
      {
        name: 'comment',
        type: 'string',
        required: true,
        description: 'Comment text',
        descriptionLabel: { zh: '注释内容', en: 'Comment text' }
      }
    ],
    example: '// This is a comment'
  },
  {
    id: 'gearset',
    name: 'Gear Set',
    category: CommandCategory.UTILITY,
    syntax: '/gearset change {set}',
    description: 'Change to a gear set',
    nameLabel: { zh: '套装', en: 'Gear Set' },
    descriptionLabel: { zh: '切换到指定套装', en: 'Change to a gear set' },
    parameters: [
      {
        name: 'set',
        type: 'number',
        required: true,
        defaultValue: '1',
        description: 'Gear set number',
        descriptionLabel: { zh: '套装编号', en: 'Gear set number' }
      }
    ],
    example: '/gearset change 1'
  },
  {
    id: 'random',
    name: 'Random',
    category: CommandCategory.UTILITY,
    syntax: '/random {max}',
    description: 'Roll a random number',
    nameLabel: { zh: '随机数', en: 'Random' },
    descriptionLabel: { zh: '抽取随机数并显示', en: 'Roll a random number' },
    parameters: [
      {
        name: 'max',
        type: 'number',
        required: false,
        defaultValue: '100',
        description: 'Maximum value (2-999)',
        descriptionLabel: { zh: '上限值（2-999）', en: 'Maximum value (2-999)' }
      }
    ],
    example: '/random 100'
  },
  {
    id: 'dice',
    name: 'Dice',
    category: CommandCategory.UTILITY,
    syntax: '/dice {max}',
    description: 'Roll dice in chat',
    nameLabel: { zh: '掷骰', en: 'Dice' },
    descriptionLabel: { zh: '在聊天中掷骰子', en: 'Roll dice in chat' },
    parameters: [
      {
        name: 'max',
        type: 'number',
        required: false,
        defaultValue: '100',
        description: 'Maximum value (2-999)',
        descriptionLabel: { zh: '上限值（2-999）', en: 'Maximum value (2-999)' }
      }
    ],
    example: '/dice 20'
  },

  // ===== SOCIAL =====
  {
    id: 'invite',
    name: 'Invite',
    category: CommandCategory.SOCIAL,
    syntax: '/invite {target}',
    description: 'Invite player to party',
    nameLabel: { zh: '邀请', en: 'Invite' },
    descriptionLabel: { zh: '邀请玩家加入小队', en: 'Invite player to party' },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>', '<mo>'],
        defaultValue: '<t>',
        description: 'Player to invite',
        descriptionLabel: { zh: '要邀请的玩家', en: 'Player to invite' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/invite <t>'
  },
  {
    id: 'kick',
    name: 'Kick',
    category: CommandCategory.SOCIAL,
    syntax: '/kick {target}',
    description: 'Remove player from party',
    nameLabel: { zh: '移除', en: 'Kick' },
    descriptionLabel: { zh: '将玩家移除小队', en: 'Remove player from party' },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: false,
        options: ['<t>'],
        defaultValue: '<t>',
        description: 'Player to kick',
        descriptionLabel: { zh: '要移除的玩家', en: 'Player to kick' },
        optionLabels: TARGET_OPTION_LABELS
      }
    ],
    example: '/kick <t>'
  },
  {
    id: 'leave',
    name: 'Leave',
    category: CommandCategory.SOCIAL,
    syntax: '/leave',
    description: 'Leave current party',
    nameLabel: { zh: '退队', en: 'Leave' },
    descriptionLabel: { zh: '退出当前小队', en: 'Leave current party' },
    parameters: [],
    example: '/leave'
  },
  {
    id: 'readycheck',
    name: 'Ready Check',
    category: CommandCategory.SOCIAL,
    syntax: '/readycheck',
    description: 'Initiate a ready check',
    nameLabel: { zh: '准备确认', en: 'Ready Check' },
    descriptionLabel: { zh: '发起准备确认', en: 'Initiate a ready check' },
    parameters: [],
    example: '/readycheck'
  },
  {
    id: 'follow',
    name: 'Follow',
    category: CommandCategory.SOCIAL,
    syntax: '/follow',
    description: 'Follow current target',
    nameLabel: { zh: '跟随', en: 'Follow' },
    descriptionLabel: { zh: '自动跟随当前目标', en: 'Follow current target' },
    parameters: [],
    example: '/follow'
  },
  {
    id: 'trade',
    name: 'Trade',
    category: CommandCategory.SOCIAL,
    syntax: '/trade',
    description: 'Open trade with target',
    nameLabel: { zh: '交易', en: 'Trade' },
    descriptionLabel: { zh: '向目标申请交易', en: 'Open trade with target' },
    parameters: [],
    example: '/trade'
  },
  {
    id: 'emote',
    name: 'Emote',
    category: CommandCategory.SOCIAL,
    syntax: '/emote {text}',
    description: 'Display custom emote text',
    nameLabel: { zh: '自定义情感动作', en: 'Emote' },
    descriptionLabel: { zh: '显示自定义情感动作文本', en: 'Display custom emote text' },
    parameters: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description: 'Emote text to display',
        descriptionLabel: { zh: '情感动作文本', en: 'Emote text to display' }
      }
    ],
    example: '/emote 做了个胜利的手势'
  },
  {
    id: 'dance',
    name: 'Dance',
    category: CommandCategory.SOCIAL,
    syntax: '/dance',
    description: 'Perform a dance',
    nameLabel: { zh: '跳舞', en: 'Dance' },
    descriptionLabel: { zh: '执行跳舞动作', en: 'Perform a dance' },
    parameters: [],
    example: '/dance'
  },
  {
    id: 'vpose',
    name: 'Victory Pose',
    category: CommandCategory.SOCIAL,
    syntax: '/vpose',
    description: 'Strike a victory pose',
    nameLabel: { zh: '胜利姿势', en: 'Victory Pose' },
    descriptionLabel: { zh: '摆出胜利姿势', en: 'Strike a victory pose' },
    parameters: [],
    example: '/vpose'
  },
  {
    id: 'bstance',
    name: 'Battle Stance',
    category: CommandCategory.SOCIAL,
    syntax: '/bstance',
    description: 'Take a battle stance',
    nameLabel: { zh: '战斗姿势', en: 'Battle Stance' },
    descriptionLabel: { zh: '摆出战斗姿势', en: 'Take a battle stance' },
    parameters: [],
    example: '/bstance'
  },
  {
    id: 'wave',
    name: 'Wave',
    category: CommandCategory.SOCIAL,
    syntax: '/wave',
    description: 'Wave at target',
    nameLabel: { zh: '挥手', en: 'Wave' },
    descriptionLabel: { zh: '向目标挥手', en: 'Wave at target' },
    parameters: [],
    example: '/wave'
  },
  {
    id: 'bow',
    name: 'Bow',
    category: CommandCategory.SOCIAL,
    syntax: '/bow',
    description: 'Bow to target',
    nameLabel: { zh: '鞠躬', en: 'Bow' },
    descriptionLabel: { zh: '向目标鞠躬', en: 'Bow to target' },
    parameters: [],
    example: '/bow'
  },
  {
    id: 'kneel',
    name: 'Kneel',
    category: CommandCategory.SOCIAL,
    syntax: '/kneel',
    description: 'Kneel down',
    nameLabel: { zh: '下跪', en: 'Kneel' },
    descriptionLabel: { zh: '跪下', en: 'Kneel down' },
    parameters: [],
    example: '/kneel'
  },
  {
    id: 'sit',
    name: 'Sit',
    category: CommandCategory.SOCIAL,
    syntax: '/sit',
    description: 'Sit down',
    nameLabel: { zh: '坐下', en: 'Sit' },
    descriptionLabel: { zh: '坐下', en: 'Sit down' },
    parameters: [],
    example: '/sit'
  },
  {
    id: 'beckon',
    name: 'Beckon',
    category: CommandCategory.SOCIAL,
    syntax: '/beckon',
    description: 'Beckon to target',
    nameLabel: { zh: '招手', en: 'Beckon' },
    descriptionLabel: { zh: '向目标招手', en: 'Beckon to target' },
    parameters: [],
    example: '/beckon'
  },
  {
    id: 'point',
    name: 'Point',
    category: CommandCategory.SOCIAL,
    syntax: '/point',
    description: 'Point at target',
    nameLabel: { zh: '指向', en: 'Point' },
    descriptionLabel: { zh: '指向目标', en: 'Point at target' },
    parameters: [],
    example: '/point'
  },
  {
    id: 'clap',
    name: 'Clap',
    category: CommandCategory.SOCIAL,
    syntax: '/clap',
    description: 'Clap hands',
    nameLabel: { zh: '鼓掌', en: 'Clap' },
    descriptionLabel: { zh: '鼓掌', en: 'Clap hands' },
    parameters: [],
    example: '/clap'
  },
  {
    id: 'happy',
    name: 'Happy',
    category: CommandCategory.SOCIAL,
    syntax: '/happy',
    description: 'Show happiness',
    nameLabel: { zh: '开心', en: 'Happy' },
    descriptionLabel: { zh: '表现开心', en: 'Show happiness' },
    parameters: [],
    example: '/happy'
  },
  {
    id: 'angry',
    name: 'Angry',
    category: CommandCategory.SOCIAL,
    syntax: '/angry',
    description: 'Show anger',
    nameLabel: { zh: '生气', en: 'Angry' },
    descriptionLabel: { zh: '表现生气', en: 'Show anger' },
    parameters: [],
    example: '/angry'
  },
  {
    id: 'sad',
    name: 'Sad',
    category: CommandCategory.SOCIAL,
    syntax: '/sad',
    description: 'Show sadness',
    nameLabel: { zh: '悲伤', en: 'Sad' },
    descriptionLabel: { zh: '表现悲伤', en: 'Show sadness' },
    parameters: [],
    example: '/sad'
  },
  {
    id: 'surprised',
    name: 'Surprised',
    category: CommandCategory.SOCIAL,
    syntax: '/surprised',
    description: 'Show surprise',
    nameLabel: { zh: '惊讶', en: 'Surprised' },
    descriptionLabel: { zh: '表现惊讶', en: 'Show surprise' },
    parameters: [],
    example: '/surprised'
  },
  {
    id: 'shocked',
    name: 'Shocked',
    category: CommandCategory.SOCIAL,
    syntax: '/shocked',
    description: 'Show shock',
    nameLabel: { zh: '震惊', en: 'Shocked' },
    descriptionLabel: { zh: '表现震惊', en: 'Show shock' },
    parameters: [],
    example: '/shocked'
  },
  {
    id: 'deny',
    name: 'Deny',
    category: CommandCategory.SOCIAL,
    syntax: '/deny',
    description: 'Shake head in denial',
    nameLabel: { zh: '摇头', en: 'Deny' },
    descriptionLabel: { zh: '摇头否认', en: 'Shake head in denial' },
    parameters: [],
    example: '/deny'
  },
  {
    id: 'shrug',
    name: 'Shrug',
    category: CommandCategory.SOCIAL,
    syntax: '/shrug',
    description: 'Shrug shoulders',
    nameLabel: { zh: '耸肩', en: 'Shrug' },
    descriptionLabel: { zh: '耸肩', en: 'Shrug shoulders' },
    parameters: [],
    example: '/shrug'
  },
  {
    id: 'panic',
    name: 'Panic',
    category: CommandCategory.SOCIAL,
    syntax: '/panic',
    description: 'Show panic',
    nameLabel: { zh: '恐慌', en: 'Panic' },
    descriptionLabel: { zh: '表现恐慌', en: 'Show panic' },
    parameters: [],
    example: '/panic'
  },
  {
    id: 'blush',
    name: 'Blush',
    category: CommandCategory.SOCIAL,
    syntax: '/blush',
    description: 'Show embarrassment',
    nameLabel: { zh: '害羞', en: 'Blush' },
    descriptionLabel: { zh: '表现害羞', en: 'Show embarrassment' },
    parameters: [],
    example: '/blush'
  },
  {
    id: 'pray',
    name: 'Pray',
    category: CommandCategory.SOCIAL,
    syntax: '/pray',
    description: 'Pray',
    nameLabel: { zh: '祈祷', en: 'Pray' },
    descriptionLabel: { zh: '祈祷', en: 'Pray' },
    parameters: [],
    example: '/pray'
  },
  {
    id: 'psych',
    name: 'Psych',
    category: CommandCategory.SOCIAL,
    syntax: '/psych',
    description: 'Psych yourself up',
    nameLabel: { zh: '加油', en: 'Psych' },
    descriptionLabel: { zh: '给自己加油', en: 'Psych yourself up' },
    parameters: [],
    example: '/psych'
  },
  {
    id: 'rally',
    name: 'Rally',
    category: CommandCategory.SOCIAL,
    syntax: '/rally',
    description: 'Rally allies',
    nameLabel: { zh: '鼓舞', en: 'Rally' },
    descriptionLabel: { zh: '鼓舞队友', en: 'Rally allies' },
    parameters: [],
    example: '/rally'
  },

  // ===== MENU =====
  {
    id: 'teleport',
    name: 'Teleport',
    category: CommandCategory.MENU,
    syntax: '/teleport',
    description: 'Open teleport window',
    nameLabel: { zh: '传送', en: 'Teleport' },
    descriptionLabel: { zh: '打开传送窗口', en: 'Open teleport window' },
    parameters: [],
    example: '/teleport'
  },
  {
    id: 'return',
    name: 'Return',
    category: CommandCategory.MENU,
    syntax: '/return',
    description: 'Return to home point',
    nameLabel: { zh: '返回', en: 'Return' },
    descriptionLabel: { zh: '返回返回点', en: 'Return to home point' },
    parameters: [],
    example: '/return'
  },
  {
    id: 'map',
    name: 'Map',
    category: CommandCategory.MENU,
    syntax: '/map',
    description: 'Open map window',
    nameLabel: { zh: '地图', en: 'Map' },
    descriptionLabel: { zh: '打开地图窗口', en: 'Open map window' },
    parameters: [],
    example: '/map'
  },
  {
    id: 'macros',
    name: 'Macros',
    category: CommandCategory.MENU,
    syntax: '/macros',
    description: 'Open macros window',
    nameLabel: { zh: '用户宏', en: 'Macros' },
    descriptionLabel: { zh: '打开用户宏窗口', en: 'Open macros window' },
    parameters: [],
    example: '/macros'
  },
  {
    id: 'dutyfinder',
    name: 'Duty Finder',
    category: CommandCategory.MENU,
    syntax: '/dutyfinder',
    description: 'Open duty finder',
    nameLabel: { zh: '任务搜索器', en: 'Duty Finder' },
    descriptionLabel: { zh: '打开任务搜索器', en: 'Open duty finder' },
    parameters: [],
    example: '/dutyfinder'
  },
  {
    id: 'emotelist',
    name: 'Emote List',
    category: CommandCategory.MENU,
    syntax: '/emotelist',
    description: 'Open emote list window',
    nameLabel: { zh: '情感动作', en: 'Emote List' },
    descriptionLabel: { zh: '打开情感动作窗口', en: 'Open emote list window' },
    parameters: [],
    example: '/emotelist'
  },
  {
    id: 'character',
    name: 'Character',
    category: CommandCategory.MENU,
    syntax: '/character',
    description: 'Open character window',
    nameLabel: { zh: '角色', en: 'Character' },
    descriptionLabel: { zh: '打开角色窗口', en: 'Open character window' },
    parameters: [],
    example: '/character'
  },
  {
    id: 'inventory',
    name: 'Inventory',
    category: CommandCategory.MENU,
    syntax: '/inventory',
    description: 'Open inventory window',
    nameLabel: { zh: '物品', en: 'Inventory' },
    descriptionLabel: { zh: '打开物品窗口', en: 'Open inventory window' },
    parameters: [],
    example: '/inventory'
  },

  // ===== SETTINGS =====
  {
    id: 'autolockon',
    name: 'Auto Lock On',
    category: CommandCategory.SETTINGS,
    syntax: '/autolockon {state}',
    description: 'Toggle auto lock on when attacking',
    nameLabel: { zh: '自动锁定', en: 'Auto Lock On' },
    descriptionLabel: { zh: '设置攻击时自动锁定', en: 'Toggle auto lock on when attacking' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Auto lock on state',
        descriptionLabel: { zh: '自动锁定状态', en: 'Auto lock on state' },
        optionLabels: {
          'on': { zh: '开启', en: 'On' },
          'off': { zh: '关闭', en: 'Off' },
        }
      }
    ],
    example: '/autolockon on'
  },
  {
    id: 'autofacetarget',
    name: 'Auto Face Target',
    category: CommandCategory.SETTINGS,
    syntax: '/autofacetarget {state}',
    description: 'Toggle auto face target when using skills',
    nameLabel: { zh: '自动转向目标', en: 'Auto Face Target' },
    descriptionLabel: { zh: '设置使用技能时自动面向目标', en: 'Toggle auto face target when using skills' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Auto face target state',
        descriptionLabel: { zh: '自动转向状态', en: 'Auto face target state' },
        optionLabels: {
          'on': { zh: '开启', en: 'On' },
          'off': { zh: '关闭', en: 'Off' },
        }
      }
    ],
    example: '/autofacetarget on'
  },
  {
    id: 'targetring',
    name: 'Target Ring',
    category: CommandCategory.SETTINGS,
    syntax: '/targetring {state}',
    description: 'Toggle target ring display',
    nameLabel: { zh: '目标环', en: 'Target Ring' },
    descriptionLabel: { zh: '设置目标环的显示', en: 'Toggle target ring display' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Target ring state',
        descriptionLabel: { zh: '目标环状态', en: 'Target ring state' },
        optionLabels: {
          'on': { zh: '显示', en: 'On' },
          'off': { zh: '隐藏', en: 'Off' },
        }
      }
    ],
    example: '/targetring on'
  },
  {
    id: 'targetline',
    name: 'Target Line',
    category: CommandCategory.SETTINGS,
    syntax: '/targetline {state}',
    description: 'Toggle target line display',
    nameLabel: { zh: '目标线', en: 'Target Line' },
    descriptionLabel: { zh: '设置目标线的显示', en: 'Toggle target line display' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Target line state',
        descriptionLabel: { zh: '目标线状态', en: 'Target line state' },
        optionLabels: {
          'on': { zh: '显示', en: 'On' },
          'off': { zh: '隐藏', en: 'Off' },
        }
      }
    ],
    example: '/targetline on'
  },
  {
    id: 'autotarget',
    name: 'Auto Target',
    category: CommandCategory.SETTINGS,
    syntax: '/autotarget {state}',
    description: 'Toggle auto target when no target selected',
    nameLabel: { zh: '自动选中', en: 'Auto Target' },
    descriptionLabel: { zh: '设置无目标时自动选中', en: 'Toggle auto target when no target selected' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Auto target state',
        descriptionLabel: { zh: '自动选中状态', en: 'Auto target state' },
        optionLabels: {
          'on': { zh: '开启', en: 'On' },
          'off': { zh: '关闭', en: 'Off' },
        }
      }
    ],
    example: '/autotarget on'
  },
  {
    id: 'displayarms',
    name: 'Display Arms',
    category: CommandCategory.SETTINGS,
    syntax: '/displayarms {state}',
    description: 'Toggle weapon display when sheathed',
    nameLabel: { zh: '显示武器', en: 'Display Arms' },
    descriptionLabel: { zh: '设置收回武器时是否显示', en: 'Toggle weapon display when sheathed' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Display arms state',
        descriptionLabel: { zh: '武器显示状态', en: 'Display arms state' },
        optionLabels: {
          'on': { zh: '显示', en: 'On' },
          'off': { zh: '隐藏', en: 'Off' },
        }
      }
    ],
    example: '/displayarms on'
  },
  {
    id: 'mastervolume',
    name: 'Master Volume',
    category: CommandCategory.SETTINGS,
    syntax: '/mastervolume {value}',
    description: 'Set master volume',
    nameLabel: { zh: '整体音量', en: 'Master Volume' },
    descriptionLabel: { zh: '设置整体音量', en: 'Set master volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' },
        min: 0,
        max: 100
      }
    ],
    example: '/mastervolume 50'
  },
  {
    id: 'bgm',
    name: 'BGM',
    category: CommandCategory.SETTINGS,
    syntax: '/bgm {value}',
    description: 'Set background music volume',
    nameLabel: { zh: '背景音乐', en: 'BGM' },
    descriptionLabel: { zh: '设置背景音乐音量', en: 'Set background music volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' },
        min: 0,
        max: 100
      }
    ],
    example: '/bgm 50'
  },
  {
    id: 'soundeffects',
    name: 'Sound Effects',
    category: CommandCategory.SETTINGS,
    syntax: '/soundeffects {value}',
    description: 'Set sound effects volume',
    nameLabel: { zh: '音效', en: 'Sound Effects' },
    descriptionLabel: { zh: '设置音效音量', en: 'Set sound effects volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' },
        min: 0,
        max: 100
      }
    ],
    example: '/soundeffects 50'
  },
  {
    id: 'voice',
    name: 'Voice',
    category: CommandCategory.SETTINGS,
    syntax: '/voice {value}',
    description: 'Set voice volume',
    nameLabel: { zh: '语音', en: 'Voice' },
    descriptionLabel: { zh: '设置语音音量', en: 'Set voice volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' },
        min: 0,
        max: 100
      }
    ],
    example: '/voice 50'
  },
  {
    id: 'systemsounds',
    name: 'System Sounds',
    category: CommandCategory.SETTINGS,
    syntax: '/systemsounds {value}',
    description: 'Set system sounds volume',
    nameLabel: { zh: '系统音', en: 'System Sounds' },
    descriptionLabel: { zh: '设置系统音音量', en: 'Set system sounds volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' },
        min: 0,
        max: 100
      }
    ],
    example: '/systemsounds 50'
  },
  {
    id: 'ambientsounds',
    name: 'Ambient Sounds',
    category: CommandCategory.SETTINGS,
    syntax: '/ambientsounds {value}',
    description: 'Set ambient sounds volume',
    nameLabel: { zh: '环境音', en: 'Ambient Sounds' },
    descriptionLabel: { zh: '设置环境音音量', en: 'Set ambient sounds volume' },
    parameters: [
      {
        name: 'value',
        type: 'number',
        required: true,
        defaultValue: '100',
        description: 'Volume level (0-100)',
        descriptionLabel: { zh: '音量（0-100）', en: 'Volume level (0-100)' }
      }
    ],
    example: '/ambientsounds 50'
  },
  {
    id: 'mountbgm',
    name: 'Mount BGM',
    category: CommandCategory.SETTINGS,
    syntax: '/mountbgm {state}',
    description: 'Toggle mount background music',
    nameLabel: { zh: '坐骑音乐', en: 'Mount BGM' },
    descriptionLabel: { zh: '设置坐骑自带音乐', en: 'Toggle mount background music' },
    parameters: [
      {
        name: 'state',
        type: 'select',
        required: true,
        options: ['on', 'off'],
        defaultValue: 'on',
        description: 'Mount BGM state',
        descriptionLabel: { zh: '坐骑音乐状态', en: 'Mount BGM state' },
        optionLabels: {
          'on': { zh: '播放', en: 'On' },
          'off': { zh: '关闭', en: 'Off' },
        }
      }
    ],
    example: '/mountbgm on'
  },
  {
    id: 'battleeffect',
    name: 'Battle Effect',
    category: CommandCategory.SETTINGS,
    syntax: '/battleeffect {target} {type}',
    description: 'Set battle effect display',
    nameLabel: { zh: '战斗特效', en: 'Battle Effect' },
    descriptionLabel: { zh: '设置战斗特效显示', en: 'Set battle effect display' },
    parameters: [
      {
        name: 'target',
        type: 'select',
        required: true,
        options: ['self', 'party', 'other', 'enemypc'],
        defaultValue: 'other',
        description: 'Effect target',
        descriptionLabel: { zh: '特效对象', en: 'Effect target' },
        optionLabels: {
          'self': { zh: '自己', en: 'Self' },
          'party': { zh: '小队', en: 'Party' },
          'other': { zh: '他人', en: 'Other' },
          'enemypc': { zh: '敌方玩家', en: 'Enemy PC' },
        }
      },
      {
        name: 'type',
        type: 'select',
        required: true,
        options: ['all', 'simple', 'off'],
        defaultValue: 'all',
        description: 'Effect type',
        descriptionLabel: { zh: '特效类型', en: 'Effect type' },
        optionLabels: {
          'all': { zh: '完全显示', en: 'Full' },
          'simple': { zh: '简单显示', en: 'Simple' },
          'off': { zh: '不显示', en: 'Off' },
        }
      }
    ],
    example: '/battleeffect other simple'
  },
];

export const CATEGORIES = [
  { id: CommandCategory.ACTION, name: 'Actions & Skills', icon: 'zap', nameLabel: { zh: '技能', en: 'Actions & Skills' } },
  { id: CommandCategory.TEXT, name: 'Chat & Messages', icon: 'message-square', nameLabel: { zh: '聊天', en: 'Chat & Messages' } },
  { id: CommandCategory.WAIT, name: 'Timing & Delay', icon: 'clock', nameLabel: { zh: '等待', en: 'Timing & Delay' } },
  { id: CommandCategory.TARGET, name: 'Targeting', icon: 'crosshair', nameLabel: { zh: '目标', en: 'Targeting' } },
  { id: CommandCategory.UI, name: 'UI Controls', icon: 'layout', nameLabel: { zh: '界面', en: 'UI Controls' } },
  { id: CommandCategory.UTILITY, name: 'Utilities', icon: 'wrench', nameLabel: { zh: '功能', en: 'Utilities' } },
  { id: CommandCategory.SOCIAL, name: 'Social', icon: 'users', nameLabel: { zh: '社交', en: 'Social' } },
  { id: CommandCategory.MACRO, name: 'Macro', icon: 'terminal', nameLabel: { zh: '宏专用', en: 'Macro' } },
  { id: CommandCategory.MENU, name: 'Menu', icon: 'menu', nameLabel: { zh: '菜单', en: 'Menu' } },
  { id: CommandCategory.SETTINGS, name: 'Settings', icon: 'settings', nameLabel: { zh: '设置', en: 'Settings' } },
];
