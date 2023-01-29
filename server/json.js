var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
/**
 * Асинхронный GET-запрос на сервер через fetch.
 * @param {string} url адрес.
 * @param {number} timeout таймаут в миллисекундах.
 * @returns {Promise<any>} промис, резолвящийся в JSON-объект.
 */
function request(url, timeout, params) {
  var abortController = new AbortController();
  var timer = setTimeout(function () {
    abortController.abort();
  }, timeout);
  return fetch(url, __assign({ signal: abortController.signal }, params))
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    ['catch'](function (err) {
      throw err;
    })
    ['finally'](function () {
      clearTimeout(timer);
    });
}
// DEBUG
function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
// DEBUG
function fakeText(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
// TODO https://github.com/typicode/json-server#paginate
var timeout = 3000;
var req = {
  url: 'http://localhost:3000/files?_limit=123',
  // url: 'http://localhost:3000/files/2', // DELETE, PUT
  params: {
    method: 'GET',
  },
};
request(req.url, timeout, req.params)
  .then(function (response) {
    console.log(response);
  })
  ['catch'](function (e) {
    console.error('Fetch error:', e);
  });
