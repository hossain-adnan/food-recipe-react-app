import { useContext, useEffect } from "react";
import { useParams } from "react-router"
import { GlobalContext } from "../../context";

export default function Details() {

    const {id} = useParams();

    const {recipeDetailsData, setRecipeDetailsData, favoriteList, handleAddToFavorites} = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await res.json();
            console.log("API resData", data);
            if(data?.data) {
                setRecipeDetailsData(data.data);
            }
        }

        getRecipeDetails();

    }, []);

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailsData?.recipe?.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div>
                <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.recipe?.publisher}</span>
                <h3 className="font-bold text-2xl">{recipeDetailsData?.recipe?.title}</h3>
                <button 
                    onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
                    className="bg-black text-white text-xl px-5 py-3 rounded-xl mt-2"
                >
                    {favoriteList.findIndex(item => item.id === recipeDetailsData?.recipe.id) !== -1 ? "Remove from favorites"
                    : "Add to favorites"}
                </button>
                <div>
                    <span className="font-bold text-xl block mt-5">ingredients</span>
                    {recipeDetailsData?.recipe?.ingredients.map(ingredient => {
                        return <li>
                            {ingredient.description} : {ingredient.quantity}{ingredient.unit}
                        </li>
                    })}
                </div>
            </div>
        </div>
    )
}