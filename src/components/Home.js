
import {Link} from "react-router-dom";
import React from "react";
import Parking from "./Parking";
import Header from "./Header";
const Home = () => {


    return (
        <div className="Home" >
            <Header />
            <Link to='/'>Главная</Link>
            {<h1 style={{ textAlign: 'center'}}>Парковки</h1>}
            <Parking />
        </div>
    )
}

export default Home