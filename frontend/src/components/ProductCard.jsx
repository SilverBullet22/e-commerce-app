import toast from "react-hot-toast";
import {useEffect, useState} from "react"
import { ShoppingCart} from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product , setImageURL}) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div className='flex relative flex-col sm:justify-self-auto justify-between h-[85%] sm:h-80 overflow-hidden border border-emerald-600/50 rounded-lg bg-gray-800 shadow-lg'>
			<div 
			onClick={()=>setImageURL(product.image)}
			className='relative sm:mx-1 mx-0.5 mt-0.5 flex items-center justify-center sm:mt-1 h-3/2 sm:h-3/4 overflow-hidden rounded-md'>
				<img className='w-full object-center' src={product.image} alt='product image'/>
				<div className='absolute inset-0 bg-black bg-opacity-20' />
			</div>

			<div className='mt-2 pb-3 px-2 sm:px-4 '>
				<h5 className='text-md pr-2 sm:text:xl sm:font-semibold font-almarai tracking-tight text-white'>{product.name}</h5>
				<div className=' mb-3 pr-2 flex items-center justify-between'>
					<p>
						<span className='text-2xl sm:text:3xl sm:font-bold text-emerald-400'>${product.price}</span>
					</p>
				</div>
				<button
					className='flex w-full sm:w-fit items-center justify-center rounded-md bg-emerald-600 px-2 py-2 text-center text-md sm:text:xl font-medium
					 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-almarai '
					onClick={handleAddToCart}
				>
					<ShoppingCart size={18} className='ml-2' />
					إضافة
				</button>
			</div>
		</div>
	);
};
export default ProductCard;
