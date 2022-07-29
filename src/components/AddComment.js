import React from 'react';
import {useState, useEffect, useContext} from 'react';
import { submitCommentWithUserIDAndText } from '../api';
import UserCard from './UserCard';
import {UserContext} from './UserContext';

const AddComment = ({article_id, setLoading, loading}) => {
    const { user, setUser } = useContext(UserContext);
    const [input, setInput] = useState("Add a comment...");
    const [comment, setComment] = useState(null);
    const [posting, setPosting] = useState(false);

    const textInputHandler = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = () => {
        setComment(input);
        submitCommentWithUserIDAndText(article_id, user.username, input)
            .then((data)=>{
                console.log(data);
                setPosting(false);
            })
            .catch((err)=>{
                console.log("sorry couldn't post");
                setPosting(false);
            })
        setLoading(true)
        setPosting(true);
    }

    return (<>
        {posting && <div> Posting comment...</div>}
        {!posting &&
        <div className="add-comment-card">  
                        <div className="addc-omment-card-second-column">
                            <div className="addc-omment-card-img"> 
                            {/*******IMAGE COMPONENT****** */}
                            <div className="nav-item user-icon-holder" to="/users/user"> 
                                <div className="user-icon-mini">
                                <img className="user-profile-avatar-mini" src={`${user.avatar_url}`}></img>
                                </div>
                            </div>
                            {/************* */}
                            </div>
                        </div>
                        <div className="add-comment-card-second-column">
                            <div className="add-comment-card-author-and-created_at-holder">
                                <div className="addc-omment-card-author"> {user.username} </div>   
                                {/* <div className="comment-card-created_at"> {}</div> */}
                            </div>
                            <div className="add-comment-card-body-holder"> 
                                {/* <label htmlFor="input-body">{"Add a comment..."}</label> */}
                                <input onChange={textInputHandler} value= {input} type="text" id="input-body" for="input-body" className="add-comment-card-body"></input>
                            </div>
                            
                            <div className="add-comment-card-submit-button-holder">    
                                <div onClick={submitHandler} className="add-comment-card-submit-button"> SUBMIT </div>
                                {/* <div className="comment-card-comment_id"> # {comment.comment_id} </div> */}
                            </div>
                        </div>
                    </div>
                }
    </>)
}

export default AddComment;