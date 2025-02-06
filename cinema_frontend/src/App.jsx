import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InCinemaPage from './pages/InCinemaPage/InCinemaPage';
import AuthPage from './pages/AuthPage/AuthPage';
import UserAccountDetailsPage from './pages/UserAccountDetails/UserAccountDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<InCinemaPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/my-profile' element={<UserAccountDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;