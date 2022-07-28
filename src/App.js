import './App.css';
import Nav  from './components/Nav';
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Home from './components/Home';
import Topics from './components/Topics';
import Articles  from './components/Articles';
import Users  from './components/Users';
import User  from './components/User';
import Article  from './components/Article';
import UserCard from './components/UserCard';
import { getUserByName } from './api.js';

//import { createContext } from 'react';
import {UserContext} from './components/UserContext';
//export const UserContext = createContext();


function App() {
  const [user, setUser] = useState( [] );

  const [loading, setLoading] = useState(true);
  const [allArticles, setAllArticles] = useState( [] ) 

  useEffect(()=>{
    getUserByName("happyamy2016")
    .then((data)=>{
        console.log(data);
        setUser(data)
        setLoading(false)
    })
}, [])

  return  (
  <BrowserRouter>
  <UserContext.Provider value={{user, setUser}}>
    {console.log("user: ", user)}
    <div className="App">
      <Nav/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic_slug" element={<Topics/>} />
        <Route path="/articles" element={<Articles allArticles={allArticles} setAllArticles={setAllArticles} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username_slug" element={<User />} />

        <Route path="/articles/:article_slug" element={<Article />} />
        
      </Routes>
    </div>
    </UserContext.Provider>
  </BrowserRouter>
  )
  
}

export default App;
