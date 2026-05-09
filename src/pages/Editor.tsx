import React, { useCallback, useRef, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  NodeTypes,
  ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNode } from '../components/editor/CustomNode';
import { MacroTabs } from '../components/editor/MacroTabs';
import { CommandPalette } from '../components/sidebar/CommandPalette';
import { PropertyPanel } from '../components/sidebar/PropertyPanel';
import { MacroOutput } from '../components/sidebar/MacroOutput';
import { useMacroStore } from '../hooks/useMacroStore';
import { useTheme } from '../hooks/useTheme';
import { useI18n } from '../i18n';
import { MacroCommand, COMMANDS } from '../data/commands';
import { Sun, Moon, Languages } from 'lucide-react';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

function EditorContent() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();

  const nodes = useMacroStore((state) => state.nodes);
  const edges = useMacroStore((state) => state.edges);
  const selectedNode = useMacroStore((state) => state.selectedNode);
  const onNodesChange = useMacroStore((state) => state.onNodesChange);
  const onEdgesChange = useMacroStore((state) => state.onEdgesChange);
  const onConnect = useMacroStore((state) => state.onConnect);
  const selectNode = useMacroStore((state) => state.selectNode);
  const addCommandNode = useMacroStore((state) => state.addCommandNode);
  const removeNode = useMacroStore((state) => state.removeNode);
  const undo = useMacroStore((state) => state.undo);
  const redo = useMacroStore((state) => state.redo);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedNode) {
        removeNode(selectedNode.id);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNode, removeNode, undo, redo]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds) return;

      const commandData = event.dataTransfer.getData('application/json');
      if (!commandData) return;

      const position = {
        x: event.clientX - reactFlowBounds.left - 100,
        y: event.clientY - reactFlowBounds.top - 30,
      };

      const data = JSON.parse(commandData);
      if (data._type === 'jobSkill') {
        const command = COMMANDS.find((c) => c.id === data.commandId);
        if (command) {
          addCommandNode(command, position, data.prefilledParams);
        }
      } else {
        addCommandNode(data as MacroCommand, position);
      }
    },
    [addCommandNode]
  );

  const onInit = useCallback((instance: ReactFlowInstance) => {
    reactFlowInstance.current = instance;
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      <header className="h-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FF</span>
          </div>
          <div>
            <h1 className="text-gray-900 dark:text-white font-bold">{t('header.title')}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{t('header.subtitle')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors"
            title={language === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'zh' ? 'EN' : '中'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            title={isDark ? 'Switch to Light Mode' : '切换到暗色模式'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-80 flex-shrink-0">
          <CommandPalette />
        </div>

        <div className="flex-1 flex flex-col relative" ref={reactFlowWrapper}>
          <MacroTabs />
          <div className="flex-1 relative">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={onInit}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodeClick={(_, node) => selectNode(node)}
              onPaneClick={() => selectNode(null)}
              nodeTypes={nodeTypes}
              fitView
              className="bg-gray-100 dark:bg-gray-950"
            >
              <Background color={isDark ? '#374151' : '#d1d5db'} gap={20} />
              <Controls className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
              <MiniMap
                nodeColor={(node) => {
                  const data = node.data as { command?: { category?: string } };
                  const colors: Record<string, string> = {
                    action: '#a855f7',
                    text: '#3b82f6',
                    wait: '#f59e0b',
                    target: '#ef4444',
                    ui: '#22c55e',
                    utility: '#6b7280',
                    social: '#ec4899',
                    macro: '#8b5cf6',
                    menu: '#14b8a6',
                    settings: '#f97316',
                  };
                  return colors[data.command?.category] || '#6b7280';
                }}
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
              />
            </ReactFlow>
          </div>
        </div>

        <div className="w-80 flex-shrink-0 flex flex-col">
          <PropertyPanel />
        </div>
      </div>

      <div className="h-72 border-t border-gray-200 dark:border-gray-700">
        <MacroOutput />
      </div>
    </div>
  );
}

export function Editor() {
  return (
    <ReactFlowProvider>
      <EditorContent />
    </ReactFlowProvider>
  );
}
