import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();
	// const items=[
	// 	{
	// 		_id:1,
	// 		name:"حقيبة ظهر",
	// 		price:12,
	// 		image:"bags.jpg",
	// 		isFeatured:true,
	// 		category:"t-shirt"
	// 	},
	// 	{
	// 		_id:1,
	// 		name:"حقيبة ظهر",
	// 		price:12,
	// 		image:"bags.jpg",
	// 		isFeatured:true,
	// 		category:"t-shirt"
	// 	},
	// 	{
	// 		_id:1,
	// 		name:"حقيبة ظهر",
	// 		price:12,
	// 		image:"bags.jpg",
	// 		isFeatured:false,
	// 		category:"t-shirt"
	// 	},
	// 	{
	// 		_id:1,
	// 		name:"حقيبة ظهر",
	// 		price:12,
	// 		image:"bags.jpg",
	// 		isFeatured:true,
	// 		category:"t-shirt"
	// 	},
	// ]
	console.log("products", products);


	return (
		<motion.div
			className='bg-gray-800 shadow-lg overflow-x-auto rounded-lg max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<table className=' min-w-full divide-y  divide-gray-700 font-almarai'>
				<thead className='bg-gray-700'>
					<tr>
						<th
							scope='col'
							className='px-4 py-3 text-start lg:text-xl text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							إسم المنتج
						</th>
						<th
							scope='col'
							className='px-4 py-3 text-start lg:text-md text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							السعر
						</th>
						<th
							scope='col'
							className='px-4 py-3 text-start lg:text-md text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							القسم
						</th>

						<th
							scope='col'
							className='px-4 py-3 text-start lg:text-md text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							مميز
						</th>
						<th
							scope='col'
							className='px-4 py-3 text-start lg:text-md text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							حذف
						</th>
					</tr>
				</thead>

				<tbody className='bg-gray-800 divide-y divide-gray-700'>
					{products?.map((product) => (
						<tr key={product._id} className='hover:bg-gray-700'>
							<td className='px-4 md:4 lg:6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 w-10 rounded-full object-cover'
											src={product.image}
											alt={product.name}
										/>
									</div>
									<div className='ms-3'>
										<div className='text-xs md:text-sm'>{product.name}</div>
									</div>
								</div>
							</td>
							<td className='px-4 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'>${product.price.toFixed(2)}</div>
							</td>
							<td className='px-4 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'>{product.category}</div>
							</td>
							<td className='px-4 py-4 whitespace-nowrap'>
								<button
									onClick={() => toggleFeaturedProduct(product._id)}
									className={`p-1 rounded-full ${
										product.isFeatured ? "bg-yellow-400 text-gray-900" : "bg-gray-600 text-gray-300"
									} hover:bg-yellow-500 transition-colors duration-200`}
								>
									<Star className='h-5 w-5' />
								</button>
							</td>
							<td className='px-4 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteProduct(product._id)}
									className='text-red-400 hover:text-red-300'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};
export default ProductsList;
