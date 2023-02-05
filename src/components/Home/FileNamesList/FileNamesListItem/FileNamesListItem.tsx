import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { setFileNameObject } from '../../../../features/file-name/file-name-slice';
import { FileName } from '../../../../utils/file-types';
import { fileRemoveRequest } from '../../../../utils/requests';

export type FileNamesListItemProps = {
  fileName: FileName;
};

export default function FileNamesListItem({
  fileName: { name, id },
}: FileNamesListItemProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClickEdit() {
    dispatch(
      setFileNameObject({
        fileNameObject: {
          id,
          name,
        },
      })
    );
    navigate('/edit');
  }

  function handleClickRemove() {
    fileRemoveRequest(id)
      .then(() => {
        window.location.reload(); // FIXME
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <span>
      <span>{name}</span>
      <button onClick={handleClickEdit}>✏️</button>
      <button onClick={handleClickRemove}>🗑️</button>
    </span>
  );
}
