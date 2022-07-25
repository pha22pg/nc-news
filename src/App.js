import './App.css';
import Nav  from './components/Nav';
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Topics from './components/Topics';
import Articles  from './components/Articles';
import Users  from './components/Users';


import { createContext } from 'react';
export const UserContext = createContext();


function App() {
  const [user, setUser] = useState( [] );

  const [loading, setLoading] = useState(true);
  const [allArticles, setAllArticles] = useState( [] ) 

  return  (
  <BrowserRouter>
  <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <Nav/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles allArticles={allArticles} setAllArticles={setAllArticles} />} />
        <Route path="/users" element={<Users />} />
        
      </Routes>
    </div>
    </UserContext.Provider>
  </BrowserRouter>
  )
  
}

export default App;
