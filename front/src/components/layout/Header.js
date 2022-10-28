import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <Link className='nav-link active' to='/'>
                        <img src='./images/logo.png' alt='Restaurante Delicias Italianas Logo' width="100%" height="100%"></img>
                    </Link>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='input-group'>
                    <input
                        type="text"
                        id="search_field"
                        class="form-control"
                        placeholder='¿Que deseas ordenar hoy?'
                        ></input>
                        <div className='input-group-append'>
                            <button id='search-btn' class='btn'>
                                <i class='fa fa-search fa-2x text-white' aria-hidden="true"></i>
                            </button>
                        </div>
                </div>
            </div>

            
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                
                <Link className='nav-link' to='/login'>
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
                           
                
                <Link className='nav-link' to='/cart'>
                    <i class='fa fa-shopping-cart fa-2x text-white' aria-hidden="true"></i>
                    <span className='ml-1' id='cart_count'>0</span>
                </Link>
                
            </div>


            
        </nav>
    </Fragment>
  )
}

export default Header