import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//321e695b

const API_URL = 'https://omdbapi.com?apikey=321e695b'; 

const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => { 
        searchMovies('superman');
    },[])

    return(
        <div className="App">
            <h1 style={{ margin: 'auto' }}>Wonhee's Movie Searcher</h1>
            <div style={{ color: 'white', textAlign: 'center' }}> 만든이: 한원희</div>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                src={searchIcon}
                alt="search"
                onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
               
            {
                movies?.length > 0
                ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/> 
                    ) )}
                    </div>
                ) : (
                  <div className="empty">
                    <h2>검색 결과가 없습니다.</h2>
                  </div>
                )
            }


            
        </div>
    );
 }

export default App;