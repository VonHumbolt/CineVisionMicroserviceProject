import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActorService } from '../../services/actorService';
import { CityService } from '../../services/cityService';
import KaanKaplanSelect from '../../utils/customFormItems/KaanKaplanSelect'
import KaanKaplanTextInput from '../../utils/customFormItems/KaanKaplanTextInput'
import * as yup from "yup";
import { MovieImageService } from '../../services/movieImageService';
import { useSelector } from 'react-redux';

export default function AddActorsAndCityToMovie() {

    let {movieId} = useParams();
    const navigate = useNavigate()

    const userFromRedux = useSelector(state => state.user.payload)

    const cityService = new CityService();
    const actorService = new ActorService();
    const movieImageService = new MovieImageService();

    const [cities, setCities] = useState([])
    const [actors, setActors] = useState([])

    useEffect(() => {
        cityService.getall().then(result => {
            let arr = [];
            result.data.forEach(element => {
                if(!arr.includes(element?.cityName)){
                    arr.push(element?.cityName)
                }
            });
            setCities(arr)
        })
        actorService.getall().then(result => {
            let arr = [];
            result.data.forEach(element => {
                if(!arr.includes(element?.actorName)){
                    arr.push(element?.actorName)
                }
            });
            setActors(arr)
        })
      }, [])

    const initValues = {
     
    }

    const validationSchema = yup.object({

   
    })

  return (
    <div>
        <div className='mt-5 p-5 container' style={{height: "100vh"}}>
            <h2 className='mt-4'>Film Ekle</h2>
            <hr />

            <h5 className='my-4'>
                Eklemiş olduğunuz filmin oyuncu ve şehir bilgilerini ekleyin.
            </h5>

            <Formik 
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    let actorNameList;

                    if(!values.actorname && values.actorName.trim() != "") {
                        if(values.actors !== undefined){

                            actorNameList = [...values.actors, ...values.actorName.split(", ")] 
                        }else {

                            actorNameList = [...values.actorName.split(", ")] 
                        }
                    } else {
                        actorNameList = [...values.actors] 
                    }
                    let actorDto = {
                        movieId: movieId,
                        actorNameList: actorNameList,
                        token: userFromRedux.token
                    }
                    let cityDto = {
                        movieId: movieId,
                        cityNameList: values.cities,
                        token: userFromRedux.token
                    }
                    let movieImageDto = {
                        movieId: movieId,
                        imageUrl: values.imageUrl,
                        token: userFromRedux.token
                    }
                    
                    actorService.addActor(actorDto);
                    movieImageService.addMovieImage(movieImageDto);
                    cityService.addCity(cityDto).then(result => navigate("/addMovie"));
                }}>

                <Form>
                    <div class="mb-3">
                        <KaanKaplanSelect
                            class="form-select form-select-lg mb-3"
                            name="actors"
                            multiple
                            size={3}
                            options={actors.map(actor => (
                                {key: actor, text:actor, value: actor}
                            ))}
                        />
                    </div>
                    <p>Listede yoksa lütfen virgül ile ayırarak yazınız.</p>
                    <div class="form-floating mb-3">
                        <KaanKaplanTextInput  type="text" name='actorName' class="form-control" id="floatingInput" placeholder="Aktörün İsmi" />
                        <label for="floatingInput">Aktörün İsmi</label>
                    </div>

                    <div class="form-floating mb-3">
                        <KaanKaplanTextInput name='imageUrl' type="text" class="form-control" id="imageUrl" placeholder="Afiş Resmi Url" />
                        <label for="imageUrl">Afiş Resmi Url</label>
                    </div>

                     <div class="mb-3">
                        <KaanKaplanSelect 
                            class="form-select form-select-lg mb-3"
                            name="cities"
                            multiple
                            size={3}
                            options= {cities.map(city => (
                                {key: city, text:city, value: city}
                            ))}
                            placeholder="Şehir"
                        />
                    </div>

                    <div className="d-grid gap-2 my-4 col-6 mx-auto">
                      <input
                        type="submit"
                        value="Ekle"
                        className="btn btn-block btn-primary"
                      />
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}
