import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './list.css';
function List(props) {
    const [GoToLink, changeLink] = useState(false)
    const [Recipe,changeRecipe]=useState("")
    useEffect ( () => 
 {
if (GoToLink==true) {
    props.LinkHandler(Recipe)
    changeLink(false)
}

 }

 ,[GoToLink,Recipe])

    const listItems = props.Recipes.map((recipe) => {
       
 

        return (<li className="list-group-item list-group-item2  list-group-item-action" key={recipe.id.toString()}>
           <Link to={"/AirFryer/"+ recipe.product} onClick={()=>{changeRecipe(recipe.product); changeLink(true)}}> {recipe.product}   <img src={recipe.imageurl} width={50} height={50} /> </Link>
        </li> )
    }    )
  
    return (<ul className="list-group" >
       {listItems}

</ul>
       )


}
export default List