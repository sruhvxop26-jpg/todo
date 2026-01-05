# 🔍 VSCode Embedded Browser Preview Setup

## Extensions Installed
- **Browser Preview** (auchenberg.vscode-browser-preview) - Built-in browser preview in VSCode
- **Live Server** (formulahendry.vscode-live-server) - Local development server

## How to Use Embedded Browser Preview

### Option 1: Using Browser Preview Extension
1. **Start your dev server**:
   ```bash
   npm run dev
   ```
   This starts Vite at `http://localhost:5173`

2. **Open Browser Preview**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Browser Preview: Open Preview"
   - Select it or press Enter

3. **Alternative - Open in new tab**:
   - In the browser preview window, click the icon in the top-right corner
   - Select "Open in new tab"

### Option 2: Using Live Server
1. Right-click on `index.html` in the VSCode explorer
2. Select "Open with Live Server"
3. The preview will open in a new tab or embedded window

### Option 3: Using Browser Lite (if you have it installed)
1. Install the Browser Lite extension from VSCode Marketplace
2. Press `Ctrl+Shift+P`
3. Type "Browser Lite: Open"
4. Enter your URL: `http://localhost:5173`

## Quick Commands
- `Ctrl+Shift+P` → "Browser Preview: Open Preview" → Open embedded browser
- `Ctrl+Shift+P` → "Browser Lite: Open" → Open with Browser Lite
- `Ctrl+Shift+P` → "Live Server: Open with Live Server" → Open with Live Server

## Troubleshooting
- **Preview shows "Cannot connect"**: Make sure `npm run dev` is running
- **Blank page**: Check if the URL is correct (`http://localhost:5173`)
- **Extension not working**: Reload VSCode window (`Ctrl+Shift+P` → "Developer: Reload Window")

## Development URL
Your app is available at: **http://localhost:5173**

Happy coding! 🚀

