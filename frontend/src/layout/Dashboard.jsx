import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import BuyTicketPage from '../pages/BuyTicketPage'
import DetailPage from '../pages/DetailPage'
import MainPage from '../pages/MainPage'

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPage/>} />
        <Route path={"/movie/:movieId"} element={<DetailPage/>} />
        <Route path={"movie/:movieId/buyTicket"}  element={<BuyTicketPage/>} />       

      </Routes>

    </div>
  )
}
