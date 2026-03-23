import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu.tsx';
import InventoryPage from './pages/InventoryPage.tsx';
import TransferStatusPage from './pages/TransferStatusPage.tsx';
import TransferManagePage from './pages/TransferManagePage.tsx';
import OtherReleasePage from './pages/OtherReleasePage.tsx';
import ReleaseManagePage from './pages/ReleaseManagePage.tsx';

import { ThemeProvider } from './context/ThemeContext.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/transfer-status" element={<TransferStatusPage />} />
          <Route path="/transfer-manage" element={<TransferManagePage />} />
          <Route path="/other-release" element={<OtherReleasePage />} />
          <Route path="/release-manage" element={<ReleaseManagePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
