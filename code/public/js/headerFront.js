window.addEventListener("load", () => {
    //funciones 
    function productosEnCarrito (){
        return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
    }

    //lógica
    let numeroDeCarrito = document.querySelector(".contenedorDeNumero p")
    let botonesComprar = document.querySelectorAll(".Qagregarcarrito")
    numeroDeCarrito.innerText = productosEnCarrito()

    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", (e) =>{
            if (localStorage.carrito)
            {let carrito = JSON.parse(localStorage.carrito)
                let index = carrito.findIndex((producto) => producto.id== e.target.dataset.id)
                if(index!=-1){
                    carrito[index].quantity++
                } 
                else{carrito.push({
                    id:e.target.dataset.id, quantity:1
                })}
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }else{
                localStorage.setItem("carrito", JSON.stringify([{id:e.target.dataset.id, quantity:1}]))
            }
            alert("se agrego un producto")
            numeroDeCarrito.innerText = productosEnCarrito()
        })
    })

})