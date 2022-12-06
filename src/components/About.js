import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

const About = () => {
    return (
        <div>
            <Header />
            <div><Link to='/'>Главная</Link> / <Link to="/about">О сервисе</Link>
                <p></p></div>
            <h2>О сервисе</h2>
            <p></p>
            <div><p>Инфо о сервисе</p>
                <p>Еще инфо о сервисе</p></div>
        </div>
    )
}


export default About