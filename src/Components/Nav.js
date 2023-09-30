import React from 'react';
import {Link} from 'react-router-dom';
import chat from '../IMG/Connaitre_chat.jpg';

const Nav = () => {
    return (
        <div>
            <div className='menu bg-menu'>
            <img src={chat} className='d-flex justify-content-center ' alt='image de chat mignon'/>
            <ul className='gap-4 d-flex justify-content-center'>
                <li className=''><Link to='/'>Accueil</Link></li>
                <li className=''><Link to='/about'>About</Link></li>
                <li className=''><Link to='/news'>Dernieres Nouvelles</Link></li>
                <li className=''><Link to='/faq'>Faq</Link></li>
                <li className=''><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default Nav;