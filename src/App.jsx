import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AddCourse from './component/AddCourse';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
    <Navbar/>
     <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addCourse' element={<AddCourse />} />

    </Routes>
          
        <Footer/>
    </>
  )
}

export default App
