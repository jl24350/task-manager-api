
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();

let x = {
    name: n.value,
    email: email.value,
    password: password.value
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetch('/users', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(json => console.log(json));
})