
const n = document.getElementById('#Name').value
const email = document.getElementById('#Email').value
const password = document.getElementById('#Password').value
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();


let x = {
    name: n,
    email: email,
    password: password
}
console.log(x)

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetch('/users', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(json => console.log(json));
})