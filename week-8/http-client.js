/*
=================================================================================================================
; Title: Assignment 8.2 WhatABook Part 2
; Author: Shane Hingtgen
; Bellevue University
; Date: 02/25/23
; Description: In this assignment we learn to website data converted into json format
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Assign 8
    MDN Docs https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    MDN Docs https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    MDN Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    MDN Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    W3 Schools https://www.w3schools.com/js/js_api_fetch.asp
    W3 Schools https://www.w3schools.com/jsref/jsref_search.asp
    W3 Schools https://www.w3schools.com/jsref/obj_event.asp
    W3 Schools https://www.w3schools.com/howto/howto_css_loader.asp
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
    // await and fetching the url, converting it to string
    const res = await fetch(url.toString(), {
      method: "GET", // GETs the data
    });
    return res.json(); //returns as JSON
  }
}
