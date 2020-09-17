import React from 'react';
import PropTypt from 'prop-types';

function Post({id, title, deletePost}) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={() => deletePost(id)}>X</button>
           <div className="Post__title">{title}</div>
           <img alt="" className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )

}

Post.propType = {
    id: PropTypt.number.isRequired,
    title: PropTypt.string.isRequired,
    deletePost: PropTypt.func.isRequired
}

export default Post;