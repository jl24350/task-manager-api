
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();

formData.append('name', 'this is a test')
formData.append('email', 'ledesmajorge07@gmail.com')
formData.append('password', 'conecone123')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetch('https://jledesma-task-manager.herokuapp.com/users', {
        method: 'POST',
        body: {
            "name" : 'jorge ledesma',
            "email" : 'jledesma@eagles.bridgewater.edu',
            "password": 'jljljl1231'
        }
    }).then(res => res.json())
    .then(json => console.log(json));
})