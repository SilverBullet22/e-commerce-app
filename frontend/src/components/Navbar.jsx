import { ShoppingCart, UserPlus, LogIn, Search, LogOut, Lock, User, List, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";


const Navbar = () => {
	const [navbar, setNavbar] = useState(false)

	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

  const closeNavbar=()=>{
    setNavbar(false)
  }

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800' style={{direction:"ltr"}}>
			<div className='container mx-auto px-4 py-3 relative'>
				<div className='flex flex-wrap justify-between items-center gap-3 relative'>
					<div className="flex gap-8  items-end justify-between">
					<Link to='/' className='text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
						E-Commerce
					</Link>

					<Link
                		onClick={closeNavbar}
								to={"/cart"}
								className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out items-center hidden lg:flex justify-center'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								<span className=' text-md'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-3 -left-2 bg-emerald-500 text-white rounded-full 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out h-5 min-w-5 px-1 flex items-center justify-center'
									>
										{cart.length}
									</span>
								)}
						</Link>
					</div>
						

					<div className='mt-1 max-w-96 flex-grow mx-10 hidden lg:flex relative rounded-md shadow-sm' style={{direction:"rtl"}}>
						<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
							<Search className='h-5 w-5 text-gray-300' aria-hidden='true' />
						</div>
						<input
							id='search'
							type='input'
							required
							className='block w-full px-3 py-2 pr-10 bg-transparent border border-gray-600 
							rounded-md shadow-sm
								placeholder-gray-400 placeholder:font-almarai placeholder:text-base focus:outline-none focus:ring-emerald-500 
								focus:border-emerald-500 sm:text-sm'
							placeholder='ابحث عما تريد هنا'
						/>
					</div>

					<div className="flex gap-5 lg:hidden">
						<Link
                onClick={closeNavbar}
								to={"/cart"}
								className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out flex items-center justify-center'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								{/* <span className=' text-md'>Cart</span> */}
								{cart.length > 0 && (
									<span
										className='absolute -top-2 right-4 bg-emerald-500 text-white rounded-full h-5 min-w-5 px-1 flex items-center justify-center
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out font-medium'
									>
										{cart.length}
									</span>
								)}
						</Link>
							
						<div className=" flex hover:cursor-pointer" onClick={()=>setNavbar(!navbar)}>
							<Menu className=' size-7 text-gray-300' aria-hidden='true' />
						</div>
					</div>

					<nav className="hidden lg:flex">
						<div className='flex flex-wrap items-center gap-4 justify-between'>
						<Link
							to={"/"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-out font-almarai'
						>
							الصفحة الرئيسية
						</Link>
						<div className='flex flex-row gap-2'>
						
						{isAdmin && (
							<Link
								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='font-almarai ml-2'>تسجيل خروج</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-emerald-600 hover:bg-emerald-700 text-white py-1 sm:py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out font-almarai'
								>
									إنشاء حساب
									<UserPlus className='ml-2' size={18} />
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-1 sm:py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out font-almarai'
								>
									تسجيل دخول
									<LogIn className='ml-2' size={18} />
								</Link>
							</>
						)}
						</div>
						</div>
					</nav>

				</div>
				{ navbar&& <nav className='fixed top-12 p-5 left-0 right-0 flex-col space-y-3 mt-1 h-50 w-full bg-gray-900 
					bg-opacity-90 backdrop-blur-md shadow-lg z-14 transition-all duration-300'>
					<Link
			onClick={closeNavbar}
						to={"/"}
						className='text-gray-300 hover:text-emerald-400 transition duration-400
						ease-in-out flex w-full sm:w-48 justify-center items-centeق font-almarai'
					>
						الصفحة الرئيسية
					</Link>
					
					{isAdmin && (
						<Link
			onClick={closeNavbar}
							className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-2 rounded-md font-medium
								transition duration-300 ease-in-out flex w-full sm:w-48 items-center justify-center'
							to={"/secret-dashboard"}
						>
							<Lock className='mr-2' size={18} />
							<span>Dashboard</span>
						</Link>
					)}

					{user ? (
						<button
							className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
					rounded-md flex w-full sm:w-48 items-center justify-center transition duration-300 ease-in-out'
							onClick={logout}
						>
							<LogOut size={18} />
							<span className='ml-2 font-almarai'>تسجيل خروج</span>
						</button>
					) : (
						<>
							<Link
			onClick={closeNavbar}
								to={"/signup"}
								className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
								rounded-md flex w-full sm:w-48 justify-center items-center transition duration-300 ease-in-out font-almarai'
							>
								<UserPlus className='mr-2' size={18} />
								إنشاء حساب
							</Link>
							<Link
								to={"/login"}
			onClick={closeNavbar}
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
								rounded-md w-full sm:w-48 flex items-center justify-center transition duration-300 ease-in-out font-almarai'
							>
								<LogIn className='mr-2' size={18} />
								تسجيل دخول
							</Link>
						</>
					)}
				</nav>
				}
			</div>
		</header>
	);
};
export default Navbar;
