import React from 'react';
import url from '../IMG/DSC_0799.jpg';
import Header from '../Components/Header';


const Contact = () => {


    const handleContact=(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <Header description='hésitez pas à nous contacter pour résoudre vos problème' title='Contactez-Nous' url={url}/>
            <p>contact</p>

            <form className='form-control' onSubmit={handleContact}>
                <input className='' type='text' name='message' placeholder='saississez votre message'/>
                <input type='email' placeholder='saississez votre email'/>
                <input type='submit' value='Envoyer'/>

            </form>
        </div>
    );
};

export default Contact;