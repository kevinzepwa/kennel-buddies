import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from "./pages/About";
import Pets from './pages/Pets'
import Favourites from './pages/Favourites'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instead


const App = () => {
    return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/booked' element={<Pets />} />
            <Route path='/doctors' element={<Favourites /> } />
            <Route path='/contact' element={<Contact /> } />
        </Routes>
        </div>
    )
}

export default App;
