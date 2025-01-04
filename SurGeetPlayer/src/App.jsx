import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  
  const { status, userData } = useSelector((state) => state.auth);

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {status ? (
            <div>Welcome, {userData.name}</div>  
          ) : (
            <div>Please log in to continue</div> 
          )}
        
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
