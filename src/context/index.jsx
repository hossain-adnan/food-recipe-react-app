import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
   const [searchParam, setSearchParam] = useState('apple');
   const [loading, setLoading] = useState(false);
   const [recipeList, setRecipeList] = useState([]);
   const [recipeDetailsData, setRecipeDetailsData] = useState([]);
   const [favoriteList, setFavoriteList] = useState([]);

   const navigate = useNavigate();

   function handleAddToFavorites(currentItem) {
      let cpyFavoriteList = [...favoriteList];
      const index = cpyFavoriteList.findIndex(item => item.id === currentItem.id);

      if (index === -1) {
         cpyFavoriteList.push(currentItem);
      } else {
         cpyFavoriteList.splice(index);
      }

      setFavoriteList(cpyFavoriteList);
   }

   console.log(favoriteList, 'favoriteList')

   async function handleSubmit(event) {
      event.preventDefault();
      setLoading(true);
      try {
         const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
         const data = await res.json();
         if (data?.data?.recipes) {
            setRecipeList(data.data.recipes);
            setLoading(false);
            setSearchParam('');
            navigate('/')
         }
         console.log(data);
      } catch (error) {
         console.log(error);
         setLoading(false);
         setSearchParam('');
      }
   }

   console.log(loading, recipeList);

   return (
      <GlobalContext.Provider
         value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData, favoriteList, handleAddToFavorites}}
      >
         {children}
      </GlobalContext.Provider>
   )
}