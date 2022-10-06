document.addEventListener('DOMcontentLoaded', (event) => {

   const userLoginForm = document.querySelector("#userLoginForm.login")

   userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = [];

    let inputEmail = document.querySelector('input.email');

    if(inputEmail.value === '') {
        error.push('El campo de Email tiene que estar completo');
    }else if(inputEmail.value.length < 3) {
        errors.push('El campo de Email tiene que tenes al menos 3 caracteres')
    }

    let inputPassword = document.querySelector('input.nombreUser');

    if(inputPassword.value === '') {
        errors.push('El campo de Contraseña tiene que estar completo');
    }else if(inputPassword.value.length < 3) {
        errors.push('El campo de Contraseña tiene que tenes al menos 3 caracteres')
    }

    if(errors.length > 0) {
        e.preventDefault();

        let ulErrorres =document.querySelector("#errorsRegister ul");
        for (let i = 0; i < errors.length; i++){
            
            ulErrorres.innerHTML += `<ul>${errors}</ul>`
        }
    }


    });

});
