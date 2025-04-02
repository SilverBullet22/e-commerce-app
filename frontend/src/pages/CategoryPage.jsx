import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";
import { Search } from "lucide-react";


const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const CategoryPage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	
	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center text-3xl sm:text-6xl font-bold text-emerald-400 mb-4'>
						Explore Our Categories
				</motion.h1>
				<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				>
				<p className='text-center text-md sm:text-xl text-gray-300 mb-4'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='mb-10 mx-auto w-full sm:w-2/3 lg:hidden relative rounded-lg shadow-sm'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
						</div>
						<input
							id='search'
							type='input'
							required
							className='block w-full px-3 py-2 pl-10 bg-gray-800/50 border border-gray-600 
							rounded-md shadow-sm
								placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
								focus:border-emerald-500 sm:text-sm'
							placeholder='Search here'
						/>
					</div>

				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
				</motion.div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default CategoryPage;
