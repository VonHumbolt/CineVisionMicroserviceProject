import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AddActorsAndCityToMovie from '../pages/admin/AddActorsAndCityToMovie'
import AddMoviePage from '../pages/admin/AddMoviePage'
import BuyTicketPage from '../pages/BuyTicketPage'
import DetailPage from '../pages/DetailPage'
import MainPage from '../pages/MainPage'
import PaymnetSuccessPage from '../pages/PaymentSuccessPage'

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPage/>} />
        <Route path={"/movie/:movieId"} element={<DetailPage/>} />
        <Route path={"movie/:movieId/buyTicket"}  element={<BuyTicketPage/>} />       
        <Route path={"/paymentSuccess"}  element={<PaymnetSuccessPage/>} />       
        <Route path={"/addMovie"}  element={<AddMoviePage/>} />       
        <Route path={"/addMovie/:movieId"}  element={<AddActorsAndCityToMovie/>} />       

      </Routes>

    </div>
  )
}
