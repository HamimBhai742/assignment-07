import { useEffect } from "react";
import { useState } from "react";
import Recipi from "./recipi";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('../../public/recipe.json')
            .then(res => res.json())
            .then(data=>setRecipes(data))
    }, [])

    return (
        <div>
            <h3>tyy</h3>
            {
                
            }
            <Recipi re></Recipi>
        </div>
        
    );
};

export default Recipes;