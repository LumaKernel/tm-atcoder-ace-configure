// ==UserScript==
// @name       atcoder-ace-configure
// @namespace  vite-plugin-monkey
// @version    0.0.1
// @author     monkey
// @match      https://atcoder.jp/*
// @match      https://*.atcoder.jp/*
// ==/UserScript==

(function () {
  'use strict';

  const main = () => {
    if (typeof ace === "object") {
      const editor = ace.edit("editor");
      if (!editor) {
        console.error("Editor not found");
        return;
      }
      editor.setOptions({
        theme: "ace/theme/gruvbox",
        keyboardHandler: "ace/keyboard/vim"
      });
    }
  };
  main();

})();