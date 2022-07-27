import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import { useContext, useState, useEffect} from 'react';
import { UserContext } from '../App.js';
import {Link} from "react-router-dom";
import {getArticleByID} from '../api';

const Article = () => {
    const { user, setUser } = useContext(UserContext);
    const { article_slug } = useParams();
    console.log("article_slug: ", article_slug)

    const [article, setArticle ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getArticleByID(article_slug)
        .then((data)=>{
            console.log(data);
            setArticle(data)
            setLoading(false)
        })
    }, [article_slug])

    return (<div>

  
        {loading && <div> Loading...</div>}
        {!loading && 
        <>
        <div className="article-preview-container">

            <div className="article-img-holder"> 
                <h3 className={`article-child-container article-topic-container topic topic-${article.topic}`} >  {article.topic}</h3> 
            </div>
            <div className="article-holder">
                <h3 className="article-child-container article-title-container" > {article.title}</h3>
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

        <div className="full-article-page-grid">
            <div className="full-article-container">
                <div className="full-article-title-and-article_id-holder"> 
                    <div className="full-article-title-holder"> 
                        {article.title}
                    </div>
                    <div className="full-article-article_id-holder"> 
                        {article.article_id}
                    </div>
                </div>
                <div className="full-article-img-holder-outer"> 
                    <div className="full-article-img-holder-inner"> 
                    <h3 className={`full-article-topic-container topic topic-${article.topic}`} >  {article.topic}</h3> 
                        
                    </div>

                </div>
                <div className="full-article-body-holder"> 
                
                    <div className="full-article-body"> 
                        {article.body}
                    </div>
                </div>
                <div className="full-article-created_at-and-author-holder"> 
                    <div className="full-article-author-holder"> 
                        {article.author}
                    </div>
                    <div className="full-article-created_at-holder"> 
                        {article.created_at.split('T')[0]}
                    </div>
                </div>
            </div>
            

        </div>
        </>

        }
    </div>
    )
};


export default Article;