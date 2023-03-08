window.addEventListener("load", () => {
    //funciones
    const botonesEliminarProducto = document.querySelectorAll(".boton-eliminar-producto");

    botonesEliminarProducto.forEach(function(boton) {
      boton.addEventListener("click", function(evento) {
        const productoAEliminar = evento.target.closest(".producto");
        eliminarProducto(productoAEliminar);
      });
    }); 
});

function eliminarProducto(productoAEliminar) {
    const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  
    const idProductoAEliminar = productoAEliminar.dataset.id;
  
    const nuevosProductosEnCarrito = productosEnCarrito.filter(function(producto) {
      return producto.id !== idProductoAEliminar;
    });
  
    localStorage.setItem("carrito", JSON.stringify(nuevosProductosEnCarrito));
  
    productoAEliminar.remove();
  }

  /* <form action="/products/productCart/?_method=DELETE" method="POST">
                    <input type="submit" name="delete" value="ELIMINAR PRODUCTO">
                </form>
                    <p>Eliminar</p> */