import { useEffect, useState } from 'react';
import { FileNameInterface } from '../../utils/file-interfaces';
import request from '../../utils/request';

interface FileNamesListItemProps {
  fileName: string;
}

function FileNamesListItem({ fileName }: FileNamesListItemProps) {
  return (
    <span>
      <strong>{fileName}</strong>
      <button
        onClick={() => {
          alert('Edit');
        }}
      >
        ✏️
      </button>
      <button
        onClick={() => {
          alert('Remove');
        }}
      >
        🗑️
      </button>
    </span>
  );
}

export default function Home() {
  const [fileNames, setFileNames] = useState<FileNameInterface[]>([]);

  function makeFileNamesRequest() {
    // TODO https://github.com/typicode/json-server#paginate
    // TODO https://github.com/typicode/json-server#add-custom-routes
    // WARN Нельзя сделать выборку одного поля (name) => лучше свой сервер
    const requestOptions = {
      url: 'http://localhost:3001/file_names?_limit=123', // GET, POST
      // url: 'http://localhost:3001/file_names/2', // DELETE, PUT
      params: {
        method: 'GET',
        // method: 'POST',
        // method: 'DELETE',
        // method: 'PUT',
        //
        //
        //
        // POST, PUT
        //
        // headers: {
        //   'Content-Type': 'application/json;charset=utf-8',
        // },
        //
        //
        //
        // POST, PUT
        //
        // body: JSON.stringify({
        //   name: fakeText(1),
        //   content: fakeText(10),
        // }),
      },
    };

    // FIXME Unchecked runtime.lastError: The message port closed before a response was received.
    request(requestOptions.url, requestOptions.params)
      .then((response: Response) => response.json())
      .then((fileNames: FileNameInterface[]) => {
        setFileNames(fileNames);
      })
      .catch((e) => {
        console.error('Fetch error:', e);
      });
  }

  useEffect(() => {
    makeFileNamesRequest();
  }, []);

  return (
    <>
      <h2>Список файлов</h2>

      <ul>
        {fileNames.map((fileName: FileNameInterface) => (
          <li key={fileName.id}>
            <FileNamesListItem fileName={fileName.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
