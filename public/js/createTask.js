const description = document.querySelector('input')
const form = document.querySelector('form')
const message = document.querySelector('#message')


form.addEventListener('submit', (e) =>{

    const x = {
        description : description.value
    }

    e.preventDefault()
    fetch('/task', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(json => {
       message.textContent = JSON.stringify(json)
    });
})