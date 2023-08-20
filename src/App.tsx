import MobileView from './layouts/MobileView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileView />}>
          <Route path="" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
