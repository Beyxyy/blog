import React, { useEffect, useState } from 'react';
import { redirect } from "react-router-dom";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Comment from '../Components/Comment';
import LoginPage from '../Components/Login';
import jwtDecode from 'jwt-decode';

const NewsDetails = () => {
    const id = useParams(); 
    const [isLoading, setisLoading] = useState(true);
    const [isLoadingComments, setisLoadingComments] = useState(true);
    const [PostUnique, setPostUnique] = useState([]);
    const [log, setLog] = useState(localStorage.getItem('token') || false )
    const [Storage, setStorage] = useState(JSON.parse(localStorage.getItem('comment')) || []);
    const[Comments, setComments]=useState([]);
        useEffect(() =>{
            axios.get(`https://dummyjson.com/posts/${id.slug}`)
            .then(res => {
                setPostUnique(res.data);
                setisLoading(false);
            })
        }, [])
        
        useEffect(()=> {
            axios.get(`https://dummyjson.com/posts/${id.slug}/comments`)
            .then (res =>{
                console.log(res.data.comments);
                setComments(res.data.comments);
                setisLoadingComments(false);
                console.log(Comments);
            })
        }, [id.slug]);


        const onSubmit= (e)=>{
            if(localStorage.getItem('token')){
                e.preventDefault();
                let content = document.querySelector('input').value;
                const storedComments = JSON.parse(localStorage.getItem('comment')) || [];
                const user = jwtDecode(localStorage.getItem('token'))
                // Ajoute le nouveau commentaire au tableau existant
                storedComments.push({'content' : content, 'id' : `${id.slug}`, 'user_name' : `${user.username}`});

                // // Enregistre le tableau de commentaires mis à jour dans le localStorage
                localStorage.setItem('comment', JSON.stringify(storedComments));
                // setStorage(localStorage.setItem('comment', JSON.stringify(storedComments)));
            }
            
        }
// console.log(Storage);
    return (
        
    <div className='mt-3 container'>
        <h2>{PostUnique.title}</h2>
        {/* <h3>Content</h3> */}
        <p>{PostUnique.body}</p>
        <div>
        <h3>Espace commentaires : </h3>

        {Storage.filter(stored_comment => stored_comment.id === id.slug).map((stored_comment, index) => (
            <div key={index}>
                {/* Affiche le contenu du commentaire */}
                <Comment user_name={stored_comment.user_name} content={stored_comment.content} />
            </div>
        ))}
    {Comments.map((comment, index)=>(
        <>
            
            <Comment key={index} user_name={comment.user.username} content={comment.body}></Comment>
        </>
    ))}
       
        {log ? (
                        
            <section className='comment_section container d-flex border-top border-primary mb-5'>
                <form className='col-7 mx-auto mt-3' method='GET'>
                    <div className="form-floating mb-3 d-flex mx-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Donnez votre avis !"/>
                        <label>Donnez votre avis !</label>
                    </div>

                    <button className="d-flex mx-auto btn btn-primary" type="submit" onClick={onSubmit}>Validez mon commentaire</button>
                </form>
            </section>
        
        ) : (
        <LoginPage/>
    )}
        </div>
        </div>
     
    );
};

export default NewsDetails;