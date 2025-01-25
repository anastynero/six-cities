import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offer from '../offer/offer';
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/private-route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
