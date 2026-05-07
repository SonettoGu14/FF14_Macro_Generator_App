export type Language = 'zh' | 'en';

export interface TranslationValue {
  zh: string;
  en: string;
}

export const translations: Record<string, TranslationValue> = {
  // Header
  'header.title': { zh: 'FF14 宏编辑器', en: 'FFXIV Macro Editor' },
  'header.subtitle': { zh: '可视化宏构建器', en: 'Visual macro builder' },

  // Command Palette
  'commandLibrary.title': { zh: '指令库', en: 'Command Library' },
  'commandLibrary.searchPlaceholder': { zh: '搜索指令...', en: 'Search commands...' },
  'commandLibrary.addToCanvas': { zh: '添加到画布', en: 'Add to canvas' },
  'commandLibrary.commands': { zh: '指令', en: 'Commands' },
  'commandLibrary.templates': { zh: '模板', en: 'Templates' },
  'commandLibrary.searchTemplates': { zh: '搜索模板...', en: 'Search templates...' },
  'commandLibrary.nodes': { zh: '个节点', en: 'nodes' },
  'commandLibrary.loadTemplate': { zh: '加载模板', en: 'Load Template' },
  'commandLibrary.noTemplates': { zh: '没有找到模板', en: 'No templates found' },

  // Property Panel
  'propertyPanel.title': { zh: '属性', en: 'Properties' },
  'propertyPanel.noSelection': { zh: '选择一个节点来编辑其属性', en: 'Select a node to edit its properties' },
  'propertyPanel.parameters': { zh: '参数', en: 'Parameters' },
  'propertyPanel.noParams': { zh: '此指令没有参数', en: 'No parameters for this command' },
  'propertyPanel.preview': { zh: '预览', en: 'Preview' },
  'propertyPanel.example': { zh: '示例', en: 'Example' },
  'propertyPanel.deleteNode': { zh: '删除节点', en: 'Delete Node' },
  'propertyPanel.invalidNumber': { zh: '请输入有效的数字', en: 'Please enter a valid number' },
  'propertyPanel.valueTooLow': { zh: '值不能小于 {min}', en: 'Value cannot be less than {min}' },
  'propertyPanel.valueTooHigh': { zh: '值不能大于 {max}', en: 'Value cannot be greater than {max}' },

  // Macro Output
  'macroOutput.title': { zh: '生成的宏', en: 'Generated Macro' },
  'macroOutput.lines': { zh: '行', en: 'lines' },
  'macroOutput.copyToClipboard': { zh: '复制到剪贴板', en: 'Copy to Clipboard' },
  'macroOutput.copied': { zh: '已复制！', en: 'Copied!' },
  'macroOutput.clearCanvas': { zh: '清空画布', en: 'Clear Canvas' },
  'macroOutput.confirmClear': { zh: '确定要清空画布吗？所有节点和连线将被删除。', en: 'Are you sure you want to clear the canvas? All nodes and connections will be deleted.' },
  'macroOutput.emptyState': { zh: '尚未生成宏。请在画布上添加一些节点！', en: 'No macro generated yet. Add some nodes to the canvas!' },
  'macroOutput.import': { zh: '导入宏', en: 'Import Macro' },
  'macroOutput.export': { zh: '导出宏', en: 'Export Macro' },
  'macroOutput.importError': { zh: '导入失败：文件格式无效', en: 'Import failed: invalid file format' },

  // Target labels
  'target.<t>': { zh: '当前目标', en: 'Current Target' },
  'target.<me>': { zh: '自己', en: 'Self' },
  'target.<mo>': { zh: '鼠标悬停目标', en: 'Mouse Over' },
  'target.<f>': { zh: '焦点目标', en: 'Focus Target' },
  'target.<focus>': { zh: '焦点目标', en: 'Focus Target' },
  'target.<tt>': { zh: '目标的目标', en: "Target's Target" },
  'target.<2>': { zh: '队员2', en: 'Party Member 2' },
  'target.<3>': { zh: '队员3', en: 'Party Member 3' },
  'target.<4>': { zh: '队员4', en: 'Party Member 4' },
  'target.<5>': { zh: '队员5', en: 'Party Member 5' },
  'target.<6>': { zh: '队员6', en: 'Party Member 6' },
  'target.<7>': { zh: '队员7', en: 'Party Member 7' },
  'target.<8>': { zh: '队员8', en: 'Party Member 8' },

  // Error boundary
  'error.title': { zh: '出现错误', en: 'Something went wrong' },
  'error.reload': { zh: '重新加载页面', en: 'Reload Page' },

  // Macro Tabs
  'macroTabs.createNew': { zh: '新建宏', en: 'Create New Macro' },
  'macroTabs.rename': { zh: '重命名', en: 'Rename' },
  'macroTabs.duplicate': { zh: '复制', en: 'Duplicate' },
  'macroTabs.delete': { zh: '删除', en: 'Delete' },
};
