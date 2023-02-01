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
    .catch((e) => {
      throw e;
    })
    .finally(() => {
      clearTimeout(timer);
    });
}
