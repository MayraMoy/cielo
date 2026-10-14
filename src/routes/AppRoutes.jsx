import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { ScanPage } from '../pages/ScanPage';
import { TriviaPage } from '../pages/TriviaPage';
import { LibraryPage } from '../pages/LibraryPage';
import { FireSafetyPage } from '../pages/FireSafetyPage';
import { MobileFrame } from '../components/common/MobileFrame';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/scanner" element={<ScanPage />} />
          <Route path="/trivia" element={<TriviaPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/fire-safety" element={<FireSafetyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}
