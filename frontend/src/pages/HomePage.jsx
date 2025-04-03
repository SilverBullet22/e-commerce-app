import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore.js";



const HomePage = () => {
    const [ imageURL, setImageURL ] = useState(null)
    
    // const { products, fetchAllProducts } = useProductStore();
    
    // console.log("products", products)

    // useEffect(()=>{
    //     fetchAllProducts()
    // },[fetchAllProducts, products])

    const handleImage =(urlImg)=>{
        setImageURL(urlImg)
        console.log("123456789876543")
    }

    const products = [
        { price: 23, name: "لابتوب lenpvo thinkPad", image: "/img.jpg" },
        { price: 23, name: "لابتوب", image: "/img1.jpeg" },
        { price: 23, name: "لابتوب", image: "/img1.jpeg" },
        { price: 23, name: "لابتوب", image: "/img3.jpg" },
        { price: 23, name: "لابتوب", image: "/img4.jpg" },
        { price: 23, name: "لابتوب", image: "/img5.jpeg" },
        { price: 23, name: "لابتوب", image: "/img6.jpg" },
    ];
   
    return (
        <>
        <div className='relative min-h-screen text-white overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16'>
            <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center text-3xl sm:text-6xl font-bold text-emerald-400 mb-4'>
                        Home Page
                </motion.h1>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                <p className='text-center text-md sm:text-xl text-gray-300 mb-4'>
                    Discover the latest trends in eco-friendly fashion
                </p>

                <div className='mb-10 sm:mx-auto mx-3 sm:w-2/3 lg:hidden relative rounded-lg shadow-sm'>
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

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3'>
                    {products.map((product) => (
                        <ProductCard product={product} key={product.name} setImageURL={setImageURL} />
                    ))}
                </div>
                </motion.div>

            </div>
        </div> 
            {imageURL&& (<div className="w-full h-screen fixed top-0 z-40 ease-in-out transition-all duration-3 bg-black flex items-center justify-center">
                <div className="relative md:h-[100%]">
                    <img src={imageURL} className=" object-contain size-full" alt="Image" />
                </div>
                <div 
                onClick={()=>setImageURL(null)}
                className=" absolute flex top-10 cursor-pointer gap-1 items-center justify-center w-fit p-2 rounded-lg font-almarai mx-auto bg-white/10 md:bg-black/60 z-50">
                    <X className=" size-6"/>
                    <span>إغلاق</span>
                </div>
            </div>
            )}
        </>
    );
}

export default HomePage;