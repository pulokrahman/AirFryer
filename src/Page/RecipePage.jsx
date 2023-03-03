import ListIngredients from "./ListIngredients";
function RecipePage(props) {
  
return(<div>
    <h1>{props.name}</h1>
    Cooking Time: {props.time} mins
    <h1>Ingredients</h1>
    <div>
        <ListIngredients id={props.id} />
    </div>
</div>)
}
export default RecipePage