/*
 * EasyHTTP3 Library
 * Library for making HTTP requests w fetch, async/await
 * 
 * @version 3.0.0
 * @author Thom David
 * @license MIT
 * 
*/

class EasyHTTP {
  // make HTTP GET request using fetch and async/await
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // make HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // make HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // make an HTTP delete request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'resource deleted...';
    return resData;
  }
}

export const http = new EasyHTTP();