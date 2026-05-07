# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A visual macro builder for Final Fantasy XIV. Users drag macro commands onto a ReactFlow canvas, configure parameters in a property panel, and export the generated macro text. The app enforces FF14's 15-line macro limit.

## Commands

- `npm run dev` — Start Vite dev server (host 0.0.0.0)
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — Run ESLint
- `npm run check` — Type-check only (no emit)

No test framework is configured.

## Architecture

**Single-page app** — `App.tsx` renders the `Editor` page directly (no routing implemented despite `react-router-dom` being installed).

**Editor layout** (`src/pages/Editor.tsx`):
- Left sidebar: `CommandPalette` — searchable, categorized command library with drag-to-canvas
- Center: ReactFlow canvas with drag-and-drop node editing
- Right sidebar: `PropertyPanel` — edit parameters of the selected node
- Bottom panel: `MacroOutput` — generated macro text with copy-to-clipboard

**State management**: A single Zustand store (`src/hooks/useMacroStore.ts`) holds all ReactFlow nodes, edges, and the selected node ID. It wraps ReactFlow's `applyNodeChanges`/`applyEdgeChanges`/`addEdge`.

**Data flow**:
1. `src/data/commands.ts` defines FF14 macro commands (6 categories, 15 commands) with syntax templates containing `{{param}}` placeholders
2. Dragging from `CommandPalette` → `Editor.onDrop` → `addCommandNode` in Zustand store
3. `CustomNode` renders each node with category-specific colors/icons
4. `src/utils/macroGenerator.ts` sorts nodes by Y-position, substitutes parameters into templates, joins lines, and validates the 15-line limit
5. `MacroOutput` displays the result

## Key Conventions

- Path alias `@/*` maps to `./src/*` (configured in tsconfig and Vite)
- Tailwind CSS with dark mode via `class` strategy (`src/hooks/useTheme.ts` toggles and persists to localStorage)
- `cn()` utility in `src/lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- Category colors are defined as Tailwind classes in `CustomNode` — use the same pattern when adding new categories
- New commands go in `src/data/commands.ts` following the existing `MacroCommand` interface shape

## TypeScript Notes

- `strict: false` in tsconfig — no strict null checks or unused variable errors
- Source maps hidden in production builds
