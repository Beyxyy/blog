import React from 'react';
import {Link} from 'react-router-dom';
import perdu from '../IMG/404.svg';

const NotFound = () => {
    return (
        <div>
            <h1>Je crois que vous vous etes perdu dans les Méandres</h1>
            <ins><Link className='m-4 fs-3 d-flex justify-content-center'to='/'>Retourner à la page d'accueil (Sortez-moi de là !!)</Link></ins>
            <img className ='perdu' src={perdu} alr='image de gens perdu'/>
        </div>
    );
};

export default NotFound;