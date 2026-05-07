export interface MacroTemplate {
  id: string;
  name: string;
  nameLabel: { zh: string; en: string };
  description: string;
  descriptionLabel: { zh: string; en: string };
  nodes: Array<{
    commandId: string;
    params: Record<string, string>;
    position: { x: number; y: number };
  }>;
}

export const TEMPLATES: MacroTemplate[] = [
  {
    id: 'countdown-combat',
    name: 'Countdown Combat',
    nameLabel: { zh: '倒计时战斗宏', en: 'Countdown Combat' },
    description: 'Countdown followed by skill usage',
    descriptionLabel: { zh: '倒计时后使用技能', en: 'Countdown followed by skill usage' },
    nodes: [
      {
        commandId: 'countdown',
        params: { seconds: '10' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'wait',
        params: { seconds: '10' },
        position: { x: 250, y: 200 },
      },
      {
        commandId: 'action',
        params: { skill: 'Holy Spirit', target: '<t>' },
        position: { x: 250, y: 350 },
      },
    ],
  },
  {
    id: 'raise-announce',
    name: 'Raise Announce',
    nameLabel: { zh: '复活喊话宏', en: 'Raise Announce' },
    description: 'Raise target and announce in party chat',
    descriptionLabel: { zh: '复活目标并在小队频道通知', en: 'Raise target and announce in party chat' },
    nodes: [
      {
        commandId: 'macroicon',
        params: { icon: 'Raise' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'action',
        params: { skill: 'Raise', target: '<t>' },
        position: { x: 250, y: 200 },
      },
      {
        commandId: 'party',
        params: { message: '正在复活 <t>!' },
        position: { x: 250, y: 350 },
      },
    ],
  },
  {
    id: 'invuln-announce',
    name: 'Invulnerability Announce',
    nameLabel: { zh: '无敌通知宏', en: 'Invulnerability Announce' },
    description: 'Use invulnerability and notify party',
    descriptionLabel: { zh: '使用无敌技能并通知小队', en: 'Use invulnerability and notify party' },
    nodes: [
      {
        commandId: 'action',
        params: { skill: 'Hallowed Ground', target: '<me>' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'party',
        params: { message: '已使用无敌！请注意减伤！' },
        position: { x: 250, y: 200 },
      },
    ],
  },
  {
    id: 'mount-gearset',
    name: 'Mount & Gearset',
    nameLabel: { zh: '换装坐骑宏', en: 'Mount & Gearset' },
    description: 'Change gearset and summon mount',
    descriptionLabel: { zh: '切换套装并召唤坐骑', en: 'Change gearset and summon mount' },
    nodes: [
      {
        commandId: 'gearset',
        params: { set: '1' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'mount',
        params: { mount: 'Company Chocobo' },
        position: { x: 250, y: 200 },
      },
    ],
  },
  {
    id: 'hud-combat',
    name: 'HUD Combat Mode',
    nameLabel: { zh: '战斗HUD切换', en: 'HUD Combat Mode' },
    description: 'Toggle HUD elements for combat',
    descriptionLabel: { zh: '切换战斗HUD界面元素', en: 'Toggle HUD elements for combat' },
    nodes: [
      {
        commandId: 'hud',
        params: { element: 'DutyList' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'hud',
        params: { element: 'Minimap' },
        position: { x: 250, y: 200 },
      },
      {
        commandId: 'battleeffect',
        params: { target: 'party', type: 'simple' },
        position: { x: 250, y: 350 },
      },
    ],
  },
  {
    id: 'emote-combo',
    name: 'Emote Combo',
    nameLabel: { zh: '情感动作连招', en: 'Emote Combo' },
    description: 'Chain multiple emotes together',
    descriptionLabel: { zh: '连续执行多个情感动作', en: 'Chain multiple emotes together' },
    nodes: [
      {
        commandId: 'wave',
        params: {},
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'wait',
        params: { seconds: '2' },
        position: { x: 250, y: 200 },
      },
      {
        commandId: 'bow',
        params: {},
        position: { x: 250, y: 350 },
      },
      {
        commandId: 'wait',
        params: { seconds: '2' },
        position: { x: 250, y: 500 },
      },
      {
        commandId: 'dance',
        params: {},
        position: { x: 250, y: 650 },
      },
    ],
  },
  {
    id: 'volume-preset',
    name: 'Volume Preset',
    nameLabel: { zh: '音量预设', en: 'Volume Preset' },
    description: 'Set volume levels for different categories',
    descriptionLabel: { zh: '设置各类音量', en: 'Set volume levels for different categories' },
    nodes: [
      {
        commandId: 'mastervolume',
        params: { value: '80' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'bgm',
        params: { value: '60' },
        position: { x: 250, y: 200 },
      },
      {
        commandId: 'soundeffects',
        params: { value: '100' },
        position: { x: 250, y: 350 },
      },
      {
        commandId: 'voice',
        params: { value: '80' },
        position: { x: 250, y: 500 },
      },
    ],
  },
  {
    id: 'target-assist',
    name: 'Target Assist',
    nameLabel: { zh: '目标辅助宏', en: 'Target Assist' },
    description: 'Target and assist party members',
    descriptionLabel: { zh: '选中并辅助小队成员', en: 'Target and assist party members' },
    nodes: [
      {
        commandId: 'target',
        params: { target: '<2>' },
        position: { x: 250, y: 50 },
      },
      {
        commandId: 'assist',
        params: { target: '<t>' },
        position: { x: 250, y: 200 },
      },
    ],
  },
];
