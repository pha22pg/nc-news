import React from 'react';
import {useState, useEffect} from 'react';
import {getCommentsByArticleID, getAllUsersByName} from '../api'
import AddComment from './AddComment';

const Comments = ({comment_count, article_id}) => {
    const [comments, setComments]   = useState([])
    const [loading, setLoading]     = useState(true);
    const [users, setUsers] = useState([]);

    const allUsernames = ['jessjelly', 'grumpy19', 
    "cooljmessy", "happyamy2016" ,'tickle122', "weegembump"];
    

    useEffect(()=>{
        getAllUsersByName(allUsernames)
        .then((data)=>{
            console.log(data);
            
            setUsers(data);
            setLoading(false)
        })
        
    }, [])
    useEffect(()=>{
        getCommentsByArticleID(article_id)
        .then((data)=>{
            setLoading(false)
            console.log(data.comments)
            setComments(data.comments)
        })
        
    }, [loading])

    


    const getURLFromUsername = (name) =>{
        console.log(users)
         let user_ = users.filter(userM => {
             console.log(userM)
           return userM.username === name
                
        });
        console.log(user_[0].avatar_url)
        // console.log(user_[0].avatar_url)
        return user_[0].avatar_url;
    }
    

    return (<>
        
        <div className="comment-count-holder">Comments: {comments.length}</div> 
        <AddComment loading={loading} setLoading={setLoading} article_id={article_id}/>
        {loading && <div> Loading... </div> }
        <div className="comment-card-holder">
            {!loading && <div> 
                
                {comments.map((comment)=>{
                    return(<>
                    <div className="comment-card">  
                        <div className="comment-card-second-column">
                            <div className="comment-card-img-holder"> 
                            
                            {/* {`${getURLFromUsername(comment.author)}`} */}
                                <img className="user-profile-avatar-mini" src={`${getURLFromUsername(comment.author)}`}/>
                            </div>
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