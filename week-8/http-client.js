/*
=================================================================================================================

=================================================================================================================
*/
//our HttPClient class exported
export class HttpClient {
  // an async function to generically get a website
  async get(url, params) {
    this.params = "";
    // assign the variable to the new URL
    url = new URL(url);
    url.search = new URLSearchParams(params);
    //declared as const to keep the value
    const res = await fetch(url.toString(), {
      method: "GET",
    });
    return res.json();
  }
}
