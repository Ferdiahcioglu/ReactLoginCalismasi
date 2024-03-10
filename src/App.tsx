import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';

const App = () => {
  const myVarible = 'Login Çalışması ders 1';
  return (
    <>
      <div>{myVarible}</div> 
      
       <div> 
        <LoginPage/> 
       </div> 

    </>
  );
};

export default App;
