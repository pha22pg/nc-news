import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';

const ArticleCard = ({article, title}) => {
    const { user, setUser } = useContext(UserContext);
    
    return (
      <div className="article-preview-container">

        <div className="article-img-holder"> 
            <h3 className={`article-child-container article-topic-container topic topic-${article.topic}`} >  {article.topic}</h3> 
        </div>
        <div className="article-holder">
            <h3 className="article-child-container article-title-container" > {title}</h3>
            <div className="author-and-created_at-holder">
                <h3 className="article-child-container article-author-container" > By: {article.author } </h3>
                <h3 className="article-child-container article-created_at-container" > on {article.created_at.split('T')[0]}</h3>
            </div>
            <div className="comment-and-votes-holder">
                <h3 className="article-child-container article-comment_count-container" > Comments: {article.comment_count} </h3>
                <h3 className="article-child-container article-votes-container" > Votes: {article.votes}</h3>
            </div>
        </div>
    </div>
    )
};


export default ArticleCard;