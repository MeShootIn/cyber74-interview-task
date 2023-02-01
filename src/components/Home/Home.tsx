import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import FileInterface from '../../utils/file-interface';

type Callback = () => void;

// DEBUG
const dummyCallback: Callback = () => {
  alert('click');
};

interface ButtonProps {
  onClick: Callback;
  title: string;
}

function FileButton({ onClick, title }: ButtonProps) {
  return <button onClick={onClick}>{title}</button>;
}

interface FilesListItemProps {
  fileName: string;
}

function FilesListItem({ fileName }: FilesListItemProps) {
  return (
    <span>
      <strong>{fileName}</strong>
      <FileButton onClick={dummyCallback} title="✏️" />
      <FileButton onClick={dummyCallback} title="🗑️" />
    </span>
  );
}

export default function Home() {
  const [filesList, setFilesList] = useState<FileInterface[]>([
    // {
    //   name: 'first.txt',
    //   content: 'asd',
    //   id: 1,
    // },
    // {
    //   name: 'second',
    //   content: 'zxc',
    //   id: 2,
    // },
  ]);

  function makeFilesListRequest() {
    // TODO https://github.com/typicode/json-server#paginate

    const requestOptions = {
      url: 'http://localhost:4000/files?_limit=123', // GET, POST
      // url: 'http://localhost:4000/files/2', // DELETE, PUT
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
        //   // id: random(5, 100), // POST
        //   // id: 2, // PUT
        //   name: fakeText(1),
        //   content: fakeText(10),
        // }),
      },
    };

    request(requestOptions.url, requestOptions.params)
      .then((response: Response) => response.json())
      .then((files: FileInterface[]) => {
        console.log('filesList got');

        // setFilesList(files);
      })
      .catch((e) => {
        console.error('Fetch error:', e);
      });
  }

  // FIXME В начале 2 раза вызывается makeFilesListRequest()
  makeFilesListRequest();

  return (
    <>
      <h2>Список файлов</h2>

      <div>
        <ul>
          {filesList.map((file: FileInterface) => (
            <li key={file.id}>
              <FilesListItem fileName={file.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
