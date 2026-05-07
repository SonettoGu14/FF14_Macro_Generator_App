import React, { useState, useEffect, useRef } from 'react';
import { useMacroStore } from '../../hooks/useMacroStore';
import { validateMacro } from '../../utils/macroGenerator';
import { useI18n } from '../../i18n';
import { Copy, Check, FileText, AlertCircle, Trash2, Download, Upload } from 'lucide-react';

export function MacroOutput() {
  const [copied, setCopied] = useState(false);
  const nodes = useMacroStore((state) => state.nodes);
  const getGeneratedMacro = useMacroStore((state) => state.getGeneratedMacro);
  const clearCanvas = useMacroStore((state) => state.clearCanvas);
  const exportMacro = useMacroStore((state) => state.exportMacro);
  const importMacro = useMacroStore((state) => state.importMacro);
  const { t } = useI18n();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const macro = getGeneratedMacro();
  const { valid, warnings } = validateMacro(macro);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(macro);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClear = () => {
    if (window.confirm(t('macroOutput.confirmClear'))) {
      clearCanvas();
    }
  };

  const handleExport = () => {
    exportMacro();
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        importMacro(data);
      } catch (err) {
        console.error('Failed to import:', err);
        alert(t('macroOutput.importError'));
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const lineCount = macro.trim() ? macro.trim().split('\n').length : 0;

  return (
    <div className="h-full flex flex-col bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5" />
          {t('macroOutput.title')}
        </h2>
        <div className="flex items-center gap-2">
          <span className={`text-sm px-2 py-1 rounded-full ${
            valid ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
          }`}>
            {lineCount}/15 {t('macroOutput.lines')}
          </span>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-amber-50 dark:bg-amber-900/20">
          {warnings.map((warning, index) => (
            <div key={index} className="flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{warning}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-black">
          {macro.trim() ? (
            <pre className="font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {macro.split('\n').map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-400 dark:text-gray-600 select-none w-8 text-right mr-4">{index + 1}.</span>
                  <span className={line.startsWith('//') ? 'text-gray-400 dark:text-gray-500' : ''}>{line}</span>
                </div>
              ))}
            </pre>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
              <p>{t('macroOutput.emptyState')}</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleImport}
          className="flex items-center justify-center px-3 py-3 rounded-lg font-medium transition-all bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          title={t('macroOutput.import')}
        >
          <Upload className="w-5 h-5" />
        </button>
        <button
          onClick={handleExport}
          disabled={nodes.length === 0}
          className={`flex items-center justify-center px-3 py-3 rounded-lg font-medium transition-all ${
            nodes.length > 0
              ? 'bg-gray-200 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/50 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
          }`}
          title={t('macroOutput.export')}
        >
          <Download className="w-5 h-5" />
        </button>
        <button
          onClick={handleCopy}
          disabled={!macro.trim()}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            copied
              ? 'bg-green-600 text-white'
              : macro.trim()
              ? 'bg-purple-600 hover:bg-purple-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? t('macroOutput.copied') : t('macroOutput.copyToClipboard')}
        </button>
        <button
          onClick={handleClear}
          disabled={nodes.length === 0}
          className={`flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all ${
            nodes.length > 0
              ? 'bg-gray-200 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/50 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
          }`}
          title={t('macroOutput.clearCanvas')}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
