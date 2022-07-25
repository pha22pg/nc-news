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


