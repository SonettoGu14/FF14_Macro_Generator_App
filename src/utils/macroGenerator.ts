import { Node } from 'reactflow';
import { MacroCommand } from '../data/commands';

export function generateMacroLine(command: MacroCommand, params: Record<string, string>): string {
  let line = command.syntax;
  
  for (const param of command.parameters) {
    const placeholder = `{${param.name}}`;
    const value = params[param.name] || param.defaultValue || '';
    line = line.replace(placeholder, value);
  }
  
  return line;
}

export function generateMacro(nodes: Node[]): string {
  const sortedNodes = [...nodes].sort((a, b) => a.position.y - b.position.y);
  
  const lines = sortedNodes.map((node) => {
    const { command, params } = node.data as { command: MacroCommand; params: Record<string, string> };
    return generateMacroLine(command, params);
  });
  
  return lines.join('\n');
}

export function validateMacro(macro: string): { valid: boolean; warnings: string[] } {
  const lines = macro.trim().split('\n').filter(Boolean);
  const warnings: string[] = [];
  
  if (lines.length > 15) {
    warnings.push(`Warning: Macros cannot exceed 15 lines (currently ${lines.length})`);
  }
  
  if (lines.length === 0) {
    warnings.push('Warning: Macro is empty');
  }
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('/') && !trimmed.startsWith('//')) {
      warnings.push(`Warning: Line should start with / or //: "${trimmed}"`);
    }
  }
  
  return {
    valid: lines.length > 0 && lines.length <= 15,
    warnings
  };
}
