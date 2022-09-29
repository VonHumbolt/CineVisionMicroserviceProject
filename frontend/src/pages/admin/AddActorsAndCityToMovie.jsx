import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActorService } from '../../services/actorService';
import { CityService } from '../../services/cityService';
import KaanKaplanSelect from '../../utils/customFormItems/KaanKaplanSelect'
import KaanKaplanTextInput from '../../utils/customFormItems/KaanKaplanTextInput'
import * as yup from "yup";

export default function AddActorsAndCityToMovie() {

    let {movieId} = useParams();
    const navigate = useNavigate()

    const cityService = new CityService();
    const actorService = new ActorService();

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
        actorService.getall().then(result => setActors(result.data))
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

                    if(values.actorName.trim() !== "") {
                        actorNameList = [...values.actors, ...values.actorName.split(", ")] 
                    } else {
                        actorNameList = [...values.actors] 
                    }
                    let actorDto = {
                        movieId: movieId,
                        actorNameList: actorNameList
                    }
                    let cityDto = {
                        movieId: movieId,
                        cityNameList: values.cities
                    }
                    
                    actorService.addActor(actorDto);
                    cityService.addCity(cityDto).then(result => navigate("/addMovie"));
                }}>

                <Form>
                    <div class="form-floating mb-3">
                        <KaanKaplanSelect
                            class="form-select form-select-lg mb-3"
                            name="actors"
                            multiple
                            size={3}
                            options={actors.map(actor => (
                                {key: actor?.actorName, text:actor?.actorName, value: actor?.actorName}
                            ))}
                        />
                    </div>
                    <p>Listede yoksa lütfen virgül ile ayırarak yazınız.</p>
                    <div class="form-floating mb-3">
                        <KaanKaplanTextInput  type="text" name='actorName' class="form-control" id="floatingInput" placeholder="Aktörün İsmi" />
                        <label for="floatingInput">Aktörün İsmi</label>
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
