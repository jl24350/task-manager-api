const description = document.querySelector('#description')
const form = document.querySelector('#form2')
const message = document.querySelector('#message2')
const form1 = document.querySelector('#form1')
const email = document.querySelector('#email')
const password = document.querySelector('password')


form1.addEventListener('submit', (e) =>{

    const x = {
        email : email.value,
        password :  password.value
    }
    fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify(x),
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json()).then(json =>{
        message.textContent = JSON.stringify(json)
    })

})


form.addEventListener('submit', (e) =>{

    const x = {
        description : description.value
    }

    e.preventDefault()
    fetch('/tasks', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(json => {
       message.textContent = JSON.stringify(json)
    });
})