import ListIngredients from "./ListIngredients";
function RecipePage(props) {
  
return(<div>
    <h1>{props.name}</h1>
    Cooking Time: {props.time} mins
    <div>
        <ListIngredients id={props.id} />
    </div>
</div>)
}
export default RecipePage