/*
=================================================================================================================

=================================================================================================================
*/
export class HttpClient {
  async get(url, params = "") {
    let newUrl = new URL(url);
    newUrl.search = new URLSearchParams(params);

    const res = await fetch(newUrl.toString(), {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });
    return res.json();
  }
}
