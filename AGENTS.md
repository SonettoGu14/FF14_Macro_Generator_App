# AGENTS.md

## Commands

```bash
npm run dev      # Vite dev server (host 0.0.0.0)
npm run build    # tsc -b && vite build
npm run lint     # ESLint
npm run check    # TypeScript type-check only (no emit)
```

No test framework configured.

## Architecture

Single-page React app (no routing despite react-router-dom being installed).

**Layout** (`src/pages/Editor.tsx`):
- Left: `CommandPalette` — searchable command library with templates tab, drag-to-canvas
- Center: ReactFlow canvas with drag-and-drop nodes, macro tabs for multi-macro management
- Right: `PropertyPanel` — edit selected node parameters with validation
- Bottom: `MacroOutput` — generated macro text with copy, import/export buttons

**State**: Zustand store (`src/hooks/useMacroStore.ts`) with:
- Multi-macro support (tabs with independent nodes/edges)
- Persist middleware (auto-saves to localStorage)
- Temporal middleware (undo/redo with Ctrl+Z/Y)
- Node operations: add, remove, update params

**Data flow**:
1. Commands defined in `src/data/commands.ts` (80+ commands, 11 categories)
2. Templates defined in `src/data/templates.ts` (8 preset macros)
3. Drag from palette → `addCommandNode` in store
4. `CustomNode` renders with category-specific colors
5. `src/utils/macroGenerator.ts` sorts by Y-position, substitutes params, validates 15-line limit

## Conventions

- Path alias: `@/*` → `./src/*`
- Tailwind CSS, dark mode via `class` strategy (`src/hooks/useTheme.ts` toggles + localStorage)
- `cn()` utility in `src/lib/utils.ts` for conditional classes (clsx + tailwind-merge)
- i18n: `useI18n()` hook with `zh`/`en` languages, persisted to localStorage
- Category colors defined as Tailwind classes in `CustomNode.tsx` — use same pattern for new categories
- New commands: add to `COMMANDS` array in `src/data/commands.ts` following `MacroCommand` interface
- Parameter validation: use `min`/`max` fields on Parameter interface for number inputs

## TypeScript

- `strict: false` — no strict null checks
- `noUnusedLocals: false`, `noUnusedParameters: false`
- Source maps hidden in production (`vite.config.ts`)

## Key Files

| File | Purpose |
|------|---------|
| `src/data/commands.ts` | Command definitions, parameter types, FF14 syntax templates |
| `src/data/templates.ts` | Preset macro templates |
| `src/hooks/useMacroStore.ts` | Zustand store: tabs, nodes, edges, undo/redo, persistence |
| `src/components/editor/CustomNode.tsx` | Node rendering, category colors |
| `src/components/editor/MacroTabs.tsx` | Multi-macro tab management UI |
| `src/components/sidebar/PropertyPanel.tsx` | Parameter editing UI with validation |
| `src/components/sidebar/CommandPalette.tsx` | Command library with templates tab |
| `src/utils/macroGenerator.ts` | Macro text generation, line limit validation |
| `src/i18n/translations.ts` | Translation strings (zh/en) |

## Gotchas

- `selectedNode` must sync with `nodes` when updating params (see `updateNodeParams` in store)
- Use `??` not `||` for parameter defaults to allow empty string input
- 15-line macro limit enforced — `macroGenerator.ts` validates this
- ReactFlow drag-and-drop requires `onDrop`/`onDragOver` handlers on canvas
- Multi-macro tabs: each tab maintains independent nodes/edges state
- Undo/redo uses zundo temporal middleware with 50-step limit
- Parameter validation: use `min`/`max` on Parameter interface, validated in PropertyPanel
