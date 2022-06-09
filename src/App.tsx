
import logo from './logo.svg';
import React, { Suspense, useContext } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';
import GuardedRoute from './routes/routeGuard';
import { createBrowserHistory } from "history";
import AppRoutes from './routes/routeconfig';
import LoginContext, { LoginProvider } from './context/LoginContext';


 
function App() {


  

  return (
      <div>
        {/* <Router history={history}> */}
        
        
          
          <LoginProvider><AppRoutes /></LoginProvider>
      


        {/* <Routes>
          <Route path="/login" element={<LoginPage />} />
  
          <Route path="/" element={
            <GuardedRoute> 
              <HomePage />
            </GuardedRoute>
          } />
          <Route path="/about" element={
            <GuardedRoute>
              <AboutPage />
            </GuardedRoute>
          } />
          <Route path="/dashbaord" element={
            <GuardedRoute>
              <DashboardPage />
            </GuardedRoute>
            // <DashboardPage />  
          } />
  
        </Routes> */}
        {/* </Router> */}
      </div>
  
    );

}

export default App;
