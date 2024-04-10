let ipt = document.querySelector(".loginInput");
let btn = document.querySelector(".loginButton");
let form = document.querySelector(".loginForm");

function validateInput({ target }){
    if (target.value.length > 2){
        btn.removeAttribute('disabled');
        return;
    }
        btn.setAttribute('disabled', '')
    
}

function handleSubmit(){
    event.preventDefault();
    
    localStorage.setItem('player', ipt.value);
    window.location = 'game.html'
    
}

ipt.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit)