export const createUser = user => {
  return fetch(`/api/user`, {
      method: "POST",
      headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err))
}

export const getAllUsers = ()=> {
    return fetch(`/api/users`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const findUserTax = (userId) => {
    return fetch(`/api/user/${userId}/tax`, {method : "GET"})
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err))
}