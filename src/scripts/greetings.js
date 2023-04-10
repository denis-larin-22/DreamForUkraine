const greetingString = document.querySelector('.note-greetings');
const userLogin = localStorage.getItem('userLogin');

greetingString.innerText = `Привіт, ${userLogin}!`;
