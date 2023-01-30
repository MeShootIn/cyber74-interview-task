/**
 * Асинхронный запрос на сервер через fetch.
 * @param {string} url адрес.
 * @param {number} timeout таймаут в миллисекундах.
 * @returns {Promise<any>} промис, резолвящийся в JSON-объект.
 */
function request(
  url: string,
  timeout: number,
  params: object
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
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      clearTimeout(timer);
    });
}

// DEBUG
function random(min: number, max: number): number {
  let rand: number = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

// DEBUG
function fakeText(length: number): string {
  let result: string = '';
  let counter: number = 0;
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

// TODO https://github.com/typicode/json-server#paginate

const timeout: number = 3000;
const req = {
  url: 'http://localhost:3000/files?_limit=123', // GET, POST
  // url: 'http://localhost:3000/files/2', // DELETE, PUT
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

request(req.url, timeout, req.params)
  .then((response: Response) => response.json())
  .then((response: object) => {
    console.log(response);
  })
  .catch((e) => {
    console.error('Fetch error:', e);
  });
