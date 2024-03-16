
import { useState } from 'react'
import './App.css'
import Header from './componets/header'
import Recipes from './componets/recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [recipe, setRecipe] = useState([])

  const [newRecepi, setNewRecipe] = useState([])

  const handelBtnWantToCook = (rc) => {
    const cheakRecipe = recipe.find(rp => rp.recipe_id === rc.recipe_id)
    if (!cheakRecipe) {
      setRecipe([...recipe, rc])
    }
    else {
      toast("Already Exists !");
    }
  }

  const handelBtnPreparing = (rcs) => {
    // console.log(newRecipi.recipe_name);
    const newRecipe = recipe.filter(rcp => rcp.recipe_id !== rcs.recipe_id)
    setRecipe(newRecipe)
    // console.log(rcs);
    setNewRecipe([...newRecepi, rcs])
    // setNewRecipe(newRecipe)
    // // newRecipi.map(r=>console.log(r))
    // console.log(newRecipe)
  }
  // console.log(newRecepi);
  let sum = 0;
  const sumPreparingTime = newRecepi.map(nrcp => nrcp.preparing_time)
  console.log(sumPreparingTime);
  // recipe.map((rcp) => console.log(rcp))
  for (const n of sumPreparingTime) {
    sum = sum + n
    console.log(sum);
  }

  let totalCal = 0
  for (const cal of newRecepi) {
    const calor = cal.calories
    totalCal = totalCal + calor
    console.log(calor);
  }
  // console.log(sum);
  return (
    <>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <div className='max-w-[1180px] mx-auto mt-10'>
        <div>
          <h3 className='text-4xl text-[#150B2B] font-semibold fontLexend text-center'>Our Recipes</h3>
          <p className='naVarColor max-w-[1052px] mx-auto text-center mt-5'>Waffle (add fresh Strawberries, Bananas Foster or Southern Fried Apples) 3.00. Smoked Salmon, Cream Cheese, Capers, Tomato & Sautéed Balsamic Red Onions. Assorted Flavors, Choice of Cheese, turkey or pork bacon, turkey or pork sausage, or scrapple (add tomato or Avocado) 1.00. Flash Fried Chicken Breast Strips tossed in Honey Old Bay over a Fluffy Belgian Waffle</p>
        </div>
        <div className='flex gap-8 my-8'>
          <div>
            <Recipes handelBtnWantToCook={handelBtnWantToCook}></Recipes>
          </div>
          <div className='border-2 border-[#28282833] rounded-xl p-5 w-[950px]'>
            <h3 className='text-center text-[#282828] text-2xl font-semibold'>Want to cook: {recipe.length}</h3>
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
              <h3 className='text-center text-[#282828] text-2xl font-semibold'>Currently cooking: {newRecepi.length}</h3>
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
                        newRecepi.map((nrc, idx) => <tr key={idx} className='table-bg text-[#282828B2]'>
                          <th>{idx + 1}</th>
                          <td>{nrc.recipe_name}</td>
                          <td>{nrc.preparing_time} minutes</td>
                          <td>{nrc.calories} calories</td>
                        </tr>)
                      }
                    </tbody>
                  </table>
                </div>
                <div className='flex gap-8 ml-44 mt-5'>
                  <h3>Total Time = {sum} minutes</h3>
                  <h3>Total Calories = {totalCal} calories</h3>
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
