import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
            <Link to={"/"} style={{textDecoration:"none"}}>
                <a class="navbar-brand"> CineVision </a>
            </Link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#!"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            Filmler</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Kayıt Ol</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Giriş</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas offcanvas-top off-canvas-movie" tabindex="-1" id="offcanvasTop" 
            aria-labelledby="offcanvasTopLabel" style={{offcanvasHeight:"100%"}}>
       
       
            <div class="offcanvas-body mt-5">
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-sm-12 col-md-6 text-white text-start'>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-sm-6'>
                                    <img src='https://dx35vtwkllhj9.cloudfront.net/paramountpictures/top-gun/images/regions/us/onesheet.jpg'
                                    className="img-fluid" alt="..."/>
                                </div>
                                <div className='col-sm-6'>
                                    <h3>Top Gun Maverick</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quasi voluptatibus veniam eligendi mollitia repellat et pariatur unde, suscipit deleniti autem incidunt sit, nobis ut a facere neque molestias adipisci.</p>
                                    <a class="slider-button btn btn-light text-dark btn-md rounded"> <strong>Bilet Al </strong></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-sm-6'>
                                    <h3>Vizyondakiler</h3>
                                    {/* For loop sadece 5 tanesi*/}
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Tümü</p>
                                </div>
                                <div className='col-sm-6'>
                                    <h3>Yakında</h3>
                                    {/* For loop */}
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Movie-1</p>
                                    <p>Tümü</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
