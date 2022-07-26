const catalogUrl = "http://localhost:3030/data/catalog";

export async function getAll() {
  return fetch(`${catalogUrl}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function getTopFive() {
  return fetch(`${catalogUrl}/top5`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function search(text) {
  return fetch(`${catalogUrl}/search`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function myAds(token) {
  return fetch(`${catalogUrl}/myAds`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  }).then((data) => data.json());
}

export async function getItemById(itemId) {
  return fetch(`${catalogUrl}/${itemId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function editItem(itemId, { item }, token) {
  return fetch(`${catalogUrl}/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: { item },
  }).then(data => data.json());
}
