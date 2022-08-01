import axios from 'axios'

const newsAPI = axios.create({
    baseURL: "https://nc-news-example-1.herokuapp.com/api/"
})


export function getListOfArticles(){
    return newsAPI.get(`articles`).then(({data})=>{
        
        return data.articles
    }) 
}


export function getArticleByID(id){
    return newsAPI.get(`articles/${id}`).then(({data})=>{
     
        return data.article;
    }) 
}


export function getArticlesByTopic(topic){
    return newsAPI.get(`articles?topic=${topic}`).then(({data})=>{
    
        return data;
    }) 
}

export function getUserByName(username){
    return newsAPI.get(`users/${username}`).then(({data})=>{
       // console.log("In the API / getUserByName function - data: ", data)
        return data.user;
    }) 
}

export function getAllUsersByName(usernameArray){
    return axios.all(usernameArray.map((username)=> newsAPI.get(`users/${username}`)))
        .then((data)=>{
           return data.map( userData => userData.data.user)
        })
}

export function incrementArticleVotesBy1(articleID){
    return newsAPI.patch(`articles/${articleID}`,{ inc_votes : 1 } ).then(({data})=>{
        console.log("In the API / incrementArticleVotesBy1 - data: ", data)
        return data;
    }) 
}
export function decrementArticleVotesBy1(articleID){
    return newsAPI.patch(`articles/${articleID}`,{ inc_votes : -1 } ).then(({data})=>{
        console.log("In the API / incrementArticleVotesBy1 - data: ", data)
        return data;
    })
}

export function getCommentsByArticleID(articleID){
    return newsAPI.get(`articles/${articleID}/comments`).then(({data})=>{
        // console.log("In the API / getUserByName function - data: ", data)
         return data;
     }) 
}

export function submitCommentWithUserIDAndText(article_id, username, text){
    return newsAPI.post(`articles/${article_id}/comments`, {
        body: text,
        username: username
      }).then(({data})=>{
        console.log("In the API / submitCommentWithUserIDAndText - responseData: ", data)
        return data;
    })
}


export function getArticlesByDate(order){
    // if(order===undefined){
    //     order="desc";
    // }
    return newsAPI.get(`articles?sort_by=created_at&&order${order}`).then(({data})=>{
        console.log("In the API / getArticlesByDate function - data: ", data)
        return data;
    }) 
}
export function getArticlesByVotes(order){
    // if(order===undefined){
    //     order="desc";
    // }
    return newsAPI.get(`articles?sort_by=votes&&order=${order}`).then(({data})=>{
        console.log("In the API / getArticlesByCommentVotes function - data: ", data)
        return data;
    }) 
}

export function getArticlesByCommentCount(order){
    // if(order===undefined){
    //     order="desc";
    // }
    return newsAPI.get(`articles?sort_by=comment_count&&order=${order}`).then(({data})=>{
        console.log("In the API / getArticlesByCommentCount function - data: ", data)
        return data;
    }) 
}