import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import { getUserByName } from '../api.js';

const UserCard = ({userProp}) => {
//    console.log(userProp)
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    // const msg = useContext(UserContext);
    // console.log("MSG: ", msg);

    useEffect(()=>{
        getUserByName(userProp.username)
        .then((data)=>{
            console.log(data);
            // setUser(data)
            setLoading(false)
        })
    }, [])

    const clickHandler = () => {
        console.log("Current User set to: ", user);
        setUser(userProp)
    }

    return <div>
     {loading && <div> Loading...</div>}
    {!loading && 
    <div className="user-container">
        
      <div onClick={clickHandler} className="user-profile-container">
        <div className="user-profile-avatar-holder">
            <img className="user-profile-avatar" src={`${userProp.avatar_url}`}></img>
        </div>
        <div className="user-profile-name">{userProp.name}  </div>
        <div className="user-profile-username">{userProp.username} </div>
     </div>
    </div>
        }
    </div>
};


export default UserCard ;