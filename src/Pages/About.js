import React from 'react';
import Header from '../Components/Header';
import url from '../IMG/Connaitre_chat.jpg'
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Header title='About' description='Page About, quel beau Header' url={url}/>


            <p>Découvrez nos informations et apprenez à nous connaitre, prenez quelque secondes pour ouvrir nos tabs</p>
            <div className='tabs'>
                <h3>Nous connaitre</h3>

                <ul class="nav nav-underline">
                    <li class="nav-item">
                    <Link to='nos-missions'>Nos missions</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='nos-valeurs'>Nos valeurs</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='nos-chiffres'>Nos chiffres</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    );
};

export default About;