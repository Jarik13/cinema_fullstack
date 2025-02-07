import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InCinemaPage from './pages/InCinemaPage/InCinemaPage';
import AuthPage from './pages/AuthPage/AuthPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import ChooseSessionPage from './pages/ChooseSessionPage/ChooseSessionPage';
import HallPage from './pages/HallPage/HallPage';
import SnacksListPage from './pages/SnacksListPage/SnacksListPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<InCinemaPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/my-profile' element={<UserProfilePage />} />
          <Route path='/:locationId/sessions' element={<ChooseSessionPage />} />
          <Route path='/:locationId/sessions/:hallId' element={<HallPage />} />
          <Route path='/:locationId/sessions/:hallId/snacks' element={<SnacksListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;