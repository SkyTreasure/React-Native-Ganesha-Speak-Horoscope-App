export default function fetchAPI(request) {
  return fetch(request.url, {
    method: request.method,
    headers: request.headers,
    body: JSON.stringify(request.body)
  });
}
