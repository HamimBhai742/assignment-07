
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
          <div className=' grid grid-cols-2 gap-5'>
            <div className="card card-compact w-full border-2 border-[#28282833]">
              <figure className='p-5'><img className='rounded-xl' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className=" text-[#282828] font-semibold text-xl ">Spaghetti Bolognese</h2>
                <p className='text-[#878787] fira-san'>Classic Italian pasta dish with savory meat sauce.</p>
                <div className='border-b-2 border-[#2828281A]'></div>
                <h3 className='text-lg font-medium text-[#282828]'>Ingredients: 6</h3>
                <ul className='list-disc fira-san text-[#878787] ml-6'>
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
                <div className='border-b-2 border-[#2828281A] my-3'></div>
                <div className='flex gap-5 fira-san'>
                  <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-regular fa-clock"></i> <p>60 minutes</p></div>
                  <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-solid fa-fire-flame-curved"></i> <p>600 calories</p></div>
                </div>
                <div className="card-actions mt-5">
                  <button className="w-40 h-12 rounded-full bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full border-2 border-[#28282833]">
              <figure className='p-5'><img className='rounded-xl' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className=" text-[#282828] font-semibold text-xl ">Spaghetti Bolognese</h2>
                <p className='text-[#878787] fira-san'>Classic Italian pasta dish with savory meat sauce.</p>
                <div className='border-b-2 border-[#2828281A]'></div>
                <h3 className='text-lg font-medium text-[#282828]'>Ingredients: 6</h3>
                <ul className='list-disc fira-san text-[#878787] ml-6'>
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
                <div className='border-b-2 border-[#2828281A] my-3'></div>
                <div className='flex gap-5 fira-san'>
                  <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-regular fa-clock"></i> <p>60 minutes</p></div>
                  <div className='flex items-center gap-2 text-[#282828CC]'><i className="fa-solid fa-fire-flame-curved"></i> <p>600 calories</p></div>
                </div>
                <div className="card-actions mt-5">
                  <button className="w-40 h-12 rounded-full bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>
                </div>
              </div>
            </div>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Recipes></Recipes>
    </>
  )
}

export default App
