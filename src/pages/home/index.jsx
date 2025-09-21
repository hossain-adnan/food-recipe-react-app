import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item";

export default function Home() {

    const {loading, recipeList} = useContext(GlobalContext);

    // console.log(recipeList, 'recipeList');
    //py-8 container mx-auto flex flex-wrap justify-center gap-10
    return (
        <div className="container flex gap-8 flex-wrap py-8 justify-center">
            {
                recipeList && recipeList.length > 0 ? (
                    recipeList.map(item => <RecipeItem item={item}/>)
                ):(
                    <div>Nothing to show</div>
                )
            }
        </div>
    );
}