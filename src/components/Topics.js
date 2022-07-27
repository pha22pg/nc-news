import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';

import {getArticlesByTopic} from '../api';
import ArticleCard from './ArticleCard'

const Topics = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [filteredArticles, setFilteredArticles] = useState( [] ) ;
    const { topic_slug } = useParams();
    console.log("topic_slug: ", topic_slug)
    
    useEffect(() => {
        getArticlesByTopic(topic_slug)
        .then((data)=>{
            console.log(data)
            setFilteredArticles(data.articles)
            setLoading(false);
            console.log(filteredArticles);
        })
    }, [topic_slug])

    return   <div>
    <h2 className="page-header-container">{topic_slug} </h2>
      {loading && <div> Loading...</div>}
      <div className ="articles-holder">
      {!loading && 
        
          filteredArticles.map((article)=>{
              return (
                      <ArticleCard key={Math.random()} article={article} title={article.title}/>
              )
          })
      }
      </div>
  </div>
};


export default Topics;