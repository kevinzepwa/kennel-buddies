import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from "./pages/About";
import PetsUser from './pages/PetsUser'
import Favourite from './pages/Favourite'
import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instead
import AdminForm from "./pages/AdminForm";


function App() {
    const [ data, setData ] = useState([])
    const [ favourite, setFavourite ] = useState([])
    const url_1 = "http://localhost:9299/api/pets"
    // const url_2 = "http://localhost:9299/api/fav"

    useEffect(() => {
        fetch(url_1)
        .then(res => res.json()) 
        .then(newData => setData(newData.slice(1, 9)))
    }, []);

    useEffect(() => {
        fetch(url_1)
        .then(res => res.json())
        .then(newFavourite => setFavourite(newFavourite))
    }, []);

    console.log(data)

    return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pets' element={<PetsUser 
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
            <Route path='/admin' element={<AdminForm 
                                            data={data}
                                            setData={setData}
                                            />} />
        </Routes>
        </div>
    )
}

export default App;

