import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader, EyeOff, Eye, ArrowLeft } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [eye, setEye] =useState(false)
	

	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		login(email, password);
	};

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				
				<h2 className='mt-6 text-center text-3xl font-almarai font-semibold text-emerald-400'>تسجيل الدخول</h2>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-4 rounded-md'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block font-almarai text-sm font-medium ms-1 text-gray-300'>
								البريد الإلكتروني
							</label>
							<div className='mt-2  relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className=' block w-full px-3 py-2 ps-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm 
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
									 focus:border-emerald-500 sm:text-sm'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium font-almarai ms-1 text-gray-300'>
								كلمة السر
							</label>
							<div className='mt-2 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type={eye?'password':"text"}
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className=' block w-full px-3 py-2 ps-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									placeholder={eye?'12345678':'••••••••'}
								/>
								<div 
								onClick={()=>setEye(!eye)}
								className='absolute inset-y-0 end-0 pe-2 flex items-center cursor-pointer'>
									{eye
									?<EyeOff className='h-5 w-5 text-gray-400' aria-hidden='true' />
									:<Eye className='h-5 w-5 text-gray-400' aria-hidden='true' />}
									
								</div>
							</div>
						</div>

						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
							 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50 font-almarai'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mL-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='ml-2 h-5 w-5' aria-hidden='true' />
									تسجيل دخول
								</>
							)}
						</button>
					</form>

					<p className='mt-8 flex gap-2 items-center justify-center text-center text-sm text-gray-400 font-almarai'>
						ليس لدي حساب {"  ?"}
						<Link to='/signup' className='font-medium text-emerald-400 hover:text-emerald-300'>
							إشترك الان <ArrowLeft className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};
export default LoginPage;
