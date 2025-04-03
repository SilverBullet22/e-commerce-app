import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
	category: [],
	loading: false,

	setCategory: (category) => set({ category }),
	createCategory: async (categoryData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/category", categoryData);
			set((prevState) => ({
				products: [...prevState.category, res.data],
				loading: false,
			}));
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllCategories: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/category");
			set({ products: response.data,category, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch category", loading: false });
			toast.error(error.response.data.error || "Failed to fetch category");
		}
	},
	deleteCategory: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`/category/${productId}`);
			set((prevProducts) => ({
				products: prevProducts.products.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete category");
		}
	},

	updateCategory: async (categoryId, categoryData) => {
		set({ loading: true });
		try {
			const response = await axios.put(`/category/${categoryId}`, categoryData);

            set((state) => ({
                category: state.category.map((category) => (category._id === pid ? data.data : category)),
            }));
		} catch (error) {
			set({ error: "Failed to update category", loading: false });
			console.log("Error fetching featured products:", error);
		}
	},
}));
