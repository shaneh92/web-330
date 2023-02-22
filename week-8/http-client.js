export class HttpClient {
  async get(url, params = "") {
    url = new URL(url);
    params = new URLSearchParams(url.search);

    // URLSearchParams = url.search(params); //not sure about this step 2.	Instantiate a new URLSearchParams object, supplying it the params parameter and assigning it to the url.search property.

    const res = await fetch(url.toString(), {
      method: "GET",
    });
    return res.json(); //   4.	Return the res object literal as JSON.
  }
}
