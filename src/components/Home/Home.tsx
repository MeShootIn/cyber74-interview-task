import { useEffect, useState } from 'react';
import { FileName } from '../../utils/file-types';
import { fileNamesRequest } from '../../utils/requests';
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

      <FileNamesList fileNames={fileNames} />
    </>
  );
}

// function makeFileNamesRequest() {
//   const requestInfo = {
//     url: 'http://localhost:3001/file_names?_limit=123', // GET, POST
//     // url: 'http://localhost:3001/file_names/2', // DELETE, PUT
//     options: {
//       method: 'GET',
//       // method: 'POST',
//       // method: 'DELETE',
//       // method: 'PUT',
//       //
//       //
//       //
//       // // POST, PUT
//       //
//       // headers: {
//       //   'Content-Type': 'application/json;charset=utf-8',
//       // },
//       //
//       //
//       //
//       // // POST, PUT
//       //
//       // body: JSON.stringify({
//       //   name: fakeText(1),
//       //   content: fakeText(10),
//       // }),
//     },
//   };

//   request(requestInfo.url, requestInfo.options)
//     .then((response) => response.json())
//     .then((fileNames: FileName[]) => {
//       setFileNames(fileNames);
//     })
//     .catch((error) => {
//       console.error('Fetch error:', error); // DEBUG
//     });
// }

// useEffect(() => {
//   makeFileNamesRequest();
// }, []);
