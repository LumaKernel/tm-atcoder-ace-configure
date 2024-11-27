// see https://ace.c9.io/#nav=howto
type AceEditorOptions = Readonly<{
  useWrapMode?: boolean;
  highlightActiveLine?: boolean;
  showPrintMargin?: boolean;
  theme?: string;
  keyboardHandler?: string;
  mode?: string;
}>;
type AceEditor = {
  setOptions(options: AceEditorOptions): void;
}
declare const ace: {
  readonly edit: (id: string) => AceEditor | null | undefined;
} | undefined;

const main = () => {
  if (typeof ace === 'object') {
    const editor = ace.edit('editor');
    if (!editor) {
      console.error('Editor not found');
      return;
    }
    editor.setOptions({
      theme: 'ace/theme/gruvbox',
      keyboardHandler: "ace/keyboard/vim"
    })
  }
};

main();
