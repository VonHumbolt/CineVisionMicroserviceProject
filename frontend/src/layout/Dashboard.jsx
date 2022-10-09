import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AddActorsAndCityToMovie from '../pages/admin/AddActorsAndCityToMovie'
import AddMoviePage from '../pages/admin/AddMoviePage'
import BuyTicketPage from '../pages/BuyTicketPage'
import DetailPage from '../pages/DetailPage'
import MainPage from '../pages/MainPage'
import PaymnetSuccessPage from '../pages/PaymentSuccessPage'
import ErrorPage from '../utils/utilPages/ErrorPage'
import ProtectedRoute from '../utils/utilPages/ProtectedRoute'

export default function Dashboard() {

  const userFromRedux = useSelector(state => state?.user?.payload)

  return (
    <div> 
      <Routes>
        <Route path={"/"} element={<MainPage/>} />
        <Route path={"/movie/:movieId"} element={<DetailPage/>} />
        <Route path={"movie/:movieId/buyTicket"}  element={<BuyTicketPage/>} />       
        <Route path={"/paymentSuccess"}  element={<PaymnetSuccessPage/>} />

        <Route path="/addMovie"  element={
          <ProtectedRoute user={userFromRedux?.roles[0]}>
            <AddMoviePage/>
          </ProtectedRoute>   
        } />

        <Route path="/addMovie/:movieId"  element={
          <ProtectedRoute user={userFromRedux?.roles[0]}>
            <AddActorsAndCityToMovie/>
          </ProtectedRoute>
        } />       

        <Route path='*' element={<ErrorPage />} />

      </Routes>

    </div>
  )
}
