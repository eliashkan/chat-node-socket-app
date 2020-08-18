const socket = io()
const chat = document.querySelector('.chat-form')

chat.addEventListener('submit', event => {
    event.preventDefault()
})