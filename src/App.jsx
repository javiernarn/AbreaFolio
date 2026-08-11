import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/index.html" element={<Navigate to="/index.html/home" replace />} />
      <Route path="/index.html/:section" element={<MainPage />} />
      {/* Fallback: any unknown path still renders the page instead of a blank screen */}
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
