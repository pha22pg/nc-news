import React from 'react';

import { useState, useContext, useEffect} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import {getArticlesByDate, getArticlesByVotes, getArticlesByCommentCount} from '../api';

const ArticleFilter = ({allArticles, setAllArticles}) => {

    const [ searchOrderState, setSearchOrderState ] = useState(["desc"])
    const [ searchByState, setSearchByState ] = useState(["date"])

    const searchByClickHandler = (e) => {
        switch(e.target.value){            
            case "date":
               setSearchByState("date")
            
               getArticlesByDate(searchOrderState).then((data)=>{
                console.log(data.articles)
                setAllArticles(data.articles)
            });
                break;
            case "votes":  
                setSearchByState("votes")
                getArticlesByVotes(searchOrderState).then((data)=>{
                    console.log(data.articles)
                    setAllArticles(data.articles)
                });
                break;
            case "comment_count":    
                setSearchByState("comment_count")
                getArticlesByCommentCount(searchOrderState).then((data)=>{
                    console.log(data.articles)
                    setAllArticles(data.articles)
                });
            
            break;
        }
    }

    const orderClickHandler = (e) => {
        //switch(e.target.value){
        switch(e.target.value){
            case "descending":
                if(searchByState==="date"){
                    getArticlesByDate("desc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                }
                if(searchByState==="votes"){
                    getArticlesByVotes("desc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                }
                if(searchByState==="comment_count"){
                    getArticlesByCommentCount("desc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                }
                setSearchOrderState(["desc"])
                console.log("searchOrderState changed to", e.target.value)
                break;
            case "ascending": 
                if(searchByState==="date"){
                    getArticlesByDate("asc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                    
                }
                if(searchByState==="votes"){
                    getArticlesByVotes("asc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                }
                if(searchByState==="comment_count"){
                    getArticlesByCommentCount("asc").then((data)=>{
                        console.log(data.articles)
                        setAllArticles(data.articles)
                    });
                }
                console.log("searchOrderState changed to", e.target.value)
                setSearchOrderState(["asc"])
                break;
            
            }
    }

   
    

  return (<>
  
  <label for="sort">Sort by:</label>
  <select onChange={searchByClickHandler} name="sort" id="sort">
    <option  value="date">Date</option>
    <option value="comment_count"> Comments</option>
    <option value="votes">Votes</option>
  </select>
  <label for="sort">Order by:</label>
  <select onChange={orderClickHandler} name="sort" id="sort">
    <option  value="descending">Descending</option>
    <option value="ascending"> Ascending</option>
  </select>
  
</>
  )
};


export default ArticleFilter;