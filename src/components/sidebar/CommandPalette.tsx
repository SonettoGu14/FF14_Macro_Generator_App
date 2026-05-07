import React, { useState } from 'react';
import { COMMANDS, CATEGORIES, MacroCommand, CommandCategory } from '../../data/commands';
import { TEMPLATES, MacroTemplate } from '../../data/templates';
import { useMacroStore } from '../../hooks/useMacroStore';
import { useI18n } from '../../i18n';
import { Search, Plus, Zap, MessageSquare, Clock, Crosshair, Layout, Wrench, Users, Terminal, Menu, Settings, FileText, Layers } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  [CommandCategory.ACTION]: <Zap className="w-4 h-4" />,
  [CommandCategory.TEXT]: <MessageSquare className="w-4 h-4" />,
  [CommandCategory.WAIT]: <Clock className="w-4 h-4" />,
  [CommandCategory.TARGET]: <Crosshair className="w-4 h-4" />,
  [CommandCategory.UI]: <Layout className="w-4 h-4" />,
  [CommandCategory.UTILITY]: <Wrench className="w-4 h-4" />,
  [CommandCategory.SOCIAL]: <Users className="w-4 h-4" />,
  [CommandCategory.MACRO]: <Terminal className="w-4 h-4" />,
  [CommandCategory.MENU]: <Menu className="w-4 h-4" />,
  [CommandCategory.SETTINGS]: <Settings className="w-4 h-4" />,
  [CommandCategory.CONDITIONAL]: <Zap className="w-4 h-4" />,
};

export function CommandPalette() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<CommandCategory | null>(CommandCategory.ACTION);
  const [activeTab, setActiveTab] = useState<'commands' | 'templates'>('commands');
  const addCommandNode = useMacroStore((state) => state.addCommandNode);
  const importMacro = useMacroStore((state) => state.importMacro);
  const { language, t } = useI18n();

  const filteredCommands = COMMANDS.filter((cmd) => {
    const name = cmd.nameLabel?.[language] || cmd.name;
    const desc = cmd.descriptionLabel?.[language] || cmd.description;
    const term = searchTerm.toLowerCase();
    return name.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
  });

  const filteredTemplates = TEMPLATES.filter((tmpl) => {
    const name = tmpl.nameLabel?.[language] || tmpl.name;
    const desc = tmpl.descriptionLabel?.[language] || tmpl.description;
    const term = searchTerm.toLowerCase();
    return name.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
  });

  const commandsByCategory = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<CommandCategory, MacroCommand[]>);

  const handleDragStart = (e: React.DragEvent, command: MacroCommand) => {
    e.dataTransfer.setData('application/json', JSON.stringify(command));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleAddClick = (command: MacroCommand) => {
    const randomX = Math.random() * 400 + 100;
    const randomY = Math.random() * 300 + 100;
    addCommandNode(command, { x: randomX, y: randomY });
  };

  const handleLoadTemplate = (template: MacroTemplate) => {
    const nodes = template.nodes.map((node, index) => {
      const command = COMMANDS.find((c) => c.id === node.commandId);
      if (!command) return null;
      return {
        id: `template-${Date.now()}-${index}`,
        type: 'custom' as const,
        position: node.position,
        data: {
          command,
          params: node.params,
        },
      };
    }).filter((node): node is NonNullable<typeof node> => node !== null);

    importMacro({ nodes, edges: [] });
  };

  return (
    <div className="h-full flex flex-col bg-white/95 dark:bg-gray-900/95 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t('commandLibrary.title')}</h2>
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setActiveTab('commands')}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'commands'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            {t('commandLibrary.commands')}
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'templates'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            {t('commandLibrary.templates')}
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={activeTab === 'commands' ? t('commandLibrary.searchPlaceholder') : t('commandLibrary.searchTemplates')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {activeTab === 'commands' ? (
          <>
            {CATEGORIES.map((category) => {
              const commands = commandsByCategory[category.id] || [];
              if (commands.length === 0) return null;

              const isExpanded = expandedCategory === category.id;
              const categoryName = category.nameLabel?.[language] || category.name;

              return (
                <div key={category.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                      {CATEGORY_ICONS[category.id] || <Zap className="w-4 h-4" />}
                      <span>{categoryName}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                        {commands.length}
                      </span>
                    </div>
                    <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-2 space-y-2">
                      {commands.map((command) => (
                        <div
                          key={command.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, command)}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-grab active:cursor-grabbing transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 dark:text-white text-sm">
                              {command.nameLabel?.[language] || command.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                              {command.descriptionLabel?.[language] || command.description}
                            </div>
                            <div className="text-xs font-mono text-purple-500 dark:text-purple-400 mt-1 truncate">
                              {command.example}
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddClick(command)}
                            className="ml-3 p-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"
                            title={t('commandLibrary.addToCanvas')}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <>
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
              >
                <div className="p-4">
                  <div className="font-medium text-gray-900 dark:text-white mb-1">
                    {template.nameLabel?.[language] || template.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {template.descriptionLabel?.[language] || template.description}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                    <Layers className="w-3 h-3" />
                    <span>{template.nodes.length} {t('commandLibrary.nodes')}</span>
                  </div>
                  <button
                    onClick={() => handleLoadTemplate(template)}
                    className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    {t('commandLibrary.loadTemplate')}
                  </button>
                </div>
              </div>
            ))}
            {filteredTemplates.length === 0 && (
              <div className="text-center text-gray-400 dark:text-gray-500 py-8">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>{t('commandLibrary.noTemplates')}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
