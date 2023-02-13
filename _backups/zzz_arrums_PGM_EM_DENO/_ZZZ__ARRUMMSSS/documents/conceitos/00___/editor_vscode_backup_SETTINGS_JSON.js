{
  // RZJ
  "workbench.colorCustomizations": {
    "tab.activeBackground": "#250069" /* tabs superior ativa */
  },

  "files.autoSave": "afterDelay",
  "editor.lineHeight": 24,
  "update.mode": "none",
  "zenMode.silentNotifications": true,
  "editor.wordWrap": "on",
  "editor.matchBrackets": "never",
  "workbench.panel.defaultLocation": "bottom",
  "git.autofetch": true,

  // FORMATACAO CODIGO
  "editor.formatOnSave": true,
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  },
  
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
  },
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "background": "191622"
    },
    "TODO_CONCEITO": {
      "background": "191622"
    },
    "TODO_PGM": {
      "background": "191622"
    },
    "TODO_TEST": {
      "background": "191622"
    },
    "TODO_PROJETINHO": {
      "background": "191622"
    },
    "BUG": {
      "icon": "bug",
      "background": "IndianRed"
    },
    "HACK": {
      "icon": "tools"
    },
    "FIXME": {
      "icon": "flame",
      "background": "IndianRed"
    },
    "XXX": {
      "icon": "$(close)"
    }
  },

  // INTELISENSE RZJ
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.suggestOnTriggerCharacters": true,
  "editor.tabCompletion": "on",
  "editor.wordBasedSuggestions": true,
  "editor.snippetSuggestions": "inline",
  // Emmet
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": false,
  "emmet.showExpandedAbbreviation": "never",

  // ---

  // Editor and breadcrumbs // INTELISENSE
  "breadcrumbs.enabled": false,
  "editor.renderControlCharacters": false,
  "editor.tabSize": 2,
  "editor.renderLineHighlight": "gutter",
  "editor.rulers": [79, 120],
  "editor.minimap.enabled": false,
  "editor.fontSize": 16,
  "editor.detectIndentation": true,
  "editor.formatOnPaste": false,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.mouseWheelScrollSensitivity": 2,
  "editor.smoothScrolling": true,
  "editor.mouseWheelZoom": true,
  "editor.linkedEditing": true,
  "editor.fontFamily": "'Operator Mono Lig Book', 'SF Mono', Consolas, 'Source Code Pro', 'Dank Mono', 'Fira Code', Menlo, 'Inconsolata', 'Droid Sans Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', Courier, Monaco, monospace",
  "editor.glyphMargin": false,
  "editor.fontLigatures": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  },
  "javascript.format.insertSpaceAfterConstructor": true,
  "typescript.format.insertSpaceAfterConstructor": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "workbench.tree.indent": 15,
  "git.confirmSync": false,

  // Workbench
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.labelFormat": "short",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.enablePreview": false,
  "workbench.sideBar.location": "right",
  "workbench.list.smoothScrolling": true,
  "workbench.colorTheme": "OM Theme (Night Owl Italic)",
  "workbench.editorAssociations": {
    "*.ipynb": "jupyter.notebook.ipynb"
  },

  // Explorer
  "explorer.compactFolders": false,
  "explorer.confirmDelete": true,

  // Git
  "git.enableSmartCommit": true,
  "diffEditor.ignoreTrimWhitespace": true,

  // Debug
  "debug.console.fontSize": 18,

  // Files and search
  "files.defaultLanguage": "{activeEditorLanguage}",
  "files.exclude": {
    "USE_GITIGNORE": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/coverage": true,
    "**/dist": true,
    "**/build": true,
    "**/.build": true,
    "**/.gh-pages": true
  },

  // Terminal
  "terminal.integrated.copyOnSelection": false,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  // "terminal.integrated.shell.linux": "zsh",
  "terminal.external.linuxExec": "x-terminal-emulator",
  "terminal.integrated.fontFamily": "'Operator Mono Lig Book', 'Fira Code', 'SF Mono', Consolas, 'Source Code Pro', 'Dank Mono', Menlo, 'Inconsolata', 'Droid Sans Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', Courier, Monaco, monospace",
  "terminal.integrated.fontSize": 18,
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.enableFileLinks": false,
  "terminal.integrated.env.linux": {
    // "PORT": "4000"
  },

  // Javascript & TypeScript
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "prompt",
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  "[javascript]": {
    "editor.suggest.showKeywords": false
  },

  // Code runner
  "code-runner.clearPreviousOutput": true,
  "code-runner.ignoreSelection": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.runInTerminal": true,
  "code-runner.preserveFocus": false,
  "code-runner.executorMap": {
    "python": "python3 -u",
    "code-runner.clearPreviousOutput": false,
    "typescript": "npx ts-node --files --transpile-only -r tsconfig-paths/register",
    ".js": "clear && node"
  },

  // Material icon theme extension
  "material-icon-theme.hidesExplorerArrows": true,
  "material-icon-theme.folders.theme": "classic",
  "material-icon-theme.folders.color": "#6273a6",

  // Colorize (in big files you may want to disable this)
  "colorize.hide_current_line_decorations": false,
  "colorize.include": [".tsx", ".jsx", ".ts", ".js"],
  "colorize.languages": [
    "typescriptreact",
    "javascriptreact",
    "javascript",
    "typescript",
    "css",
    "sass",
    "scss",
    "less",
    "pcss",
    "sss",
    "stylus",
    "xml",
    "svg",
    "json",
    "jsonc",
    "yaml"
  ],
  "colorize.colorized_colors": [
    // "BROWSERS_COLORS", // this is reaaally annoying
    "HEXA",
    "RGB",
    "HSL"
  ],
  "colorize.enable_search_variables": false,

  // CSpell checker extension
  "cSpell.enabled": false,
  "cSpell.language": "en,pt,pt_BR",
  "cSpell.enableFiletypes": ["shellscript"],

  // XML Language Support by Red Hat
  "redhat.telemetry.enabled": true,

  // VsCode Action Buttons
  "actionButtons": {
    "defaultColor": "#8be9fd", // Can also use string color names.
    "loadNpmCommands": false, // Disables automatic generation of actions for npm commands.
    "reloadButton": "🗘", // Custom reload button text or icon (default ↻). null value enables automatic reload on configuration change
    "commands": [
      {
        "cwd": "./", // Terminal initial folder ${workspaceFolder} and os user home as defaults
        "name": "Open dictionary",
        "color": "#8be9fd",
        "singleInstance": true,
        "command": "code -r ~/Development/custom-cspell-dictionary.txt; exit" // This is executed in the terminal.
      }
    ]
  },
  "bracket-pair-colorizer-2.depreciation-notice": false,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "[dockercompose]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.ignoreRebaseWarning": true
 
}
