const signUpButton = document.getElementById('sign-up-button');
const signInButton = document.getElementById('sign-in-button');
const container = document.getElementById('container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    console.log("removed");
});
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    console.log("added");
});