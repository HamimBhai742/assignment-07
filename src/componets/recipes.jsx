import { useEffect } from "react";
import { useState } from "react";
import Recipi from "./recipi";

const Recipes = ({handelBtnWantToCook}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('../../public/recipe.json')
            .then(res => res.json())
            .then(data=>setRecipes(data))
    }, [])

    return (
        
        <div className=' grid grid-cols-2 gap-5'>
            {
            recipes.map(recipe=> <Recipi key={recipe.id} recipe={recipe} handelBtnWantToCook={handelBtnWantToCook}></Recipi>)
            }        
        </div>
        
    );
};

export default Recipes;