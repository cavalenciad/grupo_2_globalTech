window.addEventListener('load', function () {
    let form = document.querySelector("#registerForm.register");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let errors = [];

        let inputEmail = document.querySelector('input.email');

        if(inputEmail.value == ""){
            errors.push("El campo de Email tiene que estar completo");
        } else if(inputEmail.value.length < 3) {
            errors.push("El campo de Email tiene que tenes al menos 3 caracteres")
        }

        let inputName = document.querySelector('input.nombre');

        if(inputName.value == " "){
            errors.push("El campo de Nombre tiene que estar completo");
        } else if(inputName.value.length < 3) {
            errors.push("El campo de Nombre tiene que tenes al menos 3 caracteres")
        }

        let inputLastName = document.querySelector('input.apellido');

        if(inputLastName.value == " "){
            errors.push("El campo de Nombre tiene que estar completo");
        } else if(inputLastName.value.length < 3) {
            errors.push("El campo de Nombre tiene que tenes al menos 3 caracteres")
        }

        let inputUserName = document.querySelector('input.nombreUser');

        if(inputUserName.value == " "){
            errors.push("El campo de Nombre de usuario tiene que estar completo");
        } else if(inputUserName.value.length < 3) {
            errors.push("El campo de Nombre de usuario tiene que tenes al menos 3 caracteres")
        }

        let inputCountry = document.querySelector('input.nombreUser');

        if(inputCountry.value == " "){
            errors.push("El campo de Nombre de usuario tiene que estar completo");
        } 

        let inputPassword = document.querySelector('input.nombreUser');

        if(inputPassword.value == " "){
            errors.push("El campo de Contraseña tiene que estar completo");
        } else if(inputPassword.value.length < 3) {
            errors.push("El campo de Contraseña tiene que tenes al menos 3 caracteres")
        }

        if(errors.length > 0) {
            e.preventDefault();

            let ulErrorres =document.querySelector("#errorsRegister ul");
            for (let i = 0; i < errors.length; i++){
                
                ulErrorres.innerHTML += `<ul>${errors}</ul>`
            }
        }

        })
})
    
