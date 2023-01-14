import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  let searchdata="cricket"
  let [articles,setArticles]=useState([])

  function readvalue(value){
    searchdata=value;

  }
  useEffect(()=>{
    getNews();

  },[]);
  function getNews(){
    fetch(`https://newsapi.org/v2/everything?q=${searchdata}&apikey=8b5f034629114cd69a5a4765d8398d51`)
    .then((response)=>
    response.json())
    .then((news)=>{
      setArticles(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="App">
      <div className="search">
        <input placeholder="search News" className="search-input"
        onChange={(event)=>readvalue(event.target.value)}/>
          <button className="search-btn" onClick={getNews}>Search</button>
        
      </div>
      <div className="articles">
        {
          
          articles.map((articles,index)=>{
            return(
              <div key={index} className="article">
                <img className="news-img" src={articles.urlToImage}/>
                <div className="news-details">
                  <h3>{articles.title}</h3>
                  <h4>{articles.Author}</h4>
                  <h3>{articles.publishedAt}</h3>
                  <a href={articles.url} target="_blank">
                    <button className="btn">ReadMore</button>
 </a>

                </div>
              </div>
            )
          })
        }

      </div>
      </div>
  )
}

export default App;
