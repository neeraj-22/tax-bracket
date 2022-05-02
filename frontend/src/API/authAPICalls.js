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