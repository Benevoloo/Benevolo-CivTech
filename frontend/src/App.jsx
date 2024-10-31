import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import SignUpPage from './pages/SignUp';
import SignUpPath from './pages/SignUpPath';
import SignUpHelper from './pages/SignUpHelper';
import SignUpNeighbor from './pages/SignUpNeighbor';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import NeighborTaskInputCard from './pages/NeighborBasePage';
import HelperBasePage from './pages/HelperBasePage'

import './styles/index.css'

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up-header' element={<SignUpPath />} />
        <Route path='/sign-up-helper' element={<SignUpHelper />} />
        <Route path='/sign-up-neighbor' element={<SignUpNeighbor />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id/:task_id' element={<UserPage />} />
        <Route path='/users/:id/neighbor' element={<NeighborTaskInputCard />} />
        <Route path='/users/:id/helper' element={<HelperBasePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
