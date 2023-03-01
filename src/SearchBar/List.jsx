import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
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
       
 

        return (<li key={recipe.id.toString()}>
           <Link to={"/"+ recipe.product} onClick={()=>{changeRecipe(recipe.product); changeLink(true)}}> {recipe.product}   <img src={recipe.imageurl} width={50} height={50} /> </Link>
        </li> )
    }    )
    
    return (<ul style={{ listStyleType: "none" }}>
       {listItems}

</ul>
       )


}
export default List