import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { MacroCommand, CommandCategory } from '../../data/commands';
import { generateMacroLine } from '../../utils/macroGenerator';
import { useI18n } from '../../i18n';
import { Zap, MessageSquare, Clock, Crosshair, Layout, Wrench, Users, Terminal, Menu, Settings } from 'lucide-react';

const CATEGORY_COLORS: Record<string, { bg: string; border: string; icon: React.ReactNode }> = {
  [CommandCategory.ACTION]: {
    bg: 'bg-purple-100/80 dark:bg-purple-900/50',
    border: 'border-purple-400 dark:border-purple-500',
    icon: <Zap className="w-4 h-4" />
  },
  [CommandCategory.TEXT]: {
    bg: 'bg-blue-100/80 dark:bg-blue-900/50',
    border: 'border-blue-400 dark:border-blue-500',
    icon: <MessageSquare className="w-4 h-4" />
  },
  [CommandCategory.WAIT]: {
    bg: 'bg-amber-100/80 dark:bg-amber-900/50',
    border: 'border-amber-400 dark:border-amber-500',
    icon: <Clock className="w-4 h-4" />
  },
  [CommandCategory.TARGET]: {
    bg: 'bg-red-100/80 dark:bg-red-900/50',
    border: 'border-red-400 dark:border-red-500',
    icon: <Crosshair className="w-4 h-4" />
  },
  [CommandCategory.UI]: {
    bg: 'bg-green-100/80 dark:bg-green-900/50',
    border: 'border-green-400 dark:border-green-500',
    icon: <Layout className="w-4 h-4" />
  },
  [CommandCategory.UTILITY]: {
    bg: 'bg-gray-200/80 dark:bg-gray-700/50',
    border: 'border-gray-400 dark:border-gray-500',
    icon: <Wrench className="w-4 h-4" />
  },
  [CommandCategory.SOCIAL]: {
    bg: 'bg-pink-100/80 dark:bg-pink-900/50',
    border: 'border-pink-400 dark:border-pink-500',
    icon: <Users className="w-4 h-4" />
  },
  [CommandCategory.MACRO]: {
    bg: 'bg-violet-100/80 dark:bg-violet-900/50',
    border: 'border-violet-400 dark:border-violet-500',
    icon: <Terminal className="w-4 h-4" />
  },
  [CommandCategory.MENU]: {
    bg: 'bg-teal-100/80 dark:bg-teal-900/50',
    border: 'border-teal-400 dark:border-teal-500',
    icon: <Menu className="w-4 h-4" />
  },
  [CommandCategory.SETTINGS]: {
    bg: 'bg-orange-100/80 dark:bg-orange-900/50',
    border: 'border-orange-400 dark:border-orange-500',
    icon: <Settings className="w-4 h-4" />
  },
  [CommandCategory.CONDITIONAL]: {
    bg: 'bg-pink-100/80 dark:bg-pink-900/50',
    border: 'border-pink-400 dark:border-pink-500',
    icon: <Zap className="w-4 h-4" />
  },
};

interface CustomNodeData {
  command: MacroCommand;
  params: Record<string, string>;
}

export function CustomNode({ data, selected }: NodeProps<CustomNodeData>) {
  const { command, params } = data;
  const colors = CATEGORY_COLORS[command.category] || CATEGORY_COLORS[CommandCategory.UTILITY];
  const preview = generateMacroLine(command, params);
  const { language } = useI18n();

  const commandName = command.nameLabel?.[language] || command.name;
  const commandDesc = command.descriptionLabel?.[language] || command.description;

  return (
    <div className={`rounded-lg border-2 shadow-lg backdrop-blur-sm transition-all duration-200 ${
      selected ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900' : ''
    } ${colors.bg} ${colors.border}`}>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-600"
      />

      <div className="px-4 py-3 min-w-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-gray-500 dark:text-gray-300">
            {colors.icon}
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-sm">{commandName}</span>
        </div>

        <div className="bg-black/10 dark:bg-black/30 rounded px-2 py-1 text-xs font-mono text-gray-600 dark:text-gray-300 truncate" title={preview}>
          {preview}
        </div>

        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 truncate" title={commandDesc}>
          {commandDesc}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-600"
      />
    </div>
  );
}
