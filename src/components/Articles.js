import React from 'react';

import { useContext, useEffect,useState} from 'react';
import { UserContext } from '../App.js';

import {getArticleByID, getListOfArticles} from '../api';
import ArticleCard from './ArticleCard'

const Articles = ({allArticles, setAllArticles}) => {


    const [loading, setLoading] = useState(true)
    const { user, setUser } = useContext(UserContext);
    

    useEffect(() => {
        getListOfArticles()
        .then((data)=>{
            console.log(data)
            setAllArticles(data)
            setLoading(false);
        })
        getArticleByID(1)
        .then((data)=>{
            console.log(data);
        })
    }, [])



    return <div>
      <h2 className="page-header-container">Articles</h2>
        {loading && <div> Loading...</div>}
        <div className ="articles-holder">
        {!loading && 
        
            allArticles.map((article)=>{
                return (
                
                        <ArticleCard key={Math.random()} article={article} title={article.title}/>
                    
                )
            })
        }
        </div>
    </div>
};


export default Articles;