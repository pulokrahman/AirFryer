import { Routes,Route } from "react-router"
import RecipePage from "../Page/RecipePage"
import SearchBar from "./SearchBar"
function RecipesRoutes(props) {

    const rou=props.Recipes.map(
        (recipe) => { 
         
return( <Route key={recipe.id.toString()} path={"/" +recipe.product} element={<RecipePage time={recipe.cookingtime} name={recipe.product} id={recipe.id} />} />)
})
//console.log(rou)


return (
<Routes>

{rou}
<Route path="*" element={<div></div>} />
</Routes>)
}
export default RecipesRoutes