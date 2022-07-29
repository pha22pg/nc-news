import React from 'react';

import { useContext} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import {Link} from "react-router-dom";

const ArticleCard = ({article, title}) => {
    const { user, setUser } = useContext(UserContext);
    
    return (
    <Link className="nav-item" to={`/articles/${article.article_id}`}> 
        
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
                <h3 className="article-child-container article-votes-container" > Votes: {article.votes} ID: {article.article_id}</h3>
            </div>
        </div>
    </div>
    </Link>
    )
};


export default ArticleCard;