import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectFileNameObject } from '../../features/file-name/file-name-slice';
import { File, FileContent } from '../../utils/file-types';
import { fileContentRequest } from '../../utils/requests';
import Editor from './Editor/Editor';

export default function Edit() {
  const { fileNameObject } = useAppSelector(selectFileNameObject);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (fileNameObject === null) {
      return;
    }

    const { id, name } = fileNameObject;
    fileContentRequest(id).then(({ content }: FileContent) => {
      setFile({
        id,
        name,
        content,
      });
    });
  }, []);

  return (
    <>
      <h2>Edit</h2>

      {fileNameObject !== null ? (
        file !== null ? (
          <Editor file={file} />
        ) : (
          <p>Загрузка...</p>
        )
      ) : (
        <p>Не выбран файл для редактирования ¯\_(ツ)_/¯</p>
      )}
    </>
  );
}
