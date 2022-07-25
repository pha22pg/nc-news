import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';

const Topics = () => {
    const { user, setUser } = useContext(UserContext);
    return <div>
      <h2>Topics {user}</h2>
    </div>
};


export default Topics;