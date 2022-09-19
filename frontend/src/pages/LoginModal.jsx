import React from 'react'

export default function LoginModal() {
  return (
    <div>

        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header login-modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Giriş</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder='Email' required />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder='Şifre' required/>
                        <label for="floatingPassword">Şifre</label>
                    </div>
                    <p className='ps-2 text-start'>
                        CineVision üyeliğiniz yok mu?
                        <a href='!#' style={{color:"black"}}
                            data-bs-toggle="modal" data-bs-target="#registerModal"> Hemen Üye Ol </a>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary login-modal-btn">Giriş Yap</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
