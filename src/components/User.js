import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import { getUserByName } from '../api.js';

const User = () => {
    const { username_slug } = useParams();
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const msg = useContext(UserContext);
    console.log("MSG: ", msg);

    useEffect(()=>{
        getUserByName(username_slug)
        .then((data)=>{
            console.log(data);
            setUser(data)
            setLoading(false)
        })
    }, [username_slug])

    const clickHandler = () => {
        console.log("Current User set to: ", user);
        setUser(user)
    }

    return <div>
     {loading && <div> Loading...</div>}
    {!loading && 
    <div className="user-container">
        
      <div onClick={clickHandler} className="user-profile-container">
        <div className="user-profile-avatar-holder">
            <img className="user-profile-avatar" src={`${user.avatar_url}`}></img>
        </div>
        <div className="user-profile-name">{user.name}  </div>
        <div className="user-profile-username">{username_slug} </div>
     </div>
    </div>
        }
    </div>
};


export default User ;