
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();

formData.append('name', 'this is a test')
formData.append('email', 'ledesmajorge07@gmail.com')
formData.append('password', 'conecone123')
let x = {
    name: 'jorge ledesma',
    email: 'ledesmajorge07@gmail.com',
    password: 'conecone123'
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