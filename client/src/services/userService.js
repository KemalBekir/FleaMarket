export async function loginUser({ email, password }) {
  return fetch("http://localhost:3030/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => data.json());
}

export async function registerUser({ username, email, password, tel }) {
  return fetch("http://localhost:3030/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password, tel }),
  }).then((data) => data.json());
}

export async function getProfile(token) {
  return fetch("http://localhost:3030/users/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  }).then((data) => data.json());
}

export async function editProfile(username, email, tel, token) {
  return fetch("http://localhost:3030/users/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ username, email, tel }),
  }).then((data) => data.json());
}

export async function logout(token){
    return fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    }).then(() => localStorage.clear());
}
