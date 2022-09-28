import React, { useState } from 'react'
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ActorService } from '../../services/actorService';
import { useEffect } from 'react';
import { CityService } from '../../services/cityService';

export default function AddMoviePage() {

    const actorService = new ActorService();
    const cityService = new CityService();

    const [actors, setActors] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
      actorService.getall().then(result => setActors(result.data))
      cityService.getall().then(result => setCities(result.data))
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
            <Formik 
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>

                <Form>
                <div class="form-floating mb-3">
                    <Field  type="text" name='movieName' class="form-control" id="floatingInput" placeholder="Film İsmi" />
                    <label for="floatingInput">Filmin İsmi</label>
                </div>
                <div class="form-floating mb-3">
                    <Field name='description' class="form-control" id="floatingPassword" placeholder="Özet" />
                    <label for="floatingPassword">Filmin Özeti</label>
                </div>
                <div class="form-floating mb-3">
                    <Field  name='duration' type="number" class="form-control" id="duration" placeholder="Süre" />
                    <label for="duration">Filmin Süresi</label>
                </div>
                <div class="form-floating mb-3">
                    <Field name='releaseDate' type="date" class="form-control" id="releaseDate" placeholder="Vizyon Tarihi" />
                    <label for="releaseDate">Vizyon Tarihi</label>
                </div>
            
                <div class="form-floating mb-3">
                    <Field name='trailerUrl' type="text" class="form-control" id="trailerUrl" placeholder="Fragman Url" />
                    <label for="trailerUrl">Fragman Url</label>
                </div>

                <div class="form-floating mb-3">
                    <select class="form-select" id="category" aria-label="Floating label select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="category">Kategori</label>
                </div>  
                <div class="form-floating mb-3">
                    <select class="form-select" id="director" aria-label="Floating label select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="director">Yönetmen</label>
                </div>
                <div class="mb-3">
                    <select class="form-select form-select-lg mb-3" multiple size={3} aria-label=".form-select-lg example">
                        {actors.map(actor => (
                            <option value={actor.actorId}>{actor.actorName}</option>

                        ))}
                     
                    </select>
                </div>
                <div class="mb-3">
                    <label>Şehir</label>
                    <select class="form-select form-select-lg mb-3" multiple size={3} aria-label=".form-select-lg example">
                        {cities.map(city => (
                            <option value={city.cityId}>{city.cityName}</option>

                        ))}
                    </select>
                </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                      <input
                        type="submit"
                        value="Ekle"
                        className="btn btn-block btn-primary"
                      />
                    </div>
                </Form>

              </Formik>
            <h5 className='mt-4'>CineVision'ı tercih ettiğin için teşekkür ederiz. 
                Ödeme işlemin tamamlandı. Bilet detay bilgilerin email adresine gönderildi.
            </h5>

            <h5 className='pt-3'>
                CineVision Ailesi olarak İyi Seyirler Dileriz.
            </h5>
        </div>

        
    </div>
  )
}
