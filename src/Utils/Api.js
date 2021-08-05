
//function for get api call
export function getAPI(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json()).then((responseJson) => {
    return new Promise((resolve, reject) => {
      resolve(responseJson);
    });
  }).catch((err) => {
    return new Promise((resolve, reject) => {
      reject({ description: err });
    });
  })
}