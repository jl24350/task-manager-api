const { response } = require("express")

const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    fetch('/users',{
        name: n.value,
        email: email.value,
        password: password.value
    }).then((response) =>{
        response.json().then((data) =>{
            message.textContent = data
        })
    })
})