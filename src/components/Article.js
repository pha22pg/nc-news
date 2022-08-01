import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import { useContext, useState, useEffect} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import {Link} from "react-router-dom";
import {getArticleByID} from '../api';
import {incrementArticleVotesBy1, decrementArticleVotesBy1} from '../api';
import Comments from './Comments';
import ArticleFilter from './ArticleFilter';

const Article = () => {
    const { user, setUser } = useContext(UserContext);
    const { article_slug } = useParams();
    console.log("article_slug: ", article_slug)

    const [article, setArticle ] = useState([]);
    const [loading, setLoading] = useState(true);

    const [votes, setVotes] = useState(0);
    const [upVoted, setUpVoted] = useState(false)
    const [downVoted, setDownVoted] = useState(false)
    const [voted, setVoted] = useState(false);
    

    useEffect(()=>{
        getArticleByID(article_slug)
        .then((data)=>{
            console.log(data);
            setArticle(data)
            setLoading(false)
            
        })
    }, [article_slug])

    const incrementVotes = () => {
       
            setVotes((currentVote)=>{
                
                return currentVote + 1;
            })
            incrementArticleVotesBy1(article.article_id)
                .catch((err)=>{
                    console.log("Erm, something went wrong");
                    setUpVoted(false);
                    setVoted(false);
                    setDownVoted(true);
                });
            setUpVoted(true);
            setVoted(true);
            setDownVoted(false);
        
    }
    const decrementVotes = () => {
    
            setVotes((currentVote)=>{
              
                return currentVote - 1;
            })
            decrementArticleVotesBy1(article.article_id)
                .catch((err)=>{
                    console.log("Erm, something went wrong");
                    setDownVoted(false);
                    setVoted(false);
                    setUpVoted(true);
                });
            setDownVoted(true);
            setVoted(true);
            setUpVoted(false);
        

        
    }

    return (<div>

        
        {loading && <div> Loading...</div>}
        {!loading && 
        <>
        
        <div className="article-dropdown-sort-menu-holder"> 
            <div className="article-dropdown-sort-menu"> </div>
        </div>
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
                    <h3 className="article-child-container article-votes-container" > Votes: {article.votes + votes} ID: {article.article_id}</h3>
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
                
                    <p className="full-article-body"> 
                        {article.body}
                    </p>
                </div>
                <div className="full-article-created_at-and-author-holder"> 
                    <div className="full-article-author-holder"> 
                        {article.author}
                    </div>
                    <div className="full-article-created_at-holder"> 
                        {article.created_at.split('T')[0]}
                    </div>
                </div>
                <div className="full-article-votes-container">
                    <div className="full-article-vote-count-container"> Votes: {article.votes + votes}</div>
                    <div onClick={incrementVotes} className={`full-article-up-votes-container ${upVoted === true ? "selected" : null}`}></div>
                    <div onClick={decrementVotes} className={`full-article-down-votes-container  ${downVoted === true ? "selected" : null}`}></div>
                </div>
            </div>
       
        <Comments comment_count={article.comment_count} article_id={article.article_id}/>

        </div>
        </>

        }
    </div>
    )
};


export default Article;