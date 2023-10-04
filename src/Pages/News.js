import React, {useState, useEffect} from 'react';
import url from '../IMG/perdu.jpg';
import Header from '../Components/Header';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import CardPost from '../Components/CardPost';
import { Link } from 'react-router-dom';



const News = () => {
        const [news, setNews]= useState([]);
        const [isLoading, setisLoading] = useState(true);
    
        useEffect(() =>{
            axios.get('https://dummyjson.com/posts')
            .then(res => {
                
                setNews(res.data.posts);
                setisLoading(false);
                console.log(res.data.posts);
            })
            .then(console.log());
        }, [])
    return (
        <div>
            <Header description='Mettez vous à jour avec nos actualités' title='News' url={url}/>
            {isLoading ? (
                <div>
                    <div className='d-flex justify-content-center'>
                <Spinner 
                className="m-5"
                color="primary"
                style={{
                    height: '3rem',
                    width: '3rem',
                    display : 'flex',
                    justifyContent :'center',
                    alignItems:'center',
                  }}
                ></Spinner>
                </div>
            </div>
            ) : (
                <>
                <div className='grid-3 justify-content-center container mt-5'>
                {news.map((elt)=>(
                   
                    <div>
                        <Link to={`/news/${elt.id}`}>
                            <CardPost key={elt.id} description={elt.body} title={elt.title} author={elt.user} tags={elt.tags} />
                        </Link>                        
                    </div>
                ))}
                </div>
                </>
            )}
        </div>

        
    );
};

export default News;