import { FileContent, FileName, NewFile } from './file-types';

export default function request(
  url: string,
  params: object,
  timeout: number = 3000
): Promise<Response> {
  const abortController: AbortController = new AbortController();
  const timer = setTimeout(() => {
    abortController.abort();
  }, timeout);

  return fetch(url, {
    signal: abortController.signal,
    ...params,
  })
    .then((response: Response) => {
      if (response.ok) {
        return response;
      }

      throw response;
    })
    .catch((error) => {
      throw error;
    })
    .finally(() => {
      clearTimeout(timer);
    });
}

const SERVER = 'http://localhost:3001';
const SERVER_FILE_NAMES = `${SERVER}/file_names`;
const SERVER_FILE_CONTENTS = `${SERVER}/file_contents`;

// TODO https://github.com/typicode/json-server#paginate
export async function fileNamesRequest(): Promise<FileName[]> {
  const requestInfo = {
    url: `${SERVER_FILE_NAMES}?_limit=1234`,
    options: {
      method: 'GET',
    },
  };
  const fileNames = await request(requestInfo.url, requestInfo.options);

  return await fileNames.json();
}

export async function fileContentRequest(id: number): Promise<FileContent> {
  const requestInfo = {
    url: `${SERVER_FILE_CONTENTS}/${id}`,
    options: {
      method: 'GET',
    },
  };
  const fileContent = await request(requestInfo.url, requestInfo.options);

  return await fileContent.json();
}

export async function fileContentChangeRequest({
  content,
  id,
}: FileContent): Promise<FileContent> {
  const requestInfo = {
    url: `${SERVER_FILE_CONTENTS}/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content,
      }),
    },
  };
  const fileChangeResponse = await request(
    requestInfo.url,
    requestInfo.options
  );

  return await fileChangeResponse.json();
}

export async function fileRemoveRequest(id: number): Promise<[any, any]> {
  const fileNamesRequestInfo = {
    url: `${SERVER_FILE_NAMES}/${id}`,
    options: {
      method: 'DELETE',
    },
  };
  const fileNamesRequest = request(
    fileNamesRequestInfo.url,
    fileNamesRequestInfo.options
  ).then((response) => response.json());

  const fileContentsRequestInfo = {
    url: `${SERVER_FILE_CONTENTS}/${id}`,
    options: {
      method: 'DELETE',
    },
  };
  const fileContentsRequest = request(
    fileContentsRequestInfo.url,
    fileContentsRequestInfo.options
  ).then((response) => response.json());

  return Promise.all([fileNamesRequest, fileContentsRequest]);
}

export async function fileAddRequest({
  name,
  content,
}: NewFile): Promise<[any, any]> {
  const fileNamesRequestInfo = {
    url: SERVER_FILE_NAMES,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name,
      }),
    },
  };
  const fileNamesRequest = request(
    fileNamesRequestInfo.url,
    fileNamesRequestInfo.options
  ).then((response) => response.json());

  const fileContentsRequestInfo = {
    url: SERVER_FILE_CONTENTS,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content,
      }),
    },
  };
  const fileContentsRequest = request(
    fileContentsRequestInfo.url,
    fileContentsRequestInfo.options
  ).then((response) => response.json());

  return Promise.all([fileNamesRequest, fileContentsRequest]);
}
