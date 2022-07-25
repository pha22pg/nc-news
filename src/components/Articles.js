import React from 'react';

import { useContext, useEffect,useState} from 'react';
import { UserContext } from '../App.js';

import {getListOfArticles} from '../api';
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
    }, [])



    return <div>
      <h2>Articles</h2>
        {loading && <div> Loading...</div>}
        {!loading && 
        
        allArticles.map((article)=>{
            return (
                <ArticleCard key={Math.random()} article={article} title={article.title}/>
            )
        })
        
        }
    </div>
};


export default Articles;