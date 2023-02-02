import styles from './Edit.module.css';

export default function Edit() {
  return (
    <>
      <h2>Edit</h2>

      <div>
        {/* TODO */}
        <input type="search" placeholder="text to search..." />
        <p className={styles.editorInput} contentEditable>
          Edit <mark>me</mark>, pls!
        </p>
      </div>
    </>
  );
}
