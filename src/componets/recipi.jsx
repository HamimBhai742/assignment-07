

const Recipi = ({ recipe }) => {
    console.log(recipe);
    const { recipe_img, recipe_name, short_description, preparing_time, calories, ingredients } = recipe
    console.log(ingredients);
    const ingredient = ingredients.filter((r, idx) => idx < 3)
    console.log(ingredient);

    return (
        <div>
            <div className="card card-compact w-full border-2 border-[#28282833]">
                <figure className='p-5'><img className='rounded-xl h-[200px] w-[280px]' src={recipe_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-[#282828] font-semibold text-xl ">{recipe_name}</h2>
                    <p className='text-[#878787] fira-san'>{short_description}</p>
                    <div className='border-b-2 border-[#2828281A]'></div>
                    <h3 className='text-lg font-medium text-[#282828]'>Ingredients: {ingredients.length}</h3>
                    <ul className='list-disc fira-san text-[#878787] ml-6'>
                        {ingredient.map((li,idx )=> <li key={idx}>{li}</li>)}
                    </ul>
                    <div className='border-b-2 border-[#2828281A] my-3'></div>
                    <div className='flex gap-5 fira-san'>
                        <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-regular fa-clock"></i> <p>{preparing_time} minutes</p></div>
                        <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-solid fa-fire-flame-curved"></i> <p>{calories} calories</p></div>
                    </div>
                    <div className="card-actions mt-5">
                        <button className="w-40 h-12 rounded-full bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipi;