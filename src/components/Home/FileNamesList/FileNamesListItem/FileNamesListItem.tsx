import { FileName, NewFile } from '../../../../utils/file-types';
import { fileAddRequest, fileRemoveRequest } from '../../../../utils/requests';

export type FileNamesListItemProps = {
  fileName: FileName;
};

// FIXME откл от сервера после двух add или add + remove или ...
export default function FileNamesListItem({
  fileName,
}: FileNamesListItemProps) {
  function handleClickEdit() {
    const unixTimeStamp = Date.now().toString();
    const newFile: NewFile = {
      name: unixTimeStamp,
      content: unixTimeStamp,
    }; // DEBUG
    fileAddRequest(newFile)
      .then(() => {
        window.location.reload(); // FIXME
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleClickRemove() {
    // makeFileRemoveRequest(fileName.id);
    fileRemoveRequest(fileName.id)
      .then(() => {
        window.location.reload(); // FIXME
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <span>
      <span>{fileName.name}</span>
      <button onClick={handleClickEdit}>✏️</button>
      <button onClick={handleClickRemove}>🗑️</button>
    </span>
  );
}
