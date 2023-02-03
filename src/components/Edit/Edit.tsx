import { useEffect, useRef, useState } from 'react';
import { FileContent } from '../../utils/file-types';
import { fileChangeRequest, fileContentRequest } from '../../utils/requests';
import styles from './Edit.module.css';

export default function Edit() {
  const ID = 2; // TODO
  const [content, setContent] = useState<string>(''); // INFO юзать только для начального значения
  const [contentEditable, setContentEditable] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  function handleSave() {
    const refContent = preRef.current?.innerText || '';

    fileChangeRequest({ content: refContent, id: ID })
      .then((newFileContent: FileContent) => {
        console.log(`Файл с id=${ID} успешно сохранён!`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = preRef.current?.innerText || '';
    const pattern = inputRef.current?.value || '';
    const replacement = `<mark>${pattern}</mark>`;
    const result = text.replaceAll(pattern, replacement);

    if (preRef.current !== null) {
      preRef.current.innerHTML = result;
      setContentEditable(false);
    }
  }

  function handleResetSearch() {
    if (preRef.current !== null) {
      preRef.current.innerHTML = preRef.current.innerText;
      setContentEditable(true);
    }
  }

  useEffect(() => {
    fileContentRequest(ID).then((fileContent: FileContent) => {
      setContent(fileContent.content);
      setContentEditable(true);
    });
  }, []);

  return (
    <>
      <h2>Edit</h2>

      {/* TODO */}
      {/* <FileName /> */}

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
              ref={inputRef}
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
          {/* WARN A component is `contentEditable` and contains... */}
          <pre
            className={styles.editorInput}
            ref={preRef}
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
    </>
  );
}
