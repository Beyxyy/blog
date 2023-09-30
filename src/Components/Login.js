import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
    // États pour stocker les données du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Loged, setLoged] = useState(false)

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword(document.querySelector('#password').value);
        setEmail(document.querySelector('#email').value)}
        axios.post('https://dummyjson.com/auth/login', {
            email,
            password
        })
        .then(response => {
            // Si l'authentification réussit, stockez les informations d'authentification dans le localStorage
            localStorage.setItem('token', response.data.token);
            // Redirigez l'utilisateur vers la page de commentaire (ou autre page protégée)
            window.location.reload(); // Rafraîchissez la page pour re-render le composant CommentForm
        })
        .catch(error => {
            // Gérez les erreurs d'authentification ici
            console.error("Erreur d'authentification :", error);
        });

    

    return (
        <div className="login-page">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Identifiant :</label>
                    <input
                        type="text"
                        id="email"
                        name="email"

                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginPage;