
import './App.css'
import Header from './componets/header'
import Recipes from './componets/recipes'

function App() {

  


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
          <Recipes></Recipes>               
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
                    <tr className='table-bg text-[#282828B2]'>
                      <th>1</th>
                      <td>Chicken Caesar Salad</td>
                      <td>20 minutes</td>
                      <td>400 calories</td>
                      <td><button className='text-[#150B2B] bg-[#0BE58A] p-3 px-5 rounded-full font-medium'>Preparing</button></td>
                    </tr>
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
