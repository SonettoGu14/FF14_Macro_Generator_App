import React, { useState } from 'react';
import { useMacroStore } from '../../hooks/useMacroStore';
import { useI18n } from '../../i18n';
import { Plus, X, Copy, Edit2 } from 'lucide-react';

export function MacroTabs() {
  const tabs = useMacroStore((state) => state.tabs);
  const activeTabId = useMacroStore((state) => state.activeTabId);
  const createTab = useMacroStore((state) => state.createTab);
  const switchTab = useMacroStore((state) => state.switchTab);
  const deleteTab = useMacroStore((state) => state.deleteTab);
  const renameTab = useMacroStore((state) => state.renameTab);
  const duplicateTab = useMacroStore((state) => state.duplicateTab);
  const { t } = useI18n();

  const [editingTabId, setEditingTabId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const handleStartEdit = (tabId: string, currentName: string) => {
    setEditingTabId(tabId);
    setEditingName(currentName);
  };

  const handleFinishEdit = () => {
    if (editingTabId && editingName.trim()) {
      renameTab(editingTabId, editingName.trim());
    }
    setEditingTabId(null);
    setEditingName('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFinishEdit();
    }
    if (e.key === 'Escape') {
      setEditingTabId(null);
      setEditingName('');
    }
  };

  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-t-lg text-sm font-medium cursor-pointer transition-colors ${
            tab.id === activeTabId
              ? 'bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          onClick={() => switchTab(tab.id)}
        >
          {editingTabId === tab.id ? (
            <input
              type="text"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              onBlur={handleFinishEdit}
              onKeyDown={handleKeyDown}
              className="w-24 px-1 py-0.5 bg-white dark:bg-gray-800 border border-purple-500 rounded text-sm focus:outline-none"
              autoFocus
            />
          ) : (
            <span className="max-w-[100px] truncate">{tab.name}</span>
          )}
          
          <div className="flex items-center gap-0.5 ml-1">
            {editingTabId !== tab.id && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartEdit(tab.id, tab.name);
                }}
                className="p-0.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                title={t('macroTabs.rename')}
              >
                <Edit2 className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                duplicateTab(tab.id);
              }}
              className="p-0.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
              title={t('macroTabs.duplicate')}
            >
              <Copy className="w-3 h-3" />
            </button>
            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTab(tab.id);
                }}
                className="p-0.5 rounded hover:bg-red-200 dark:hover:bg-red-900/50 opacity-0 group-hover:opacity-100 transition-opacity"
                title={t('macroTabs.delete')}
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      ))}
      <button
        onClick={() => createTab()}
        className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
        title={t('macroTabs.createNew')}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
