import React from 'react';
import Header from '../Components/Header';
import hello from '../IMG/hello.jpg';


const Home = () => {

    
    return (
        <div>
            <Header description='Bienvenue sur un site qui va etre un éloge à la beauté de nos félins préférés' title='Welcome' url={hello}/>
            <p>Je ne suis pas spécialement fan de chat mais je trouve malgré tout que cet animal à un charisme indéniable.</p>
            <h2>Comment choisir son chat</h2>
            <p>Elit sit fugiat esse duis sunt fugiat enim id. Pariatur et mollit ex eiusmod commodo laboris reprehenderit ullamco esse quis velit ullamco consequat. Pariatur sint dolore eiusmod culpa velit aliquip dolor laborum.</p>
           
        </div>
    );
};

export default Home;