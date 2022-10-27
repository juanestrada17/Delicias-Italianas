import React, { Fragment } from 'react'

export const ProductsAdm = () => {
  return (
    <Fragment>
        <h1 id='encabezado_productos' className='text-center'>Últimas comidas registradas</h1>

        <section id="productos" className='container mt-5'>
          <div className='row'>
            {/*Producto 1*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/productos/raviolis.png' alt='Raviolis'></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Raviolis de queso en salsa roja</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                          <div className='rating-inner'></div>
                        </div>
                        <span id='No_de_opiniones'> 5 reviews</span>
                    </div>
                    <p className='card-text'>$ 16.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver detalle</a>
                </div>
              </div>
            </div>
            {/*Producto 2*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/productos/tallarines.png' alt='Tallarines'></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Tallarines con Pollo Alfredo</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                          <div className='rating-inner'></div>
                        </div>
                        <span id='No_de_opiniones'> 48 reviews</span>
                    </div>
                    <p className='card-text'>$ 18.500</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver detalle</a>
                </div>
              </div>
            </div>
            {/*Producto 3*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/productos/panzeroti.png' alt='Panzeroti'></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Panzeroti mixto con salsa de la casa</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                          <div className='rating-inner'></div>
                        </div>
                        <span id='No_de_opiniones'> 34 reviews</span>
                    </div>
                    <p className='card-text'>$ 14.300</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver detalle</a>
                </div>
              </div>
            </div>
            {/*Producto 4*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/productos/tortelini.png' alt='Tortelini'></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Tortelini con frutos del mar</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                          <div className='rating-inner'></div>
                        </div>
                        <span id='No_de_opiniones'> 56 reviews</span>
                    </div>
                    <p className='card-text'>$ 22.500</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver detalle</a>
                </div>
              </div>
            </div>

          </div>

        </section>
    </Fragment>
  )
}

//export default ProductsAdm