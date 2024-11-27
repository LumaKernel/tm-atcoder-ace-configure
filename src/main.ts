type AceEditorOptions = Readonly<{
  useWrapMode?: boolean;
  highlightActiveLine?: boolean;
  showPrintMargin?: boolean;
  theme?: string;
  mode?: string;
}>;
type AceEditor = {
  setOptions(options: AceEditorOptions): void;
}
declare const ace: {
  readonly editor: (id: string) => AceEditor | null | undefined;
} | undefined;

const main = () => {
  if (typeof ace === 'object') {
    const editor = ace.editor('editor');
    if (!editor) {
      console.error('Editor not found');
      return;
    }
    editor.setOptions({
      theme: 'ace/theme/gruvbox',
      mode: 'vim',
    })
  }
};

main();
