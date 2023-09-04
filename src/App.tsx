import MobileView from './layouts/MobileView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test.page';
import Feeds from './pages/feed/Feeds.page';
import Feed from './pages/feed/Feed.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileView />}>
          <Route path="" element={<TestPage />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/feed/:id" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
