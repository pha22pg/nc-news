import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';

const Users = () => {
    const { user, setUser } = useContext(UserContext);
    return <div>
      <h2>Users {user}</h2>
    </div>
};


export default Users;