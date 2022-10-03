document.addEventListener('DOMcontentLoaded', (event) => {

   const userLoginForm = document.querySelector("#userLoginForm")

   userLoginForm.addEventListener('submit', (event) => {

    if(element.type !== 'submit'){
        console.log(element);
        
        // element.parentElement.removeChild(element.parentElement.lastElementChild);

        if(element.value === '' || element.value === null || element.value === undefined){
            element.classList.add('is-invalid');
            element.parentElement.innerHTML += `<p class="text-danger">El campo <strong>${element.dataset.label}</strong> debe ser diligenciado</p>`
            errorsArray.push(` El campo <strong>${element.dataset.label}</strong> debe ser diligenciado `);
        }
        else{
            element.classList.remove('is-invalid');
        }
    }
    
});
if(errorsArray.length === 0){
    createHeroForm.submit();
}else{
    const errorsDiv = document.getElementById('errorsDiv');
    errorsDiv.innerHTML = '';
    errorsArray.forEach(error => {
        errorsDiv.hidden = false;
        errorsDiv.innerHTML += `<p>- ${ error }</p>`
     });

    }
});






/* function userLoginForm(event)  {
    
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    if(email.length === 0) {
        console.log(email);
        element.classList.add('is-invalid');
        element.parentElement.innerHTML += `<p class="text-danger">El campo <strong>${element.dataset.label}</strong> debe ser diligenciado</p>`
        errorsArray.push(` El campo <strong>${element.dataset.label}</strong> debe ser diligenciado `);
        return;
    }
    const contrasena = document.getElementById('contrasena').value;

    if(contrasena.length < 6) {
        alert('La contraseña no es válida');
        return;
    }
    this.submit();
}

     */