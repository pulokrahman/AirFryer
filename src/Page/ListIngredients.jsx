import config from "../constant";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ListIngredients.css";
function ListIngredients(props) {

    const apiUrl = config.url.API_URL +"ingredients"

    const [Ingredients, setIngredients] = useState([])
  

    useEffect(() => {
       
            async function getResults() {

                await axios.get(apiUrl,{ params: { productid: props.id } } ).then((res) => setIngredients(res.data));

            }
            getResults()
        
           
    },[props]) 

   
    
    


    const list = Ingredients.map((ingredient) => {
        return (<li className="list-group-item" key={ingredient.id.toString()} >
            {ingredient.ingredients}
        </li>)
    });
    return (
        <ul className="list-group list-group-horizontal right">
            {list}
        </ul>
        )

}
export default ListIngredients