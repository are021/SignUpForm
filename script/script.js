//
let password = document.getElementById('password');
let confirmation = document.getElementById('confirmation');


function validatePassword(){
    if (password.value != confirmation.value){
        confirmation.setCustomValidity("Passwords Don't Match");
    }else{
        confirmation.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmation.onkeyup = validatePassword;


