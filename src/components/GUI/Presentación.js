import React from 'react'
import Footer from './Footer'
import rtmv from './multimedia/rtmv.jpg';
import pizzas from './multimedia/pizzas.jpg';
import pastas from './multimedia/pastas.jpg';
  
function Presentación() {
  
 
  return (
    <><div>
    
      <h1 class="text-center p-1">!Bienvenidos, Restaurante Monte Verde! </h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={rtmv} class="rounded mx-auto d-block" max width="55%" height="auto" />
    </div>
    <div class="carousel-item">
      <img src={pizzas} class="rounded mx-auto d-block" max width="35%" height="auto" />
    </div>
    <div class="carousel-item">
      <img src={pastas} class="rounded mx-auto d-block" max width="35%" height="auto" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div class="card-body" />
      <h3 class="text-center">¿Buscando que comer?</h3>
      <h5 class="text-center">Disfruta de nuestra exquisita comida tradicional en monte verde, les ofrecemos:</h5>

      <p>
        
        <div className="" >
          <div className="row">
            <div className="col text-center">
              <div class="btn-group">

                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Platillos
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Pastas</a></li>
                    <li><a class="dropdown-item" href="#">Cortes de carne</a></li>
                    <li><a class="dropdown-item" href="#">Pizzas</a></li>
                  </ul>
                </div>

                <div class="dropdown ">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Bebidas
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Aguas frescas</a></li>
                    <li><a class="dropdown-item" href="#">Vinos y Licores</a></li>
                    <li><a class="dropdown-item" href="#">Cocteles</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Postres
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Tiramizù</a></li>
                    <li><a class="dropdown-item" href="#">Browni</a></li>
                    <li><a class="dropdown-item" href="#">Panacota</a></li>
                  </ul>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </p>
      <br />
      <div class="card text-center">
        <div class="card-body">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1821480450317!2d-92.00494998568503!3d17.49881630418892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f2456c21338025%3A0x676adf6f3a46e26f!2sMonte%20Verde%20Trattoria%20Pizzeria!5e0!3m2!1ses!2smx!4v1663014310614!5m2!1ses!2smx"
            width="500" height="250" border="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
</div>     
    </div><Footer>
      </Footer></>
  )
}
export default Presentación