document.addEventListener("DOMContentLoaded", (event) => {
 
    const userRegisterForm = document.getElementById("userRegisterForm");

    userRegisterForm.addEventListener("submit", (event) =>{
        const errorsArray = [];
        event.preventDefault();
        Array.from(userRegisterForm.elements).forEach(element =>{
            
            if(element.type !== "submit"){
                if(element.value === "" || element.value === null || element.value === undefined){
                    element.classList.add("is-invalid")
               errorsArray.push(` El campo <strong>${element.dataset.label}</strong> debe ser diligenciado`)
                }else{
                    element.classList.remove("is-invalid")
                }
            }

        })
        if(errorsArray.length === 0){
            userRegisterForm.submit();
        }else{
            const errorsDiv = document.getElementById("errorsDiv");
            errorsDiv.innerHTML = "";
            errorsArray.forEach(error =>{
                errorsDiv.hidden = false;
                errorsDiv.innerHTML += `<p>- ${error} </p>`
            })
        }
        console.log(errorsArray);
    })

});