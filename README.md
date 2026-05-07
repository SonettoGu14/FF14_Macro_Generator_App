# FF14 Macro Generator App

<div align="center">

**A visual macro builder for Final Fantasy XIV**

*Build, preview, and export macros with ease*

[English](#english) | [中文](#中文)

</div>

---

## English

### Overview

FF14 Macro Generator is a visual tool that helps you create macros for Final Fantasy XIV. Instead of writing macros by hand, you can drag and drop commands onto a canvas, configure parameters with a simple form, and export the finished macro text.

### Features

- **80+ Macro Commands** - Actions, text, wait, targeting, UI, social, and more
- **Visual Canvas** - Drag-and-drop interface powered by ReactFlow
- **Multi-Macro Tabs** - Work on multiple macros at the same time
- **Template Library** - 8 preset templates to get started quickly
- **Parameter Validation** - Real-time validation for numeric inputs
- **Import/Export** - Save and load your macros as JSON files
- **Auto-Save** - Your work is automatically saved to browser storage
- **Undo/Redo** - Ctrl+Z and Ctrl+Y support
- **Dark/Light Theme** - Switch between themes
- **Bilingual** - English and Chinese interface

### Requirements

- [Node.js](https://nodejs.org/) version 18 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SonettoGu14/FF14_Macro_Generator_App.git
   cd FF14_Macro_Generator_App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

### Usage

#### Creating a Macro

1. **Browse Commands** - Use the left panel to search and browse available commands
2. **Add Commands** - Drag a command from the palette onto the canvas, or click the "+" button
3. **Configure Parameters** - Click on a node to select it, then edit its parameters in the right panel
4. **Arrange Order** - Drag nodes up or down to change the execution order (top = first)
5. **Preview** - The bottom panel shows the generated macro text in real-time
6. **Copy** - Click "Copy to Clipboard" to copy the macro for use in FF14

#### Using Templates

1. Click the "Templates" tab in the left panel
2. Browse available templates (countdown, raise announce, etc.)
3. Click "Load Template" to add it to your canvas
4. Customize the parameters as needed

#### Managing Multiple Macros

- Click the "+" button in the tab bar to create a new macro tab
- Click a tab to switch between macros
- Right-click options to rename, duplicate, or delete tabs

#### Saving and Loading

- **Auto-Save** - Your macros are automatically saved to your browser's local storage
- **Export** - Click the download button to save your macro as a JSON file
- **Import** - Click the upload button to load a previously saved JSON file

#### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Delete` | Delete selected node |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory. You can deploy this to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

To preview the production build locally:

```bash
npm run preview
```

---

## 中文

### 概述

FF14宏生成器是一个可视化工具，帮助你为最终幻想14创建宏命令。你不需要手动编写宏，只需将命令拖放到画布上，通过简单表单配置参数，然后导出完成的宏文本。

### 功能特点

- **80+ 宏命令** - 技能、文本、等待、目标、界面、社交等
- **可视化画布** - 基于ReactFlow的拖放界面
- **多宏标签页** - 同时编辑多个宏
- **模板库** - 8个预设模板快速入门
- **参数验证** - 数字输入实时验证
- **导入/导出** - 将宏保存为JSON文件
- **自动保存** - 工作自动保存到浏览器存储
- **撤销/重做** - 支持Ctrl+Z和Ctrl+Y
- **深色/浅色主题** - 切换主题
- **双语支持** - 英文和中文界面

### 系统要求

- [Node.js](https://nodejs.org/) 18或更高版本
- [npm](https://www.npmjs.com/) (随Node.js一起安装)
- 现代浏览器 (Chrome, Firefox, Edge, Safari)

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/SonettoGu14/FF14_Macro_Generator_App.git
   cd FF14_Macro_Generator_App
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 打开浏览器访问 `http://localhost:5173`

### 使用说明

#### 创建宏

1. **浏览命令** - 使用左侧面板搜索和浏览可用命令
2. **添加命令** - 从命令库拖动命令到画布，或点击"+"按钮
3. **配置参数** - 点击节点选中它，然后在右侧面板编辑参数
4. **排列顺序** - 上下拖动节点改变执行顺序（上方 = 先执行）
5. **预览** - 底部面板实时显示生成的宏文本
6. **复制** - 点击"复制到剪贴板"复制宏以在游戏中使用

#### 使用模板

1. 点击左侧面板的"模板"标签
2. 浏览可用模板（倒计时、复活通知等）
3. 点击"加载模板"将其添加到画布
4. 根据需要自定义参数

#### 管理多个宏

- 点击标签栏的"+"按钮创建新宏标签
- 点击标签在不同宏之间切换
- 右键点击标签可以重命名、复制或删除

#### 保存和加载

- **自动保存** - 宏自动保存到浏览器本地存储
- **导出** - 点击下载按钮将宏保存为JSON文件
- **导入** - 点击上传按钮加载之前保存的JSON文件

#### 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Delete` | 删除选中节点 |
| `Ctrl+Z` | 撤销 |
| `Ctrl+Y` | 重做 |

### 构建生产版本

创建生产版本：

```bash
npm run build
```

构建文件将在 `dist/` 目录中。你可以将其部署到任何静态托管服务（GitHub Pages、Netlify、Vercel等）。

本地预览生产版本：

```bash
npm run preview
```

---

## License / 许可证

MIT License
