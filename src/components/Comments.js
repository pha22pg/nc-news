import React from 'react';
import {useState, useEffect} from 'react';
import {getCommentsByArticleID} from '../api'
import AddComment from './AddComment';

const Comments = ({comment_count, article_id}) => {
    const [comments, setComments]   = useState([])
    const [loading, setLoading]     = useState(true)

    useEffect(()=>{
        getCommentsByArticleID(article_id)
        .then((data)=>{
            setLoading(false)
            console.log(data.comments)
            setComments(data.comments)
        })
    }, [])

    return (<>
        {loading && <div> Loading... </div> }
        <div className="comment-count-holder">Comments: {comment_count}</div> 
        <AddComment/>
        <div className="comment-card-holder">
            {!loading && <div> 
                
                {comments.map((comment)=>{
                    return(<>
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
                        </>
                    )
                })}

            </div> }
        </div> 

    </>)
}

export default Comments;