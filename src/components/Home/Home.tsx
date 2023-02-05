import { useEffect, useState } from 'react';
import { FileName } from '../../utils/file-types';
import { fileNamesRequest } from '../../utils/requests';
import AddFileForm from './AddFileForm/AddFileForm';
import FileNamesList from './FileNamesList/FileNamesList';

export default function Home() {
  const [fileNames, setFileNames] = useState<FileName[]>([]);

  useEffect(() => {
    fileNamesRequest()
      .then((fileNames: FileName[]) => {
        setFileNames(fileNames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>Список файлов</h2>

      <AddFileForm />

      <FileNamesList fileNames={fileNames} />
    </>
  );
}
