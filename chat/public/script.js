const socket = io();
// select the elements on the page and modify behaviour
const chat = document.querySelector('.chat-form');
const Input = document.querySelector('.chat-input');
chat.addEventListener('submit', event => {
    event.preventDefault();
    socket.emit('chat', Input.value);
});