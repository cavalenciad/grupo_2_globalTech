window.addEventListener("load", () => {
    //funciones
    const products = []
    function calcularTotal (){
        let acumulador = 0
        for (let i = 0; i < products.length; i++) {
            acumulador = acumulador + (products[i].price * products[i].quantity)
            
        } return acumulador
    }
function vaciarCarrito(){
    localStorage.removeItem("carrito")
}
    //lógica
let container = document.querySelector(".Qcontenedor")
    if (localStorage.carrito){
        let carrito = JSON.parse(localStorage.carrito)
        carrito.forEach((item,index) => {
            fetch(`/apiProducts/${item.id}`)
            .then(rest => rest.json())
            .then(product => {
                if (product){
                    products.push({
                        originalProductId : product.id,
                        productName : product.name,
                        price : product.price,
                        image : product.images.image1,
                        quantity : item.quantity
                    })
                    container.innerHTML+=`
                    <div class="Qproducto1">
                <img src="/images/Productos/${product.images.image1}">
                <div class="QtextoProducto1">
                    <p>Nombre producto: ${product.name}</p>
                    <p> Precio: ${product.price}  </p>
                    <p>Cantidad: ${item.quantity}</p>
                    <p>Eliminar</p>
                </div>
                <div class="QbotonAgregar">
                    <button class="Qmenos">-</button>
                    <button class="Qmas">+</button>
                </div>
            </div>`
                }
                else{carrito.splice(index, 1)
                localStorage.setItem("carrito", JSON.stringify(carrito))}

            }).then(()=>{
                let total = document.querySelector(".Qsubtotal")
                total.innerText = products!=[] ? `Subtotal: $${calcularTotal(products)}` : "$0"
            })
        });
    }
})