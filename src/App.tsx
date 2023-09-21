import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MobileView from './layouts/MobileView';
import Components from './pages/Components.page.tsx';

import Feed from './pages/feed/Feed.page';
import Feeds from './pages/feed/Feeds.page';
import Login from './pages/Login.tsx';
import MainLanding from './pages/MainLanding.tsx';
import More from './pages/profile/More.tsx';
import Profile from './pages/profile/Profile.tsx';
import Setting from './pages/profile/Setting.tsx';
import TestPage from './pages/Test.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileView />}>
          <Route path="" element={<TestPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<MainLanding />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/feed/:id" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Setting />} />
          <Route path="/profile/more" element={<More />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
