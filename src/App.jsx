import React, { useEffect } from 'react'
import NavBar from './Components/Utilities/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Footer from './Components/Utilities/Footer';
import './index.css';
import './Styles/MobileScreen.css';
import './Styles/TabletScreen.css';
import './Styles/LaptobScreen.css';
import NotFound from './Components/Utilities/NotFound';
import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import WithdrawPage from './Pages/Withdrawal/WithdrawPage';
import './App.css'
import ProfilePage from './Pages/Profile/ProfilePage';
import ForgetPassword from './Pages/Authentication/ForgetPassword';
import Terms from './Pages/Terms/Terms';
import Confitions from './Pages/Terms/Confitions';
import Privacy from './Pages/Terms/Privacy';
import Cookies from './Pages/Terms/Cookies';


const App = () => {

  return (
    <div>
      <NavBar />

      <Routes >

        <Route index element={
          localStorage.token ? <DashboardPage /> : <HomePage />
        } />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/forget' element={<ForgetPassword />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={
          localStorage.token ? <DashboardPage /> : <HomePage />
        } />
        <Route path='/withdrawal' element={
          localStorage.token ? <WithdrawPage /> : <HomePage />
        } />

        <Route path='/profile' element={
          localStorage.token ? <ProfilePage /> : <HomePage />
        } />
        <Route path='/review/terms' element={<Terms />} >
          <Route path='conditions' element={<Confitions />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='cookies' element={<Cookies />} />
        </Route>

      </Routes>

      <Footer />
    </div>
  )
}

export default App
