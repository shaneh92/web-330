/*
=================================================================================================================

=================================================================================================================
*/
// export class HttpClient {
//   async get(url, params = "") {
//     let newUrl = new URL(url);
//     newUrl.search = new URLSearchParams(params);

//     const res = await fetch(newUrl.toString(), {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//     });
//     return res.json();
//   }
// }

export default class HttpClient {
  async get(url, params) {
    this.params = "";
    url = new URL(url);
    url.search = new URLSearchParams(params);
    //declared as const to keep the value
    const res = await fetch(url.toString(), {
      method: "GET",
    });
    return res.json();
  }
}
