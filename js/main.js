let contenidoCard = "";

fetch('js/productos.json')
    .then((resolve) => resolve.json())
    .then((pelotas) =>
        pelotas.forEach(pelota => {

            contenidoCard += `<div class="col-md-4 mt-5 mb-5"
                <div class="card ">
                <img src="${pelota.imagen}" class="card-img-top" alt="${pelota.nombre}">
                <div class="card-body">
                  <h5 class="card-title text-center p-2 card-titulo">${pelota.nombre}</h5>
                  <p class="card-text text-center card-descripcion">${pelota.descripcion}</p>
                  <p class="card-text text-center card-precio">$${pelota.precio}</p>
                  <p class="card-text text-center"><a href="#" class="btn btn-success text-center">Agregar al carrito</a></p>
                </div>
              </div>
              </div>`


            document.getElementById("pelotas").innerHTML = contenidoCard
        }
        ))


