import React from 'react'
import { useState } from 'react';
import { UserService } from '../services/userService'

export default function RegisterModal() {

    const userService = new UserService();

    const [customerName, setCustomerName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [passwordAgain, setPasswordAgain] = useState()

    const registerCustomer = () => {
        if(customerName.trim() !== "" && email.trim() !== ""
            && phone.trim() !== "" && password.trim() !== "" 
            && passwordAgain.trim() !== "") {

                if (password === passwordAgain) {

                    let customer = {
                        customerName:customerName,
                        email:email,
                        phone:phone,
                        password:password
                    };
                    userService.addCustomer(customer).then(result => {
                        // welcome - add to redux
                    })
                } else {
                    // toastify
                }
        }
    }

  return (
    <div>
        <form className='row justify-content-center align-items-start'>
        <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header login-modal-header">
                    <h5 class="modal-title" id="registerModalLabel">Üye Ol</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3">
                        <input type="text" onChange={(e) => setCustomerName(e.target.value)} class="form-control" id="floatingFirstName" placeholder='İsminiz' required/>
                        <label for="floatingFirstName">İsim - Soyisim</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email"
                         onChange={(e) => setEmail(e.target.value)} class="form-control" id="floatingInput" placeholder='Email' required />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="phone" 
                             onChange={(e) => setPhone(e.target.value)} class="form-control" id="floatingPhone" placeholder='Telefon' required />
                        <label for="floatingPhone">Telefon</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password"
                         onChange={(e) => setPassword(e.target.value)} class="form-control" id="floatingPassword" placeholder='Şifre' required/>
                        <label for="floatingPassword">Şifre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password"
                         onChange={(e) => setPasswordAgain(e.target.value)} class="form-control" id="floatingPasswordAgain" placeholder='Şifre Tekrar' required/>
                        <label for="floatingPasswordAgain">Şifre Tekrar</label>
                    </div>
                    <p className='ps-2 text-start'>
                        Zaten üye misiniz? 
                        <a href='!#' style={{color:"black"}}
                        data-bs-toggle="modal" data-bs-target="#loginModal"> Giriş Yap </a>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary login-modal-btn"
                     onClick={() => registerCustomer()}>Kayıt Ol</button>
                </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}
