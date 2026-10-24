import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { ScanPage } from '../pages/ScanPage';
import { TriviaPage } from '../pages/TriviaPage';
import { JuniorGamesPage } from '../pages/JuniorGamesPage';
import { LibraryPage } from '../pages/LibraryPage';
import { ProfilePage } from '../pages/ProfilePage';
import { FireSafetyPage } from '../pages/FireSafetyPage';
import { MobileFrame } from '../components/common/MobileFrame';
import { HomeFactProvider } from '../context/HomeFactContext';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <HomeFactProvider>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/scanner" element={<ScanPage />} />
          <Route path="/trivia" element={<TriviaPage />} />
          <Route path="/juegos" element={<JuniorGamesPage />} />
          <Route path="/games" element={<JuniorGamesPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/fire-safety" element={<FireSafetyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileFrame>
      </HomeFactProvider>
    </BrowserRouter>
  );
}
