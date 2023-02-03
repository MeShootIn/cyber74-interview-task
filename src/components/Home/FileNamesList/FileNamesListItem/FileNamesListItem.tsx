import { FileName } from '../../../../utils/file-types';
import request from '../../../../utils/requests';

export type FileNamesListItemProps = {
  fileName: FileName;
};

// DEBUG
function rnd(): number {
  const [min, max] = [18, 228];

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// INFO Переписать под настоящее добавление
function makeFileAddRequest(): Promise<[void, void]> {
  const fileNamesRequestInfo = {
    url: 'http://localhost:3001/file_names',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: rnd().toString(),
      }),
    },
  };
  const fileNamesRequest = request(
    fileNamesRequestInfo.url,
    fileNamesRequestInfo.options
  )
    .then((response) => response.json())
    // TODO "resp": name + type ???
    .then((resp) => {
      console.log('ADD_N resp:');
      console.log(resp); // {"name": 123, id: 123}
    })
    .catch((error) => {
      console.error('ADD_N error:');
      console.error(error);
    });

  const fileContentsRequestInfo = {
    url: 'http://localhost:3001/file_contents',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: rnd().toString(),
      }),
    },
  };
  const fileContentsRequest = request(
    fileContentsRequestInfo.url,
    fileContentsRequestInfo.options
  )
    .then((response) => response.json())
    // TODO "resp": name + type ???
    .then((resp) => {
      console.log('ADD_C resp:'); // {"content": 123, id: 123}
      console.log(resp);
    })
    .catch((error) => {
      console.error('ADD_C error:');
      console.error(error);
    });

  // TODO props.all - ???
  return Promise.all([fileNamesRequest, fileContentsRequest]);
}

function makeFileRemoveRequest(id: number): Promise<[void, void]> {
  const fileNamesRequestInfo = {
    url: `http://localhost:3001/file_names/${id}`,
    options: {
      method: 'DELETE',
    },
  };
  const fileNamesRequest = request(
    fileNamesRequestInfo.url,
    fileNamesRequestInfo.options
  )
    .then((response) => response.json())
    // TODO "resp": name + type ???
    .then((resp) => {
      console.log('REMOVE_N resp:');
      console.log(resp); // {}
    })
    .catch((error) => {
      console.log('REMOVE_N error:');
      console.error(error);
    });

  const fileContentsRequestInfo = {
    url: `http://localhost:3001/file_contents/${id}`,
    options: {
      method: 'DELETE',
    },
  };
  const fileContentsRequest = request(
    fileContentsRequestInfo.url,
    fileContentsRequestInfo.options
  )
    .then((response) => response.json())
    // TODO "resp": name + type ???
    .then((resp) => {
      console.log('REMOVE_C resp:');
      console.log(resp); // {}
    })
    .catch((error) => {
      console.log('REMOVE_C error:');
      console.error(error);
    });

  // TODO props.all - ???
  return Promise.all([fileNamesRequest, fileContentsRequest]);
}

// FIXME откл от сервера после двух add или add + remove или ...
export default function FileNamesListItem({
  fileName,
}: FileNamesListItemProps) {
  function handleClickEdit() {
    makeFileAddRequest().then((wtf) => {
      console.log('ADD all:');
      console.log(wtf); // [undefined, undefined]

      console.log(`Файл успешно добавлен!`);
    });
  }

  function handleClickRemove() {
    makeFileRemoveRequest(fileName.id).then((wtf) => {
      console.log('REMOVE all:');
      console.log(wtf); // [undefined, undefined]

      console.log(`Файл "${fileName.name}" успешно удалён!`);
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
