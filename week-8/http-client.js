/*
=================================================================================================================

=================================================================================================================
*/
export class HttpClient {
  async get(url, params = "") {
    url = new URL(url);
    params = new URLSearchParams(url.search);

    const res = await fetch(url.toString(), {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });
    return res.json();
  }
}
