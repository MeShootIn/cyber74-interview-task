import FileName from '../FileName/FileName';
import styles from './Edit.module.css';

// FIXME A component is `contentEditable` and contains `children` managed by
// React. It is now your responsibility to guarantee that none of those nodes
// are unexpectedly modified or duplicated. This is probably not intentional.
//
// INFO https://stackoverflow.com/questions/49639144/why-does-react-warn-against-an-contenteditable-component-having-children-managed
export default function Edit() {
  return (
    <>
      <h2>Edit</h2>

      <FileName />

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
