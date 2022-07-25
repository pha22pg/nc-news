import React from 'react';

import { useContext} from 'react';
import { UserContext } from '../App.js';

const ArticleCard = ({article, title}) => {
    const { user, setUser } = useContext(UserContext);
    return (
      <div className="article-preview-container">
        <h3 className="article-topic-container" > {article.topic}</h3>
        <h3 className="article-topic-container" > {article.author}</h3>
        <h3 className="article-topic-container" >{title}</h3>
    </div>
    )
};


export default ArticleCard;