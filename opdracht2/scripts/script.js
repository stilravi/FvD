fetch('https://reqres.in/api/users', {
    method: 'GET'
})
    .then (res => {
        if (res.ok) {
            console.log("SUCCES")
        }
        else {
            console.log("ERROR")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
