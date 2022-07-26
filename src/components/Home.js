import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';

const Home = () => {
    const { user, setUser } = useContext(UserContext);
    return <div>
      <h2>HOME {user}</h2>
    </div>
};


export default Home;