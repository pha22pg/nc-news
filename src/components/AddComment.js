import React from 'react';
import {useState, useEffect} from 'react';

const AddComment = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="comment-card">  
                        <div className="comment-card-second-column">
                            <div className="comment-card-img"> </div>
                        </div>
                        <div className="comment-card-second-column">
                            <div className="comment-card-author-and-created_at-holder">
                                <div className="comment-card-author"> {comment.author} </div>   
                                <div className="comment-card-created_at"> {comment.created_at.split('T')[0]}</div>
                            </div>
                            <div className="comment-card-body"> {comment.body} </div>
                            <div className="comment-card-votes-and-comment_id-holder">
                                <div className="comment-card-votes"> Votes: {comment.votes} </div>
                                <div className="comment-card-comment_id"> # {comment.comment_id} </div>
                            </div>
                        </div>
                    </div>
    )
}

export default AddComment;