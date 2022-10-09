import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ActorService } from '../services/actorService';
import { CityService } from '../services/cityService';
import { MovieService } from '../services/movieService';
import dateConvert from '../utils/dateConverter';
import dateConvertForTicket from '../utils/dateConvertForTicket';
import { SaloonTimeService } from '../services/saloonTimeService';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToState, cleanState } from '../store/actions/movieActions';
import { CommentService } from '../services/commentService';
import { toast, ToastContainer } from 'react-toastify';


export default function DetailPage() {
    let {movieId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userFromRedux = useSelector(state => state.user.payload);

    let date = new Date();

    const movieService = new MovieService()
    const cityService = new CityService()
    const actorService = new ActorService()
    const saloonTimeService = new SaloonTimeService();
    const commentService = new CommentService();

    const [movie, setMovie] = useState({})
    const [actors, setActors] = useState([])
    const [otherMovies, setOtherMovies] = useState([])
    const [cinemaSaloons, setCinemaSaloons] = useState([])
    const [selectedCity, setSelectedCity] = useState({})
    const [selectedSaloon, setSelectedSaloon] = useState(null)
    const [saloonTimes, setSaloonTimes] = useState([])
    const [selectedDay, setSelectedDay] = useState(dateConvert(date))
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState("")
    const [countOfComments, setCountOfComments] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getNewVisionMovie(movieId);
    }, [])
    
    function getNewVisionMovie(movieId) {
        movieService.getMovieById(movieId).then(result => setMovie(result.data));
        actorService.getActorsByMovieId(movieId).then(result => setActors(result.data))
        cityService.getCitiesByMovieId(movieId).then(result => setCinemaSaloons(result.data))
        movieService.getAllDisplayingMovies().then(result => {
            const films = result.data.filter(m => m.movieId != movieId);
            setOtherMovies(films);
        })
        commentService.getCountOfComments(movieId).then(result => setCountOfComments(result.data));
        getComments(movieId, 1, 5);
    }

    function getSaloonTimes(saloonId, movieId) {
        saloonTimeService.getMovieSaloonTimeSaloonAndMovieId(saloonId, movieId).then(result => {
            setSaloonTimes(result.data);
        })
    }

    function getComments(movieId, pageNo, pageSize=5) {
        commentService.getCommentsByMovieId(movieId, pageNo, pageSize).then(result => {
            if (comments.length > 0 && pageNo > 1) {
                setComments([...comments, ...result.data])
            }else {
                setComments(result.data)
            }
        })
    }

    function addState(movieTime) {
        dispatch(cleanState());

        let movieDto = {
            id: movie.movieId,
            movieName: movie.movieName,
            imageUrl: movie.movieImageUrl,
            saloonId: selectedSaloon.saloonId,
            saloonName: selectedSaloon.saloonName,
            movieDay: selectedDay,
            movieTime: movieTime
        }
        dispatch(addMovieToState(movieDto));
        navigate("buyTicket")
    }

    function sendCommentText() {

        if(userFromRedux) {
            if(commentText.trim().length > 0) {
                let commentDto = {
                    commentByUserId: userFromRedux.userId,
                    commentText: commentText,
                    commentBy: userFromRedux.fullName,
                    token: userFromRedux.token,
                    movieId: movieId
                }
                
                commentService.addComment(commentDto).then(result => {
                    if(result.status == 200) {
                        document.querySelector("#commentArea").value = "";
                        setComments([...comments, result.data])
                        toast.success("Yorumunuz eklendi!", {
                            theme: "light",
                            position: "top-center"
                        });
                    }
                })

            } else {
                toast.warning("Yorumunuz boş olamaz!", {
                    theme: "light",
                    position: "top-center"
                });
            }
        } else {
            toast.error("Yorum yapmak için lütfen giriş yapın!", {
                theme: "light",
                position: "top-center"
            });
        }
    }

    function deleteComment(commentId) {
        let deleteCommentDto = {
            commentId: commentId,
            token: userFromRedux.token
        }
        commentService.deleteComment(deleteCommentDto).then(result => {
            if(result.status == 200){
                let newComments = comments.filter(c => c.commentId != commentId);
                setComments(newComments);
            }
        })
    }

  return (
    <div>
        <section id="entry-section" className='detail-bg pt-5'>
            <div className=' container mt-5'>
                <div className='row gx-0 pt-2 justify-content-center align-items-start'>
                    <div className='col-sm-12 col-md-6 text-center mb-4' >
                        <img className='img-thumbnail w-50' src={movie?.movieImageUrl} />
                    </div>
                    <div className='col-sm-12 col-md-6 text-start text-light'>
                        <h3>{movie?.movieName}</h3>
                        <hr/>
                        <h5>Yönetmen: {movie?.directorName}</h5>
                        <h5>Oyuncular: {actors?.map(actor => (
                            actor.actorName + " ,"
                        ))}
                        </h5>
                        <div class="row gy-1 justify-content-start align-items-end mt-5">
                        
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"
                                    onClick={() => {
                                        document.querySelector("#ticketBuy").scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }}><strong>Bilet Al </strong></button>
                                
                            </div>
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"
                                    onClick={() => {
                                        document.querySelector("#commentSection").scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }}><strong>Yorum Yap</strong></button>

                            </div>
                            <div className='col-sm-4'>
                                <button class="detail-page-btn btn btn-light btn-lg col-12" type="button"
                                    data-bs-toggle="modal" data-bs-target="#movieTrailerModal"><strong>Fragman</strong></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* for css ::after property */}
        <style dangerouslySetInnerHTML={{
            __html: [
                '.detail-bg:after {',
                '  content: "Hello";',
                '  position: absolute;',                
                'z-index: -1;',
                'inset: 0;',
                `background-image: url(${movie?.movieImageUrl});`, 
                'background-repeat: no-repeat;',
                'background-size: cover;',
                'background-position: top center;',
                'opacity: 0.8;',
                '-webkit-filter: blur(8px) saturate(1);',
                '}'
                ].join('\n')
            }}>
        </style>

        <section className='p-5'>
            <div className='container'>
                <div className='row justify-content-between ms-0 ms-md-5 ps-0 ps-md-5'>
                    <div className='col-sm-4 text-start'>
                        <p> <strong> Vizyon Tarihi: </strong> {dateConvert( movie.releaseDate) }</p>
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
        <section id="ticketBuy" className='pt-1 pb-3'>
            <div className='container bg-primary rounded'>
                <div className='row p-5'>
                    <div className='col-sm-4 mt-2 text-sm-start text-md-end text-light'>
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

        {/* Ticket Detail Section */}
        {selectedSaloon ? (
            <section id="ticketDetailSection" className='px-5 py-1 pb-5'>
                <hr />
                <div className='container py-2'>
                    <ul class="nav justify-content-center">
                        {
                            [0,1,2,3,4,5,6].map((i) => (
                                <li class="nav-item">
                                    <a class="nav-link active date-converter-ticket" aria-current="page"
                                         href="#!" onClick={() => setSelectedDay( dateConvert(new Date().setDate(date.getDate() + i)) )}>
                                        {dateConvertForTicket(new Date().setDate(date.getDate() + i))}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>
                <hr />

                <div className='container bg-primary rounded'>
                    <h3 className='text-light p-3'>{selectedSaloon?.saloonName}</h3>
                </div>
                <div className='container pb-4'>
                    {saloonTimes?.map(time => (
                        <button className='saloonTime-btn btn btn-outline-dark mx-2 mt-3'
                            onClick={() => addState(time.movieBeginTime)}>
                            <strong>{time.movieBeginTime} </strong>
                        </button>
                    ))}
                </div>
                <hr />

            </section>
        ): null}


        {/* Comment Modal */}
        <section id="commentSection" className='pt-5 pb-5 px-2'>
            <div className='container'>
                <div className='row gy-2 justify-content-start align-items-start'>
                    <div className='col-sm-12 col-md-6 text-start'>
                       <h3>Yorumlar</h3>
                       {/* Yorumları listele */}
                       <div style={{height: "200px", overflow:"scroll",overflowX: "hidden"}}>
                            {comments.length == 0 ? (
                                <p className='lead mt-4'>İlk Yorumu sen yaz</p>
                            ): null}

                            {comments.map(comment => (
                                <div className='row align-items-center'>
                                    <div className='col-sm-10'>
                                        <p className='lead mt-4'>{comment.commentText}</p>
                                        <p className='small mt-0'>{comment.commentBy}</p>
                                    </div>
                                    {userFromRedux && comment.commentByUserId == userFromRedux.userId ? 
                                        <div className='col-sm-2'>
                                            <p className='small mb-0' onClick={() => {deleteComment(comment.commentId)}}> 
                                                <i class="fa-solid fa-xmark" ></i>
                                            </p>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            ))}
                            <hr />
                            <div className='text-center'>
                                {currentPage < Math.ceil(countOfComments / 5) && countOfComments > 5 ?
                                    <a href='#!' className='a-pagination lead mt-4'
                                        onClick={() => {
                                            getComments(movieId, currentPage + 1)
                                            setCurrentPage(currentPage+1)
                                        }}>Daha fazla göster</a>
                                : null}
                            </div> 
                       </div>


                    </div>
                    <div className='col-sm-12 col-md-6 text-start'>
                        <h3>Yorum Yap</h3>
                            <textarea id="commentArea" className='text-dark mb-3' placeholder='Yorumunuz' onChange={(e) => setCommentText(e.target.value)} ></textarea>
                            <button class="comment-btn btn btn-dark btn-lg col-12" type="button" onClick={() => sendCommentText()}><strong>Gönder</strong></button>
                    </div>
                </div>
            </div>
        </section>

        {/* Other Movies */}
        <section className='p-5'>
            
            <h3 className='text-center mb-4'>Vizyondaki Diğer Filmler</h3>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper movie-slider"
            >
                {otherMovies.map(movie => (
                    <SwiperSlide key={movie.movieId} >
                            <div className='slider-item' onClick={()=> {
                                navigate("/movie/" + movie.movieId)
                                getNewVisionMovie(movie.movieId);
                                document.querySelector("#entry-section").scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}>
                            <div className='slider-item-caption d-flex align-items-end justify-content-center h-100 w-100'>
                                <div class="d-flex align-items-center flex-column mb-3" style={{height: "20rem"}}>
                                    <div class="mb-auto pt-5 text-white"><h3> {movie.movieName} </h3></div>
                                    <div class="p-2 d-grid gap-2">
                                        <a className="slider-button btn btn-light btn-md rounded d-none d-sm-block"
                                            onClick={()=> {
                                                navigate("/movie/" + movie.movieId)
                                                getNewVisionMovie(movie.movieId);
                                            }}>
                                            <strong>Yorum Yap </strong>
                                        </a>
                                        <a class="slider-button btn btn-light btn-md rounded d-none d-sm-block"
                                            onClick={()=> {
                                                navigate("/movie/" + movie.movieId)
                                                getNewVisionMovie(movie.movieId);
                                            }}>
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


        {/* MovieTrailer Modal */}

        <div class="modal fade" id="movieTrailerModal" tabindex="-1" aria-labelledby="movieTrailerLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="movieTrailerLabel">Fragman</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                        let player = document.getElementById("videoPlayer").getAttribute("src");
                        document.getElementById("videoPlayer").setAttribute("src", player);
                    }}></button>
                </div>
                <div id='modalBody' class="modal-body">
                    <iframe id='videoPlayer' width="100%" height="500rem" frameborder="0" 
                        src={movie.movieTrailerUrl + "?autoplay=0"}>
                    </iframe>
                </div>
                
                </div>
            </div>
        </div>

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
                            <a className='text-start text-dark' href='#!' onClick={() =>  {
                                setSelectedSaloon(s)
                                getSaloonTimes(s.saloonId, movieId)
                            }}
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
        <ToastContainer />
    </div>
  )
}
