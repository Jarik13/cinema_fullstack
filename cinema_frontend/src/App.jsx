import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InCinemaPage from './pages/InCinemaPage/InCinemaPage';
import AuthPage from './pages/AuthPage/AuthPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import ChooseSessionPage from './pages/ChooseSessionPage/ChooseSessionPage';
import HallPage from './pages/HallPage/HallPage';
import SnacksListPage from './pages/SnacksListPage/SnacksListPage';
import WatchFilmsOnlinePage from './pages/WatchFilmsOnlinePage/WatchFilmsOnlinePage';
import FilmDetailsOnlinePage from './pages/FilmDetailsOnlinePage/FilmDetailsOnlinePage';
import AdminPanelPage from './pages/AdminPanelPage/AdminPanelPage';

const App = () => {
  const isAdmin = true;

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

          <Route path='/watch-online' element={<WatchFilmsOnlinePage />} />
          <Route path='/watch-online/:filmId' element={<FilmDetailsOnlinePage />} />

          <Route 
            path="/admin" 
            element={isAdmin ? <AdminPanelPage /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;