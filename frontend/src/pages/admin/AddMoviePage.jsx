import React, { useState } from 'react'
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ActorService } from '../../services/actorService';
import { useEffect } from 'react';
import { CityService } from '../../services/cityService';
import KaanKaplanSelect from '../../utils/customFormItems/KaanKaplanSelect';
import { CategoryService } from '../../services/categoryService';
import { DirectorService } from '../../services/directorService';
import KaanKaplanTextInput from '../../utils/customFormItems/KaanKaplanTextInput';
import KaanKaplanTextArea from '../../utils/customFormItems/KaanKaplanTextArea';
import { MovieService } from '../../services/movieService';
import { useNavigate } from 'react-router-dom';

export default function AddMoviePage() {

    const navigate = useNavigate()

    const actorService = new ActorService();
    const cityService = new CityService();
    const categoryService = new CategoryService();
    const directorService = new DirectorService();
    const movieService = new MovieService();

    const [actors, setActors] = useState([])
    const [cities, setCities] = useState([])
    const [categories, setCategories] = useState([])
    const [directors, setDirectors] = useState([])

    useEffect(() => {
      actorService.getall().then(result => setActors(result.data))
      cityService.getall().then(result => setCities(result.data))
      categoryService.getall().then(result => setCategories(result.data))
      directorService.getall().then(result => setDirectors(result.data))
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
                Film bilgilerini eksiksiz olarak doldur ve filmin oyuncularını seçmek için ilerle.
            </h5>

            <Formik 
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    movieService.addMovie(values).then(result => navigate("addMovie/" + result.data.movieId))
                }}>

                <Form>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput  type="text" name='movieName' class="form-control" id="floatingInput" placeholder="Film İsmi" />
                    <label for="floatingInput">Filmin İsmi</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextArea name='description' class="form-control" id="floatingPassword" placeholder="Özet" />
                    <label for="floatingPassword">Filmin Özeti</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput  name='duration' type="number" class="form-control" id="duration" placeholder="Süre" />
                    <label for="duration">Filmin Süresi</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='releaseDate' type="date" class="form-control" id="releaseDate" placeholder="Vizyon Tarihi" />
                    <label for="releaseDate">Vizyon Tarihi</label>
                </div>
            
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='imageUrl' type="text" class="form-control" id="imageUrl" placeholder="Afiş Resmi Url" />
                    <label for="imageUrl">Afiş Resmi Url</label>
                </div>
                
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='trailerUrl' type="text" class="form-control" id="trailerUrl" placeholder="Fragman Url" />
                    <label for="trailerUrl">Fragman Url</label>
                </div>

                <div class="form-floating mb-3">
                    <KaanKaplanSelect
                        id="categoryId"
                        className="form-select form-select-lg mb-3"
                        name="categoryId"
                        options={categories.map(category => (
                            {key: category?.categoryId, text:category?.categoryName, value: category?.categoryName}
                        ))}
                    />
                    <label for="categoryId">Kategori</label>
                </div>  
                <div class="form-floating mb-3">
                    <KaanKaplanSelect
                        id="directorId"
                        className="form-select form-select-lg mb-3"
                        name="directorId"
                        options={directors.map(director => (
                            {key: director?.directorId, text: director?.directorName, value:director?.directorName}
                        ))}
                    />
                    
                    <label for="directorId">Yönetmen</label>
                </div>
              
                {/* <div class="mb-3">
                    <KaanKaplanSelect 
                        class="form-select form-select-lg mb-3"
                        name="cities"
                        multiple
                        size={3}
                        options= {cities.map(city => (
                            {key: city?.cityId, text:city?.cityName, value: city?.cityName}
                        ))}
                        placeholder="Şehir"
                    />
                </div> */}

{/* Daha sonra file ile ekle */}
                {/* <div class="input-group mb-3">
                    <input type="file" class="form-control" id="image" />
                </div> */}

                    <div className="d-grid gap-2 my-4 col-6 mx-auto">
                      <input
                        type="submit"
                        value="İleri"
                        className="btn btn-block btn-primary"
                      />
                    </div>
                </Form>

              </Formik>
            
            
        </div>

        
    </div>
  )
}
