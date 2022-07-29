import axios from 'axios'

const newsAPI = axios.create({
    baseURL: "https://nc-news-example-1.herokuapp.com/api/"
})


export function getListOfArticles(){
    return newsAPI.get(`articles`).then(({data})=>{
        console.log("In the API / getArticles function - data: ", data)
        return data.articles
    }) 
}


export function getArticleByID(id){
    return newsAPI.get(`articles/${id}`).then(({data})=>{
        console.log("In the API / getArticleByID function - data: ", data)
        return data.article;
    }) 
}


export function getArticlesByTopic(topic){
    return newsAPI.get(`articles?topic=${topic}`).then(({data})=>{
       // console.log("In the API / getArticlesByTopic function - data: ", data)
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