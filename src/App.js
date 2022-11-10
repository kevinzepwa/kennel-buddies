import React, { useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from "./pages/About";
import Pets from './pages/Pets'
import Favourite from './pages/Favourite'
import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instead


function App() {

    // const imgPlaceholder = require("./assets/images/splash.png");
    // const imgPlaceholder = "./assets/images/splash.png"
    
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/220px-Felis_silvestris_catus_lying_on_rice_straw.jpg"
    
    const data = [
        {
            id: 1,
            name: "Damian",
            owner: "Luka",
            location: "Nairobi",
            img: img
        },
        {
            id: 2,
            name: "Felisita",
            owner: "Mark",
            location: "Kijabe",
            img: img
            }
        ]

        // const [ data, setData ] = useState([])
        const [ favourite, setFavourite ] = useState([])


    return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pets' element={<Pets 
                                            data={data}
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
