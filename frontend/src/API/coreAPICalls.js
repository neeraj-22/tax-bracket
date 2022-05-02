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
