// Add your code here
function submitData(user, userEmail) {
    const url = ('http://localhost:3000/users');
    const data = {
        name: user,
        email: userEmail
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(data),
    };

    return fetch(url, requestOptions)
    .then(respond => respond.json())
    .then(object => {
    let firstBody = document.querySelector('body')
    firstBody.append(object.id);
    })
    .catch(error => {
        let firstError = document.querySelector('body')
        firstError.append(error.message);
    })
    
}