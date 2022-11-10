import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from "./pages/About";
import Pets from './pages/Pets'
import Favourites from './pages/Favourites'
import Admin from './pages/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instead


function App() {
    const [ data, setData ] = useState([])
    const [ favourite, setFavourite ] = useState([])
    const url_1 = "https://better-abalone-text.glitch.me/data"
    const url_2 = "https://better-abalone-text.glitch.me/booked"

    useEffect(() => {
        fetch(url_1)
        .then(res => res.json()) 
        .then(newData => setData(newData))
    }, []);

    useEffect(() => {
        fetch(url_2)
        .then(res => res.json())
        .then(newFavourite => setFavourite(newFavourite))
    }, []);

    return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pets' element={<Pets 
                                            data={data} 
                                            setData={setData}
                                            favourite={favourite}
                                            setFavourite={setFavourite}
                                            />} />
            <Route path='/favourite' element={<Favourite 
                                            data={data}
                                            favourite={favourite}
                                            setFavourite={setFavourite}
                                            />} />
        </Routes>
        </div>
    )
}

export default App;
