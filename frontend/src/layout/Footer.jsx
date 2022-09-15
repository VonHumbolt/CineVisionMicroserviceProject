import React from 'react'

export default function Footer() {
  return (
    <div>

        <footer class="py-5 bg-black">
            <div class="container px-5">
              <div className='row justify-content-evenly align-items-center'>
                <div className='col'>
                  <p className='m-1 lead text-center text-white'>Vizyonda</p>
                  <p className='m-1 lead text-center text-white'>Yakında</p>
                  <p className='m-1 lead text-center text-white'>Sinemalar</p>
                </div>
                <div className='col'>
                  <p className='m-1 lead text-center text-white'>E-Bilet</p>
                  <p className='m-1 lead text-center text-white'>İade İşlemleri</p>
                  <p className='m-1 lead text-center text-white'>Satış Sözleşmesi</p>
                </div>
              </div>
              <p class="mt-5 text-center text-white small">
                <strong>
                   Copyright &copy; CineVision 2022
                </strong> 
              </p>
            </div>
        </footer>

    </div>
  )
}
