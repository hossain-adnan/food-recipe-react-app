import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
    const {favoriteList} = useContext(GlobalContext);

    return (
        <div className="container flex gap-8 flex-wrap py-8 justify-center">
            {
                favoriteList && favoriteList.length > 0 ? (
                    favoriteList.map(item => <RecipeItem item={item}/>)
                ):(
                    <div>Nothing is added</div>
                )
            }
        </div>
    );
}