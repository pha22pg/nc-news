import React from 'react';

import { useContext, useEffect, useState} from 'react';
// import { UserContext } from '../App.js';
import { UserContext } from './UserContext.js';
import {getUserByName} from '../api.js';
import {getAllUsersByName} from '../api.js';
import User from './User.js'
import UserCard from './UserCard.js'

const Users = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const allUsernames = ['jessjelly', 'grumpy19', 
    "cooljmessy", "happyamy2016" ,'tickle122', "weegembump"];
    

    useEffect(()=>{

        getAllUsersByName(allUsernames)
        .then((data)=>{
            console.log(data);
            setLoading(false)
            setUsers(data);
        })
    }, [])

        console.log("current user: ", user)

    return <div>
    {loading && <div> Loading...</div>}
   {!loading && 

users.map((user)=>{
            return (<>
                <UserCard userProp={user}/>
        {/* <div className="user-container">
            
            <div  className="user-profile-container">
            <div className="user-profile-avatar-holder">
                <img className="user-profile-avatar" src={`${user.avatar_url}`}></img>
            </div>
            <div className="user-profile-name">{user.name}  </div>
            <div className="user-profile-username">{} </div>
            </div>
        </div> */}
        </>
    )})



       }
   </div>
};


export default Users;