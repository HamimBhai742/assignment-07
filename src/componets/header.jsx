
const Header = () => {
    return (
        <div>
            <nav className='max-w-[1180px] mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 naVarColor">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="text-[#150B2B] text-3xl font-bold">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 naVarColor">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3 items-center">
                        <label className="input inputBackground flex items-center gap-2 rounded-full">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="" placeholder="Search" />
                        </label>
                        <div className='bg-[#0BE58A] w-12 h-12 rounded-full flex items-center justify-center'>
                            <i className="fa-regular fa-circle-user text-3xl"></i>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="headerLeaner max-w-[1180px] mx-auto py-16 rounded-2xl fontLexend mt-7">
                <div className="text-center flex justify-center">
                    <div className="max-w-[752px]">
                        <h1 className="mb-5 text-5xl font-bold  leading-[64px] text-[#FFFFFF]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 text-[#FFF] text-lg">I like to cook.I love to cook so I do my own cooking.I can make good recipes.I can cook a lot of food.My restaurant is different from other restaurants</p>
                        <div className='space-x-3'>
                            <button className="w-40 h-14 rounded-full bg-[#0BE58A] text-[#150B2B] text-xl font-semibold">Explore Now</button>
                            <button className="w-40 h-14 rounded-full border-2 border-white text-[#FFF] text-xl font-semibold ">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;