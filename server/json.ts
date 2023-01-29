/**
 * Асинхронный GET-запрос на сервер через fetch.
 * @param {string} url адрес.
 * @param {number} timeout таймаут в миллисекундах.
 * @returns {Promise<any>} промис, резолвящийся в JSON-объект.
 */
function request(url, timeout, params) {
  const abortController = new AbortController();
  const timer = setTimeout(() => {
    abortController.abort();
  }, timeout);

  return fetch(url, {
    signal: abortController.signal,
    ...params,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
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
function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// DEBUG
function fakeText(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

// TODO https://github.com/typicode/json-server#paginate

const timeout = 3000;
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
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.error('Fetch error:', e);
  });
