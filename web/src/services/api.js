function getDataFromApi(json) {
  return fetch("/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export default getDataFromApi;
