import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { MovieService } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
 
    const movieService = new MovieService();

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    async function getMovies(isComingSoon) {
        if (isComingSoon) {
            await movieService.getAllComingSoonMovies().then(result => setMovies(result.data))
        }else {
            await movieService.getAllDisplayingMovies().then(result => setMovies(result.data))
        }
    }

    useEffect(() => {
      getMovies(false);
    }, [])
    

  return (
    <div>

    <body id="page-top">
    <section>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h1 class="masthead-heading mb-0">CineVision</h1>
                        <h2 class="masthead-subheading mb-0">
                            CineVision ile Film Keyfini Kaçırma
                        </h2>
                        <h2 class="mt-3">
                            Vizyondaki en yeni filmler CineVision Sinema Salonlarında
                        </h2>
                        <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Filmler</a>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>
          
            </div>
        {/* Second slide */}

                <div class="topgun-bg carousel-item">

                </div>

        {/* Third slide */}
            <div class="assasin-bg carousel-item">
            
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </section>


    {/* Section - 2 Navs & Tabs */}

    <section className='py-5'>
        <div className='d-flex justify-content-center'>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" 
                        data-bs-target="#pills-home" type="button"
                        role="tab" aria-controls="pills-home" aria-selected="true"
                        onClick={() => {
                            getMovies(false)
                        }}>Vizyonda</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false"
                    onClick={() => {
                        getMovies(true)
                    }}>Yakında</button>
                </li>
            </ul>
        </div>
    </section>

    {/* Section - 3 Movie Carrousel */}

    <section className='mb-5'>
        <Swiper
            slidesPerView={5}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper movie-slider"
        >
            {movies.map(movie => (
                <SwiperSlide key={movie.movieId}>
                    <div className='slider-item' onClick={()=> navigate("/movie/" + movie.movieId)}>
                        <div className='slider-item-caption d-flex align-items-end justify-content-center h-100 w-100'>
                            <div class="d-flex align-items-center flex-column mb-3" style={{height: "20rem"}}>
                                <div class="mb-auto pt-5 text-white"><h3> {movie.movieName} </h3></div>
                                <div class="p-2 d-grid gap-2">
                                    <a class="slider-button btn btn-light btn-md rounded d-none d-sm-block"
                                        onClick={()=> navigate("/movie/" + movie.movieId)}>
                                        <strong>Yorum Yap </strong>
                                    </a>
                                    <a class="slider-button btn btn-light btn-md rounded d-none d-sm-block"
                                        onClick={()=> navigate("/movie/" + movie.movieId)}>
                                        <strong> Bilet Al </strong>
                                    </a>
                                </div>
                            
                            </div>
                        </div>
                        <img src={movie.movieImageUrl}
                            class="img-fluid mx-2" alt="..."/>
                    </div>
                </SwiperSlide>
            ))}
            

        </Swiper>

   
    </section>

  
        
    </body>
    </div>
  )
}
