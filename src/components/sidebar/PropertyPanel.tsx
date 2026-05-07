import React from 'react';
import { useMacroStore } from '../../hooks/useMacroStore';
import { generateMacroLine } from '../../utils/macroGenerator';
import { MacroCommand, Parameter } from '../../data/commands';
import { useI18n } from '../../i18n';
import { Settings, Eye, Trash2, AlertCircle } from 'lucide-react';

export function PropertyPanel() {
  const selectedNode = useMacroStore((state) => state.selectedNode);
  const updateNodeParams = useMacroStore((state) => state.updateNodeParams);
  const removeNode = useMacroStore((state) => state.removeNode);
  const { language, t } = useI18n();

  if (!selectedNode) {
    return (
      <div className="h-full flex flex-col bg-white/95 dark:bg-gray-900/95 border-l border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            {t('propertyPanel.title')}
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center text-gray-400 dark:text-gray-500">
            <Eye className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>{t('propertyPanel.noSelection')}</p>
          </div>
        </div>
      </div>
    );
  }

  const { command, params } = selectedNode.data as { command: MacroCommand; params: Record<string, string> };
  const preview = generateMacroLine(command, params);

  const handleParamChange = (name: string, value: string) => {
    updateNodeParams(selectedNode.id, { ...params, [name]: value });
  };

  const handleDelete = () => {
    removeNode(selectedNode.id);
  };

  const validateParam = (param: Parameter, value: string): string | null => {
    if (param.type !== 'number') return null;
    const num = Number(value);
    if (isNaN(num)) return t('propertyPanel.invalidNumber');
    if (param.min !== undefined && num < param.min) return t('propertyPanel.valueTooLow').replace('{min}', String(param.min));
    if (param.max !== undefined && num > param.max) return t('propertyPanel.valueTooHigh').replace('{max}', String(param.max));
    return null;
  };

  return (
    <div className="h-full flex flex-col bg-white/95 dark:bg-gray-900/95 border-l border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Settings className="w-5 h-5" />
          {t('propertyPanel.title')}
        </h2>
        <button
          onClick={handleDelete}
          className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          title={t('propertyPanel.deleteNode')}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
            {command.nameLabel?.[language] || command.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {command.descriptionLabel?.[language] || command.description}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {t('propertyPanel.parameters')}
          </h4>

          {command.parameters.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">{t('propertyPanel.noParams')}</p>
          ) : (
            command.parameters.map((param: Parameter) => {
              const value = params[param.name] ?? param.defaultValue ?? '';
              const error = validateParam(param, value);
              return (
                <div key={param.name} className="space-y-1">
                  <label className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    {param.descriptionLabel?.[language] || param.name}
                    {param.required && <span className="text-red-400">*</span>}
                  </label>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {param.descriptionLabel?.[language] || param.description}
                  </p>

                  {param.type === 'select' ? (
                    <select
                      value={value}
                      onChange={(e) => handleParamChange(param.name, e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-purple-500"
                    >
                      {param.options?.map((option: string) => (
                        <option key={option} value={option}>
                          {param.optionLabels?.[option]?.[language] || option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={param.type === 'number' ? 'number' : 'text'}
                      value={value}
                      onChange={(e) => handleParamChange(param.name, e.target.value)}
                      placeholder={param.descriptionLabel?.[language] || param.description}
                      min={param.min}
                      max={param.max}
                      className={`w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none ${
                        error
                          ? 'border-red-500 dark:border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                      }`}
                    />
                  )}
                  {error && (
                    <div className="flex items-center gap-1 text-red-500 dark:text-red-400 text-xs">
                      <AlertCircle className="w-3 h-3" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            {t('propertyPanel.preview')}
          </h4>
          <div className="bg-gray-100 dark:bg-black rounded-lg p-3 font-mono text-sm text-purple-500 dark:text-purple-400 break-all">
            {preview}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            {t('propertyPanel.example')}
          </h4>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm text-gray-500 dark:text-gray-400 break-all">
            {command.example}
          </div>
        </div>
      </div>
    </div>
  );
}
