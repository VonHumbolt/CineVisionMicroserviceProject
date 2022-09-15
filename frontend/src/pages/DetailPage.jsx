import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ActorService } from '../services/actorService';
import { CityService } from '../services/cityService';
import { MovieService } from '../services/movieService';

export default function DetailPage() {
    let {movieId} = useParams();

    const movieService = new MovieService()
    const cityService = new CityService()
    const actorService = new ActorService()

    const [movie, setMovie] = useState({})
    const [actors, setActors] = useState([])
    const [cinemaSaloons, setCinemaSaloons] = useState([])
    const [selectedCity, setSelectedCity] = useState({})

    useEffect(() => {
    
        movieService.getMovieById(movieId).then(result => setMovie(result.data));
        actorService.getActorsByMovieId(movieId).then(result => setActors(result.data))
        cityService.getCitiesByMovieId(movieId).then(result => setCinemaSaloons(result.data))

    }, [])
    

  return (
    <div>
        <section className='detail-bg pt-5 ' style={{backgroundImage: `url(${movie.movieImageUrl})`}}>
            <div className=' container mt-5'>
                <div className='row pt-5  justify-content-center align-items-center'>
                    <div className='col-sm-12 col-md-6 pt-5 text-center' >
                        <img className='img-thumbnail w-50' src={movie.movieImageUrl} />
                    </div>
                    <div className='col-sm-12 col-md-6 text-start text-light'>
                        <h3>{movie.movieName}</h3>
                        <hr/>
                        <h5>Yönetmen: {movie.directorName}</h5>
                        <h5>Oyuncular: {actors?.map(actor => (
                            actor.actorName + " ,"
                        ))}
                        </h5>
                        <div class="row justify-content-start align-items-end mt-5">
                        
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"><strong>Bilet Al </strong></button>
                                
                            </div>
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"><strong>Yorum Yap</strong></button>

                            </div>
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"><strong>Fragman</strong></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='p-5'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-sm-4 text-start'>
                        <p> <strong> Vizyon Tarihi: </strong> {movie.releaseDate}</p>
                        <p> <strong>Süre: </strong>{movie.duration} Dakika</p>
                        <p><strong>Tür: </strong>{movie.categoryName}</p>
                    </div>
                    <div className='col-sm-8 text-start'>
                        <p><strong>Konu: </strong>{movie.description}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Ticket Buy Section */}
        <section className='pt-1 pb-5'>
            <div className='container bg-primary rounded'>
                <div className='row p-5'>
                    <div className='col-sm-4 mt-2 text-end text-light'>
                        <h2>Bilet Al</h2>
                    </div>
                    <div className='col-sm-8 ps-3 mt-2'>
                        <button type="button" class="select-saloon-button btn btn-primary col-12"
                         data-bs-toggle="modal" data-bs-target="#saloonModal">
                            <strong>Sinema Seç</strong> <i class="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Comment Modal */}
        <section className='p-3'>
            <div className='container'>
                <div className='row justify-content-start align-items-start'>
                    <div className='col-sm-12 col-md-6 text-start'>
                       <h3>Yorumlar</h3>
                       {/* Yorumları listele */}
                       <p className='lead mt-4'>İlk Yorumu sen yaz</p>
                       <hr />
                    </div>
                    <div className='col-sm-12 col-md-6 comment-textarea text-start'>
                        <h3>Yorumlar</h3>

                        <textarea placeholder='Yorumunuz'></textarea>

                        <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"><strong>Gönder</strong></button>
                        
                    </div>
                </div>
            </div>
        </section>



        {/* Saloon Modal */}
        <div class="modal fade" id="saloonModal" tabindex="-1" aria-labelledby="saloonModalLabel" aria-hidden="true" style={{height:"50%", overflow:'auto'}}>
            <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="saloonModalLabel">Şehir Seç</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {cinemaSaloons.map(saloon => (
                            <a className='text-start text-dark' href='#!'
                            data-bs-target="#saloonModal2" data-bs-toggle="modal" data-bs-dismiss="modal" 
                            style={{textDecoration:"none"}} onClick={() => setSelectedCity(saloon)}>
                                <h6 className='ps-1'>{saloon.cityName}</h6>
                                <hr/>
                            </a>
                        ))}
                    
                    </div>
            
                </div>
            </div>
        </div>

        {/* Second Saloon Modal */}
        <div class="modal fade" id="saloonModal2" aria-hidden="true" aria-labelledby="saloonModal2ToggleLabel2" tabindex="-1" style={{height:"50%", overflow:'auto'}}>
            <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                    <a href='!#' className='text-dark' data-bs-target="#saloonModal" data-bs-toggle="modal" data-bs-dismiss="modal" style={{textDecoration:"none"}}>
                        <h5 class="modal-title" id="saloonModal2ToggleLabel2"> 
                            <i class="fa-sharp fa-solid fa-chevron-left"></i>
                            {selectedCity.cityName}
                        </h5>
                    </a>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {selectedCity?.saloon?.map(s => (
                            <a className='text-start text-dark' href='#!'
                            data-bs-target="#saloonModal2" data-bs-toggle="modal" data-bs-dismiss="modal" 
                            style={{textDecoration:"none"}}>
                                <h6 className='ps-1'>{s.saloonName}</h6>
                                <hr/>
                            </a> 
                        ))}
                        {/* Bilet Alma sayfasına gönder */}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
