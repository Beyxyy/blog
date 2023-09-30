import React, { useEffect, useState } from 'react';

const Comment = ({content, user_name}) => {
    // const [comment, setComment] = useState([])

    // useEffect(()=>{
    //     axios.get(`https://dummyjson.com/users/${id_user}`)
    //     .then(res=>{
    //         setComment(res.data.users);
    //     })}
    // )
    return (
        <div className='border mx-5 ms-5 mb-5 p-3'>
            <div className='p-2 underline'>{user_name}</div>
            <p>{content}</p>
        </div>
    );
};

export default Comment;