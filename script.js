const form = document.querySelector('form')
const input = document.querySelector('input[type="email"]')
const message = form.querySelector('p')
form.addEventListener('submit', e => {
    console.log(input.value)
    if(input.innerText === '') {
        e.preventDefault()
        message.innerText = 'The `input` field is empty'
        form.classList.add('error')
    }
    const reg = /\S{3,20}@\S{2,20}\.\w{2,7}/
    if(!reg.test(input.value)) {
        e.preventDefault()
        message.innerText = 'The email address is not formatted correctl'
        form.classList.add('error')
    }
})