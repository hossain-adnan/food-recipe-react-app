import { useContext } from "react";
import { NavLink } from "react-router";
import { GlobalContext } from "../../context";

export default function Navbar() {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam);

    return <nav className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold"><NavLink to={'/'}>Food Recipe</NavLink></h2>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder="Enter recipe..." 
                value={ searchParam }
                onChange={(e) => setSearchParam(e.target.value)}
                className="border border-gray-400 rounded-full p-2 px-3"
            />
        </form>
        <ul className="flex gap-3">
            <li className="cursor-pointer hover:font-bold">
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="cursor-pointer hover:font-bold">
                <NavLink to={'favorites'}>Favorites</NavLink>
            </li>
        </ul>
    </nav>
}