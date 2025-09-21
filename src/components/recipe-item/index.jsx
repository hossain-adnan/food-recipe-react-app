import { Link } from "react-router";

export default function RecipeItem({item}) {
    return(
        <div className="w-80 flex flex-col p-5 bg-white/75 shadow-2xl rounded-2xl border-2 border-white">
            <div className="h-40 flex items-center justify-center overflow-hidden rounded-xl">
                <img src={item?.image_url} alt="food" className="block w-full"/>
            </div>
            <div>
                <span className="text-sm text-cyan-700 font-medium">{item.publisher}</span>
                <h3 className="font-bold text-2xl truncate">{item?.title}</h3>
                <Link className="text-white font-medium uppercase text-sm p-3 px-8 mt-5 rounded-lg inline-block bg-gray-900/90 shadow-md" to={`/recipe-item/${item?.id}`}>
                    Recipe Details
                </Link>
            </div>
        </div>
    )
}

////"text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"