
import { useState } from 'react'
import './App.css'
import Header from './componets/header'
import Recipes from './componets/recipes'

function App() {

  const [recipe, setRecipe] = useState([])

  const [newRecipi, setNewRecipe] = useState([])

  const handelBtnWantToCook = (rc) => {
    const cheakRecipe = recipe.find(rp => rp.recipe_id === rc.recipe_id)
    if (!cheakRecipe) {
      setRecipe([...recipe, rc])
    }
    else {
      alert('already ass')
    }
  }

  const handelBtnPreparing = (rc) => {
    // console.log(newRecipi.recipe_name);
    const newRecipe = recipe.filter(rcp => rcp.recipe_id !== rc.recipe_id)
    setRecipe(newRecipe)
    // const newRecipi = recipe.filter(rcp => rcp.recipe_id === rc.recipe_id)
    setNewRecipe([...newRecipi, rc])
    newRecipi.map(rs => console.log(rs.recipe_name))
    // const cheakNewRecipe = recipe.find(rp => rp.recipe_id = rc.recipe_id)
    // console.log(cheakNewRecipe);
   
    
    // 

  }
  



  // recipe.map((rcp) => console.log(rcp))
  return (
    <>
      <Header></Header>

      <div className='max-w-[1180px] mx-auto mt-10'>
        <div>
          <h3 className='text-4xl text-[#150B2B] font-semibold fontLexend text-center'>Our Recipes</h3>
          <p className='naVarColor max-w-[1052px] mx-auto text-center mt-5'>Waffle (add fresh Strawberries, Bananas Foster or Southern Fried Apples) 3.00. Smoked Salmon, Cream Cheese, Capers, Tomato & Sautéed Balsamic Red Onions. Assorted Flavors, Choice of Cheese, turkey or pork bacon, turkey or pork sausage, or scrapple (add tomato or Avocado) 1.00. Flash Fried Chicken Breast Strips tossed in Honey Old Bay over a Fluffy Belgian Waffle</p>
        </div>
        <div className='flex gap-8 my-8'>
          <div>
            <Recipes handelBtnWantToCook={handelBtnWantToCook}></Recipes>
          </div>
          <div className='border-2 border-[#28282833] rounded-xl p-5 '>
            <h3 className='text-center text-[#282828] text-2xl font-semibold'>Want to cook: 01</h3>
            <div className='border-b-2 border-[#2828281A] my-3'></div>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      recipe.map((rcp, idx) => <tr key={idx} className='table-bg text-[#282828B2]'>
                        <th>{idx + 1}</th>
                        <td>{rcp.recipe_name}</td>
                        <td>{rcp.preparing_time} minutes</td>
                        <td>{rcp.calories} calories</td>
                        <td><button onClick={() => handelBtnPreparing(rcp)} className='text-[#150B2B] bg-[#0BE58A] p-3 px-5 rounded-full font-medium'>Preparing</button></td>
                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mt-10'>
              <h3 className='text-center text-[#282828] text-2xl font-semibold'>Currently cooking: 02</h3>
              <div className='border-b-2 border-[#2828281A] my-3'></div>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className='table-bg text-[#282828B2]'>
                        <th>1</th>
                        <td>Chicken Caesar Salad</td>
                        <td>20 minutes</td>
                        <td>400 calories</td>
                      </tr>
                      {
                        <tr className='table-bg text-[#282828B2]'>
                          <th></th>
                          <td>{newRecipi.recipe_name}</td>
                          <td>{newRecipi.preparing_time} minutes</td>
                          <td>{newRecipi.calories} calories</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
