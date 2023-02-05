import { useRef, useState } from 'react';
import { fileContentChangeRequest } from '../../../utils/requests';
import { File } from './../../../utils/file-types';
import styles from './Editor.module.css';

export type EditorProps = {
  file: File;
};

export default function Editor({ file: { id, name, content } }: EditorProps) {
  const [contentEditable, setContentEditable] = useState<boolean>(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const editorAreaRef = useRef<HTMLPreElement>(null);

  function handleSave() {
    const actualContent = editorAreaRef.current?.innerText || '';

    fileContentChangeRequest({ content: actualContent, id })
      .then(() => {
        alert(`Файл "${name}" успешно сохранён!`); // DEBUG
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editorAreaRef.current === null) {
      return;
    }

    const text = editorAreaRef.current?.innerText || '';
    const pattern = searchInputRef.current?.value || '';
    const replacement = `<mark>${pattern}</mark>`;
    const result = text.replaceAll(pattern, replacement);

    editorAreaRef.current.innerHTML = result;
    setContentEditable(false);
  }

  function handleResetSearch() {
    if (editorAreaRef.current === null) {
      return;
    }

    editorAreaRef.current.innerHTML = editorAreaRef.current.innerText;
    setContentEditable(true);
  }

  return (
    <div>
      <form
        onSubmit={handleSearch}
        spellCheck={false}
        autoComplete="on"
        role="search"
      >
        <label>
          <input
            type="search"
            ref={searchInputRef}
            disabled={!contentEditable}
            placeholder="Регистронезависимый поиск"
            required
          />
        </label>
        <button type="submit" disabled={!contentEditable}>
          Поиск
        </button>
        <button
          type="button"
          onClick={handleResetSearch}
          disabled={contentEditable}
        >
          Очистить поиск
        </button>
      </form>

      <div>
        <h3>Файл "{name}"</h3>
        {/* WARN A component is `contentEditable` and contains... */}
        <pre
          className={styles.Editor}
          ref={editorAreaRef}
          suppressContentEditableWarning={true}
          contentEditable={contentEditable}
        >
          {content}
        </pre>

        <button onClick={handleSave} disabled={!contentEditable}>
          Save
        </button>
      </div>
    </div>
  );
}
