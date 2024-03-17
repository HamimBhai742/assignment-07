import { useEffect } from "react";
import { useState } from "react";
import Recipi from "./recipi";

const Recipes = ({handelBtnWantToCook}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('/recipe.json')
            .then(res => res.json())
            .then(data=>setRecipes(data))
    }, [])

    return (
        
        <div className='grid lg:grid-cols-2 gap-5'>
            {
            recipes.map((recipe,idx)=> <Recipi key={idx} recipe={recipe} handelBtnWantToCook={handelBtnWantToCook}></Recipi>)
            }        
        </div>
        
    );
};

export default Recipes;