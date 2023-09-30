import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Rooter, Routes, Route, Router } from 'react-router-dom';
import Faq from './Pages/FAQ';
import About from './Pages/About';
import News from './Pages/News';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Missions from './Components/Missions';
import Valeurs from './Components/Valeurs';
import Chiffres from './Components/Chiffres';
import NewsDetails from './Pages/NewsDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Rooter>
      <Nav/>
      <Routes>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/about' element={<About/>}>
          <Route path='nos-missions' element={<Missions/>}/>
          <Route path='nos-chiffres' element={<Valeurs/>}/>
          <Route path='nos-valeurs' element={<Chiffres/>}/>
        </Route>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/news/:slug' element={<NewsDetails/>}></Route> 
        <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </Rooter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
