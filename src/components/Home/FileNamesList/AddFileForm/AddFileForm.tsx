import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddFileForm.module.css';

export default function AddFileForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // TODO Запрос на сервер на добавление и только при успехе - перенаправление
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newFileName = inputRef.current?.value;
    alert(`Go adding a new "${newFileName}" file...`);
    // navigate('/edit');
  }

  return (
    <form
      className={styles.AddFileForm}
      onSubmit={handleSubmit}
      spellCheck="false"
    >
      <input type="text" ref={inputRef} placeholder="foo.txt" required />
      <button type="submit">🆕</button>
    </form>
  );
}
