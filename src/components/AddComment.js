import React from 'react';
import {useState, useEffect} from 'react';
import UserCard from './UserCard';

const AddComment = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="add-comment-card">  
                        <div className="addc-omment-card-second-column">
                            <div className="addc-omment-card-img"> </div>
                        </div>
                        <div className="add-comment-card-second-column">
                            <div className="add-comment-card-author-and-created_at-holder">
                                <div className="addc-omment-card-author"> {user} </div>   
                                {/* <div className="comment-card-created_at"> {}</div> */}
                            </div>
                            <div className="add-comment-card-body"> {"Add a comment..."} </div>
                            <div className="add-comment-card-submit-holder">
                                <div className="add-comment-card-submit-button"> Votes: {comment.votes} </div>
                                {/* <div className="comment-card-comment_id"> # {comment.comment_id} </div> */}
                            </div>
                        </div>
                    </div>
    )
}

export default AddComment;