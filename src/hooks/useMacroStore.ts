import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { temporal } from 'zundo';
import { Node, Edge, Connection, addEdge, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange } from 'reactflow';
import { MacroCommand, COMMANDS } from '../data/commands';
import { generateMacro } from '../utils/macroGenerator';

interface MacroData {
  nodes: Node[];
  edges: Edge[];
}

interface MacroTab {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
}

interface MacroStore {
  tabs: MacroTab[];
  activeTabId: string;
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  selectNode: (node: Node | null) => void;
  updateNodeParams: (nodeId: string, params: Record<string, string>) => void;
  addCommandNode: (command: MacroCommand, position: { x: number; y: number }) => void;
  removeNode: (nodeId: string) => void;
  clearCanvas: () => void;
  getGeneratedMacro: () => string;
  exportMacro: () => void;
  importMacro: (data: MacroData) => void;
  undo: () => void;
  redo: () => void;
  createTab: (name?: string) => void;
  switchTab: (tabId: string) => void;
  deleteTab: (tabId: string) => void;
  renameTab: (tabId: string, name: string) => void;
  duplicateTab: (tabId: string) => void;
}

const createDefaultTab = (name?: string): MacroTab => ({
  id: `tab-${Date.now()}`,
  name: name || `Macro ${Date.now()}`,
  nodes: [],
  edges: [],
});

export const useMacroStore = create<MacroStore>()(
  temporal(
    persist(
      (set, get) => {
        const defaultTab = createDefaultTab('Macro 1');
        return {
          tabs: [defaultTab],
          activeTabId: defaultTab.id,
          nodes: [],
          edges: [],
          selectedNode: null,

          setNodes: (nodes) => {
            set((state) => ({
              nodes,
              tabs: state.tabs.map((tab) =>
                tab.id === state.activeTabId ? { ...tab, nodes } : tab
              ),
            }));
          },

          setEdges: (edges) => {
            set((state) => ({
              edges,
              tabs: state.tabs.map((tab) =>
                tab.id === state.activeTabId ? { ...tab, edges } : tab
              ),
            }));
          },

          onNodesChange: (changes) => {
            set((state) => {
              const newNodes = applyNodeChanges(changes, state.nodes);
              return {
                nodes: newNodes,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, nodes: newNodes } : tab
                ),
              };
            });
          },

          onEdgesChange: (changes) => {
            set((state) => {
              const newEdges = applyEdgeChanges(changes, state.edges);
              return {
                edges: newEdges,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, edges: newEdges } : tab
                ),
              };
            });
          },

          onConnect: (connection) => {
            set((state) => {
              const newEdges = addEdge(connection, state.edges);
              return {
                edges: newEdges,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, edges: newEdges } : tab
                ),
              };
            });
          },

          selectNode: (node) => set({ selectedNode: node }),

          updateNodeParams: (nodeId, params) => {
            set((state) => {
              const newNodes = state.nodes.map((node) => {
                if (node.id === nodeId) {
                  return {
                    ...node,
                    data: {
                      ...node.data,
                      params,
                    },
                  };
                }
                return node;
              });
              const updatedNode = newNodes.find((n) => n.id === nodeId) || null;
              return {
                nodes: newNodes,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, nodes: newNodes } : tab
                ),
                selectedNode: state.selectedNode?.id === nodeId ? updatedNode : state.selectedNode,
              };
            });
          },

          addCommandNode: (command, position) => {
            const newNode: Node = {
              id: `node-${Date.now()}`,
              type: 'custom',
              position,
              data: {
                command,
                params: Object.fromEntries(
                  command.parameters.map((p) => [p.name, p.defaultValue || ''])
                ),
              },
            };
            set((state) => {
              const newNodes = [...state.nodes, newNode];
              return {
                nodes: newNodes,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, nodes: newNodes } : tab
                ),
              };
            });
          },

          removeNode: (nodeId) => {
            set((state) => {
              const newNodes = state.nodes.filter((node) => node.id !== nodeId);
              const newEdges = state.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId);
              return {
                nodes: newNodes,
                edges: newEdges,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId ? { ...tab, nodes: newNodes, edges: newEdges } : tab
                ),
                selectedNode: state.selectedNode?.id === nodeId ? null : state.selectedNode,
              };
            });
          },

          clearCanvas: () => {
            set((state) => ({
              nodes: [],
              edges: [],
              selectedNode: null,
              tabs: state.tabs.map((tab) =>
                tab.id === state.activeTabId ? { ...tab, nodes: [], edges: [] } : tab
              ),
            }));
          },

          getGeneratedMacro: () => {
            return generateMacro(get().nodes);
          },

          exportMacro: () => {
            const { nodes, edges } = get();
            const data: MacroData = { nodes, edges };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ff14-macro-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(url);
          },

          importMacro: (data) => {
            if (data.nodes && Array.isArray(data.nodes)) {
              const rehydratedNodes = data.nodes.map((node) => {
                if (node.data?.command?.id) {
                  const commandDef = COMMANDS.find((c) => c.id === node.data.command.id);
                  if (commandDef) {
                    return { ...node, data: { ...node.data, command: commandDef } };
                  }
                }
                return node;
              });
              set((state) => ({
                nodes: rehydratedNodes,
                edges: data.edges || [],
                selectedNode: null,
                tabs: state.tabs.map((tab) =>
                  tab.id === state.activeTabId
                    ? { ...tab, nodes: rehydratedNodes, edges: data.edges || [] }
                    : tab
                ),
              }));
            }
          },

          undo: () => {
            const temporalState = useMacroStore.temporal.getState();
            temporalState.undo();
          },

          redo: () => {
            const temporalState = useMacroStore.temporal.getState();
            temporalState.redo();
          },

          createTab: (name) => {
            const newTab = createDefaultTab(name);
            set((state) => ({
              tabs: [...state.tabs, newTab],
              activeTabId: newTab.id,
              nodes: [],
              edges: [],
              selectedNode: null,
            }));
          },

          switchTab: (tabId) => {
            set((state) => {
              const tab = state.tabs.find((t) => t.id === tabId);
              if (!tab) return state;
              return {
                activeTabId: tabId,
                nodes: tab.nodes,
                edges: tab.edges,
                selectedNode: null,
              };
            });
          },

          deleteTab: (tabId) => {
            set((state) => {
              if (state.tabs.length <= 1) return state;
              const newTabs = state.tabs.filter((t) => t.id !== tabId);
              const newActiveTabId = state.activeTabId === tabId ? newTabs[0].id : state.activeTabId;
              const activeTab = newTabs.find((t) => t.id === newActiveTabId) || newTabs[0];
              return {
                tabs: newTabs,
                activeTabId: newActiveTabId,
                nodes: activeTab.nodes,
                edges: activeTab.edges,
                selectedNode: null,
              };
            });
          },

          renameTab: (tabId, name) => {
            set((state) => ({
              tabs: state.tabs.map((tab) =>
                tab.id === tabId ? { ...tab, name } : tab
              ),
            }));
          },

          duplicateTab: (tabId) => {
            set((state) => {
              const tab = state.tabs.find((t) => t.id === tabId);
              if (!tab) return state;
              const newTab: MacroTab = {
                id: `tab-${Date.now()}`,
                name: `${tab.name} (Copy)`,
                nodes: [...tab.nodes],
                edges: [...tab.edges],
              };
              return {
                tabs: [...state.tabs, newTab],
                activeTabId: newTab.id,
                nodes: newTab.nodes,
                edges: newTab.edges,
                selectedNode: null,
              };
            });
          },
        };
      },
      {
        name: 'ff14-macro-storage',
        partialize: (state) => ({ tabs: state.tabs, activeTabId: state.activeTabId }),
      }
    ),
    {
      limit: 50,
      equality: (pastState, currentState) =>
        pastState.nodes === currentState.nodes && pastState.edges === currentState.edges,
    }
  )
);
