import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MakeCharacter from '../../../main/factories/pages/character'
import MakeHome from '../../../main/factories/pages/home'
import PageError from '../../pages/PageNotFound'

const RoutesComponent = ():JSX.Element =>  (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeHome />} />
      <Route path="/personagem/:id" element={<MakeCharacter />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  </BrowserRouter>
)

export default RoutesComponent






