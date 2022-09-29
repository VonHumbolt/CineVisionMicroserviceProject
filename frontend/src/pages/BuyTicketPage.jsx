import Cleave from 'cleave.js/react'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PaymentService } from '../services/paymentService'
import KaanKaplanTextInput from '../utils/customFormItems/KaanKaplanTextInput'

export default function BuyTicketPage() {

    const navigate = useNavigate()

    const paymentService = new PaymentService();

    const [ticketItem, setTicketItem] = useState("ticketSection")
    const [adultTicketNumber, setAdultTicketNumber] = useState(0)
    const [studentTicketNumber, setStudentTicketNumber] = useState(0)

    const movieState = useSelector(state => state.movie.payload)

  return (
    <div className='ticket-page'>

        <div className='row justify-content-center align-items-start'>

            <div className='ticket-page-bg-img  col-sm-12 col-md-4 text-light'>
                <div className='mt-5 pt-5'>
                    <h3 className='mt-2'> {movieState?.movieName} </h3>
                    <img className='img-thumbnail w-50 mx-auto mt-5' src={movieState?.imageUrl} />
                    <h5 className='pt-5'><i className="fa-solid fa-location-dot"></i>{movieState?.saloonName}</h5>
                    <h5 className='py-2'><i class="fa-solid fa-calendar-days"></i>{movieState?.movieDay}</h5>
                    <h5><i class="fa-regular fa-clock"></i>{movieState?.movieTime}</h5>
                </div>
               
            </div>
            {/* for css ::after property */}
            <style dangerouslySetInnerHTML={{
                    __html: [
                        '.ticket-page-bg-img:after {',
                        '  content: " ";',
                        '  position: absolute;',                
                        'z-index: -1;',
                        'inset: 0;',
                        `background-image: url(${movieState?.imageUrl});`, 
                        'background-repeat: no-repeat;',
                        'background-size: cover;',
                        'background-position: top center;',
                        'opacity: 0.8;',
                        'min-height: 100vh;',
                        '-webkit-filter: blur(8px) saturate(1);',
                        '}'
                        ].join('\n')
                }}>
                </style>
            <div className='col-sm-12 col-md-8 pt-5'>
                <div className='container pt-5'>
                    
                    <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <div className='row pt-3 pb-1 px-4 align-items-center'>
                                        <div className='col-sm-6 text-start'>
                                            <h3>Biletini Seç</h3>
                                        </div>
                                            {/* Ticket Type Section */}
                                         
                                            <div className='col-sm-6 mb-2 text-end'>
                                                {ticketItem === "ticketSection" ?
                                                    <button className='btn btn-dark'
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo"
                                                        onClick={() => setTicketItem("placeSection")}>Devam Et</button>
                                                :  
                                                    <button className='btn btn-outline-dark'
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
                                                        onClick={() => setTicketItem("ticketSection")}>Değiştir</button>}
                                            </div>
                                        
                                </div>
                            </h2>
                            {ticketItem === 'ticketSection' ? (

                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <section>
                                                <div className='row '>
                                                    <div className='col-sm-6 text-start'>
                                                        <p>Film ve Seans seçiminden sonra bilet tipini seçmelisin.
                                                            Eğer öğrenciysen kimlik kartını yanında getirmeyi unutma.</p>                        
                                                    </div>
                                                </div>

                                            <div className='row mt-3 px-2 border border-2 align-items-center'>
                                                <div className='col-sm-6 text-uppercase border-end'>
                                                    Tam
                                                </div>
                                                <div className='col-sm-3 border-end'>
                                                    Fiyat ₺
                                                </div>
                                                <div className='col-sm-3'>
                                                    <div className='row justify-content-center align-items-center'>
                                                        <div className='col-sm-4'>
                                                            <button className='btn btn-dark'
                                                                onClick={() => {
                                                                    if(adultTicketNumber > 0){
                                                                        setAdultTicketNumber(adultTicketNumber-1)}
                                                                    }
                                                                    }>
                                                                        <i class="fa-solid fa-minus"></i></button>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            {adultTicketNumber}
                                                        </div>
                                                        <div className='col-sm-4 py-2'>
                                                            <button className='btn btn-dark'
                                                                onClick={() => setAdultTicketNumber(adultTicketNumber+1)}> <i class="fa-solid fa-plus"></i> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-1 px-2 border border-2 align-items-center'>
                                                <div className='col-sm-6 text-uppercase border-end'>
                                                    Öğrenci
                                                </div>
                                                <div className='col-sm-3 border-end'>
                                                    Fiyat ₺
                                                </div>
                                                <div className='col-sm-3'>
                                                    <div className='row justify-content-center align-items-center'>
                                                        <div className='col-sm-4'>
                                                            <button className='btn btn-dark'
                                                             onClick={() => {
                                                                if(studentTicketNumber > 0){
                                                                    setStudentTicketNumber(studentTicketNumber-1)}
                                                                }
                                                                }>
                                                                    <i class="fa-solid fa-minus"></i></button>
                                                               
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            {studentTicketNumber}
                                                        </div>
                                                        <div className='col-sm-4 py-2'>
                                                            <button className='btn btn-dark'
                                                                onClick={() => setStudentTicketNumber(studentTicketNumber+1)}> <i class="fa-solid fa-plus"></i> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className='lead text-end mt-3 me-5'>Toplam Tutar: <strong>{(studentTicketNumber * 15.00 + adultTicketNumber * 25.00).toFixed(2)} ₺ </strong></p>
                                        </section>

                                    </div>
                                </div>
                            ): null}
                        </div>

                        {/* Place Section */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <div className='row pt-3 pb-1 px-4 align-items-center'>
                                        <div className='col-sm-6 text-start'>
                                            <h3>Koltuk Seç </h3>
                                        </div>
                                        <div className='col-sm-6 mb-2 text-end'>
                                            {ticketItem === "placeSection" ?
                                                <button className='btn btn-dark' data-bs-toggle="collapse" 
                                                    data-bs-target="#panelsStayOpen-collapseThree"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"
                                                    onClick={() => setTicketItem("paySection")}>Devam Et</button>
                                            :
                                                // <button className='btn btn-outline-dark' data-bs-toggle="collapse" 
                                                //     data-bs-target="#panelsStayOpen-collapseTwo"
                                                //     aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
                                                //     onClick={() => setTicketItem("placeSection")}>Değiştir</button>
                                                null
                                            }
                                        </div>
                                </div>
                            </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">F</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td className='px-0' onClick={() => {
                                                        
                                                    }}> <i class="fa-solid fa-chair"></i> </td>
                                                    <td className='px-0'> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                                <tr>
                                                <th >E</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                                <tr>
                                                    <th>D</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                                <tr>
                                                    <th>C</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">B</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">A</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                    <td> <i class="fa-solid fa-chair"></i> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                            <p className='pt-2'>Perde</p>
                                            <hr style={{height:"4px", color:"black"}}/>
                                    </div>
                                </div>
                        </div>

                        {/* Pay Section */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <div className='row pt-3 pb-1 px-4 align-items-center'>
                                        <div className='col-sm-6 text-start'>
                                            <h3>Ödeme</h3>
                                        </div>
                                        <div className='col-sm-6 mb-2 text-end'>
                                            {ticketItem === "paySection" ?
                                                <h3>Toplam : {(studentTicketNumber * 15.00 + adultTicketNumber * 25.00).toFixed(2)} ₺</h3>
                                            : null}
                                        </div>
                                      
                                </div>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <Formik
                                    initialValues={{}}
                                    onSubmit={(values) => {
                                        values.movieName = movieState?.movieName;
                                        values.saloonName= movieState?.saloonName;
                                        values.movieDay= movieState?.movieDay;
                                        values.movieStartTime= movieState?.movieTime;

                                        paymentService.sendTicketDetail(values).then(result => {
                                            navigate("/paymentSuccess")
                                        })
                                    }}>
                                    <Form className='row justify-content-center align-items-start'>
                                        <div className='col-sm-12 col-md-6'>
                                            <div class="imput-group form-floating has-validation mb-3">
                                                <KaanKaplanTextInput name="fullName" type="text" class="form-control" id="fullName" placeholder="İsim - Soyisim" required/>
                                                <label for="fullName">İsim - Soyisim</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <KaanKaplanTextInput name="email" type="email" class="form-control" id="email" placeholder="Email" required/>
                                                <label for="email">Email</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <KaanKaplanTextInput name="phone" type="tel" pattern="[0]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}" class="form-control" id="phone" placeholder="0 5** *** ** **" required/>
                                                <label for="phone">Cep Telefonu</label>
                                            </div>
                                            
                                           
                                        </div>

                                        <div className='col-sm-12 col-md-6 mb-3'>
                                            <div class="form-floating mb-3">
                                                <Cleave class="form-control" id="floatingCardNumber" placeholder='Kredi Kartı Numarası' required
                                                options={{creditCard:true}} />
                                                <label for="floatingCardNumber">Kredi Kartı Numarası</label>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div class="form-floating mb-3">
                                                        <Cleave type="text" class="form-control" id="floatingCardLastDate" placeholder='Son Tarih' required
                                                        options={{date:true, datePattern: ['m','y']}} />
                                                        <label for="floatingCardLastDate">Son Tarih</label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control"  maxlength="3" size="3"  id="floatingSecurityNumber" placeholder="Güvenlik Numarası" required/>
                                                        <label for="floatingSecurityNumber">CCV</label>
                                                    </div>
                                                </div>
                                                <p className='text-start'> <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input" required/>Ön Bilgilendirme Koşulları'nı ve
                                                Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum.
                                            </p>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className='text-end mt-1'>
                                            <button type='submit' className='btn btn-dark col-3'>Ödeme</button>
                                        </div>
                                    </Form>
                                </Formik>

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
