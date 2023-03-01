import { useEffect, useState } from "react";
import "./SearchBar.css";
import config from "../constant.js";
import axios from 'axios';
import List from "./List.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesRoutes from "./RecipeRoutes";

const SearchBar = function () {
    const apiUrl = config.url.API_URL +"recipes/search?whatToSearch="
    const [SearchTerm, setSearchTerm] = useState("")
    
       
    const [SearchRecipes, setRecipes] = useState([])

    useEffect(() => {
        if (SearchTerm !== "") {
            async function getResults() {

                await axios.get(apiUrl + SearchTerm).then((res) => setRecipes(res.data));

            }
            getResults()
        }
           
    },[SearchTerm]) 
    function LinkHandler(search) {
        setSearchTerm(search)
    }

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={(event) => setSearchTerm(event.target.value) } />
                    <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                
            </div>
            <Router>
            <List Recipes={SearchRecipes} LinkHandler={LinkHandler} />
            <RecipesRoutes Recipes={SearchRecipes} />
          
        </Router>
        </div>
    );
}
export default SearchBar;