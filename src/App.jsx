
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
  }
  // console.log(newRecepi);
  let sum = 0;
  const sumPreparingTime = newRecepi.map(nrcp => nrcp.preparing_time)
  // console.log(sumPreparingTime);

  for (const n of sumPreparingTime) {
    sum = sum + n
    // console.log(sum);
  }

  let totalCal = 0
  for (const cal of newRecepi) {
    const calor = cal.calories
    totalCal = totalCal + calor
    // console.log(calor);
  }
  // console.log(sum);
  return (
    <>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <div className='max-w-[1180px] mx-auto mt-10'>
        <div>
          <h3 className='lg:text-4xl text-2xl text-[#150B2B] font-semibold fontLexend text-center'>Our Recipes</h3>
          <p className='naVarColor max-w-[1052px] mx-auto text-center mt-5 max-sm:mx-3 max-sm:text-sm'>Waffle (add fresh Strawberries, Bananas Foster or Southern Fried Apples) 3.00. Smoked Salmon, Cream Cheese, Capers, Tomato & Sautéed Balsamic Red Onions. Assorted Flavors, Choice of Cheese, turkey or pork bacon, turkey or pork sausage, or scrapple (add tomato or Avocado) 1.00. Flash Fried Chicken Breast Strips tossed in Honey Old Bay over a Fluffy Belgian Waffle</p>
        </div>
        <div className='lg:flex gap-8 my-8'>
          <div>
            <Recipes handelBtnWantToCook={handelBtnWantToCook}></Recipes>
          </div>
          <div className='border-2 border-[#28282833] rounded-xl p-5 lg:w-[950px] max-sm:mx-3 max-sm:mt-5'>
            <h3 className='text-center text-[#282828] text-2xl font-semibold'>Want to cook: {recipe.length > 0 ? "0" : ""}{recipe.length}</h3>
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
                      recipe.map((rcp, idx) => <tr key={idx} className='table-bg text-[#282828B2] max-sm:text-sm'>
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
              <h3 className='text-center text-[#282828] text-2xl font-semibold'>Currently cooking: {newRecepi.length > 0 ? '0' : ""}{newRecepi.length}</h3>
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
                <div className='flex gap-8 lg:ml-44 mt-5 max-sm:text-sm'>
                  <h3>Total Time = {sum} minutes</h3>
                  <h3>Total Calories = {totalCal} calories</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer p-10 bg-base-300 text-base-content">

        <div className="text-4xl font-bold mt-3">
          <h1>Recipe <br /> <span className='ml-3 '>Calories</span></h1>
        </div>
        <nav>
          <h6 className="footer-title">location</h6>
          <p className='max-w-[200px]'>2 House-1A, Road- 61 & 56, Block- NW, Gulshan 0.2 miles from Gulshan Lake Park</p>
        </nav>
        <nav>
          <h6 className="footer-title">hours</h6>
          <p>Sunday - Thursday: 11:00am - 10:00pm</p>
          <p>Friday - Saturday: 4:30pm - 10:00pm</p>
        </nav>
        <nav>
          <h6 className="footer-title">find us on...</h6>
          <div className="flex gap-3 text-3xl">
            <a href="https://www.facebook.com/home.php" target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.yelp.com/" target='_blank'><i className="fa-brands fa-yelp"></i></a>
          </div>
          <h6 className="footer-title mt-3">contact us</h6>
          <p>(+880) 1926-313093</p>
          <p>contact@gmail.com</p>
          
        </nav>

      </footer>


    </>
  )
}

export default App
