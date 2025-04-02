import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [eye, setEye] =useState(false)

	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	return (
		<div className='flex flex-col justify-center py-6 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='mt-6 text-center text-3xl font-semibold font-almarai text-emerald-400'>إنشاء حساب</h2>
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
							<label htmlFor='name' className='block text-sm ms-1 font-medium font-almarai text-gray-300'>
								الإسم الكامل
							</label>
							<div className='mt-2 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<User className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='name'
									type='text'
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='block w-full px-3 py-2 ps-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none placeholder:font-almarai font-almarai text-sm placeholder:text-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									placeholder='محمد ناصر'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='email' className='block text-sm ms-1 font-medium font-almarai text-gray-300'>
								البريد الإلكتروني
							</label>
							<div className='mt-2 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className=' block w-full px-3 py-2 ps-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
									 focus:border-emerald-500 sm:text-sm'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm ms-1 font-almarai font-medium text-gray-300'>
								كلمة السر
							</label>
							<div className='mt-2 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type="password"
									required
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className=' block w-full px-3 py-2 ps-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									placeholder='••••••••'
								/>

							</div>
						</div>

						<div>
							<label htmlFor='confirmPassword' className='block text-sm ms-1 font-almarai font-medium text-gray-300'>
								تأكيد كلمة السر
							</label>
							<div className='mt-2 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='confirmPassword'
									type='password'
									required
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className=' block w-full px-3 py-2 ps-10 bg-gray-700 border
									 border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									 placeholder='••••••••'
									 />

									
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
									<Loader className='ml-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<UserPlus className='ml-2 h-5 w-5' aria-hidden='true' />
									إنشاء حساب
								</>
							)}
						</button>
					</form>

					<p className='mt-8 text-center flex items-center gap-1 justify-center text-sm text-gray-400 font-almarai'>
						لدي حساب من قبل ?
						<Link to='/login' className='font-medium text-emerald-400 hover:text-emerald-300'>
							تسجيل دخول <ArrowLeft className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};
export default SignUpPage;
