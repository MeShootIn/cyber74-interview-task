import { FormEvent, useRef } from 'react';
import { NewFile } from '../../../utils/file-types';
import { fileAddRequest } from '../../../utils/requests';
import styles from './AddFileForm.module.css';

export default function AddFileForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputRef.current?.value === undefined) {
      return;
    }

    const newFile: NewFile = {
      name: inputRef.current.value,
      content: '',
    };
    fileAddRequest(newFile)
      .then(() => {
        window.location.reload(); // FIXME
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      className={styles.AddFileForm}
      onSubmit={handleSubmit}
      spellCheck={false}
    >
      <h3>Добавить файл</h3>

      <input type="text" ref={inputRef} placeholder="foo.txt" required />
      <button type="submit">🆕</button>
    </form>
  );
}
