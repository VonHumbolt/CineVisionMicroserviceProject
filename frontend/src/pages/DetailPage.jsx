import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../services/movieService';

export default function DetailPage() {
    let {movieId} = useParams();

    const movieService = new MovieService()

    const [movie, setMovie] = useState({})

    useEffect(() => {
    
        movieService.getMovieById(movieId).then(result => setMovie(result.data));

    }, [])
    

  return (
    <div>
        <section className='detail-bg pt-5 ' style={{backgroundImage: `url(${movie.movieImageUrl})`}}>
            <div className='container mt-5'>
                <div className='row pt-5 justify-content-center align-items-center'>
                    <div className='col-sm-6 pt-5 mx-auto text-end' >
                        <img className='img-thumbnail w-50' src={movie.movieImageUrl} />
                    </div>
                    <div className='col-sm-6 text-start text-light'>
                        <h3>{movie.movieName}</h3>
                        <hr/>
                        <h5>Yönetmen: {movie.directorName}</h5>
                        <h5>Oyuncular: </h5>
                        <div class="row justify-content-start align-items-end mt-5">
                        
                            <div className='col-4'>
                                <button class="btn btn-light btn-lg text-dark col-12" type="button"><strong>Bilet Al </strong></button>
                                
                            </div>
                            <div className='col-4'>
                                <button class="btn btn-light btn-lg text-dark col-12" type="button"><strong>Yorum Yap</strong></button>

                            </div>
                            <div className='col-4'>
                                <button class="btn btn-light btn-lg text-dark col-12" type="button"><strong>Fragman</strong></button>

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
                    <div className='col-sm-8 ps-3'>
                        <select class="form-select form-select-lg mb-3 bg-primary text-light border border-0 border-bottom border-dark"
                             aria-label=".form-select-lg example">
                            <option selected className='bg-light text-dark'>Sinema Seç</option>
                            <option value="1" className='bg-light text-dark'>One</option>
                            <option value="2" className='bg-light text-dark'>Two</option>
                            <option value="3" className='bg-light text-dark'>Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
