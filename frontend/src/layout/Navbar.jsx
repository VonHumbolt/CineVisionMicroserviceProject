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
                        {userFromRedux?.roles[0] === "ADMIN" ? 
                            <li class="nav-item"><a class="nav-link" href="#!" onClick={() => navigate("/addMovie")}>Film Ekle</a></li>
                        : null}

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
                                    <img src={moviesInVision[0]?.movieImageUrl}
                                    className="img-fluid" alt="..."/>
                                </div>
                                <div className='col-sm-6'>
                                    <h3>{moviesInVision[0]?.movieName}</h3>
                                    <p className='last-movie-p'>{moviesInVision[0]?.description}</p>
                                    <a class="slider-button btn btn-light btn-md rounded" data-bs-dismiss="offcanvasTop" aria-label="Close"
                                         onClick={()=> navigate("/movie/" + moviesInVision[0]?.movieId)}>
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
