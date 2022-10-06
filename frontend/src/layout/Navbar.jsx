import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import LoginModal from '../pages/LoginModal';
import RegisterModal from '../pages/RegisterModal';
import { MovieService } from '../services/movieService';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

export default function Navbar() {

    const navigate = useNavigate()

    const movieService = new MovieService();

    const [moviesInVision, setMoviesInVision] = useState([])
    const [comingSoonMovies, setComingSoonMovies] = useState([])

    const userFromRedux = useSelector(state => state.user.payload);

    useEffect(() => {
      
        movieService.getAllDisplayingMovies().then(result => setMoviesInVision(result.data))
        movieService.getAllComingSoonMovies().then(result => setComingSoonMovies(result.data))

    }, [])
    

    function showSearchInputBar() {
        let searchBar = document.querySelector(".search-input");
        searchBar.style.visibility="visible";
        searchBar.style.transition="1s";
        searchBar.style.right="0";
    }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
            <Link to={"/"} style={{textDecoration:"none"}}>
                <a class="navbar-brand"> CineVision </a>
            </Link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto align-items-center">
                        {/* <li className='nav-item'>
                            <div class="input-group mt-1 align-items-center">
                                <input type="text" class="form-control search-input"
                                 placeholder="Ara..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <a class="input-group-text search-btn" id="basic-addon2"
                                    onClick={() => showSearchInputBar()}><i class="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                        </li> */}
                        <li class="nav-item"><a class="nav-link" href="#!"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            Filmler</a></li>
                        
                        { userFromRedux ? <LoggedIn /> : <LoggedOut /> }
                    </ul>
                </div>
            </div>
        </nav>

        {/* Login Modal */}
        <LoginModal />
        <RegisterModal />

        {/* Movies OffCanvas */}
        <div class="offcanvas offcanvas offcanvas-top off-canvas-movie" tabindex="-1" id="offcanvasTop" 
            aria-labelledby="offcanvasTopLabel" style={{offcanvasHeight:"100%"}}>
       
       
            <div class="offcanvas-body mt-5">
                <div className='container mb-5'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-sm-12 col-md-6 text-white text-start'>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-sm-6'>
                                    <img src='https://dx35vtwkllhj9.cloudfront.net/paramountpictures/top-gun/images/regions/us/onesheet.jpg'
                                    className="img-fluid" alt="..."/>
                                </div>
                                <div className='col-sm-6'>
                                    <h3>{moviesInVision[0]?.movieName}</h3>
                                    <p className='last-movie-p'>{moviesInVision[0]?.description}</p>
                                    <a class="slider-button btn btn-light btn-md rounded"
                                         onClick={()=> navigate("/movie/" + moviesInVision[0].movieId)}>
                                         <strong>Bilet Al </strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='row justify-content-center align-items-start'>
                                <div className='col-sm-7'>
                                    <h3 className='text-start ms-3'>Vizyondakiler</h3>
                                    {/* For loop sadece 5 tanesi*/}
                                    <div className='ms-3 mt-2'>
                                        {moviesInVision.map(movie => (
                                            <p className='nav-movie-p text-start  text-decoration-none' href='#!'
                                                onClick={() => navigate("/movie/"+ movie.movieId)}>
                                                {movie.movieName}
                                            </p>

                                        ))}

                                    </div>
                                    
                                    <a href='#!' className='text-decoration-none'><strong> Tümü </strong> </a>
                                </div>
                                <div className='col-sm-5'>
                                    <h3 className='text-start ms-3'>Yakında</h3>
                                    {/* For loop */}
                                    <div className='ms-3 mt-2'>
                                        {comingSoonMovies.map(movie => (
                                             <p className='nav-movie-p text-start text-decoration-none' href='#!'
                                                onClick={() => navigate("/movie/"+ movie.movieId)}>
                                                {movie.movieName}
                                            </p>
                                        ))}

                                    </div>
                                    <a href='#!' className='text-decoration-none'><strong> Tümü </strong> </a>
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
