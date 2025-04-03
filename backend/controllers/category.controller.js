import cloudinary from "../lib/cloudinary.js";
import Category from "../models/category.model.js";

export const getAllCategories = async (req, res) => {
    try {
        const category = await Category.find({}); // find all categories
        res.json({ category });
    } catch (error) {
        console.log("Error in getAllCategory controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const createCategory = async (req, res) => {
	try {
		const { name, image } = req.body;

		let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
		}

		const category = await Category.create({
			name,
			image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
		});

		res.status(201).json(Category);
	} catch (error) {
		console.log("Error in createProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        if (category.image) {
            const publicId = product.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`products/${publicId}`);
                console.log("deleted image from cloduinary");
            } catch (error) {
                console.log("error deleting image from cloduinary", error);
            }
        }

        await Product.findByIdAndDelete(req.params.id);

        res.json({ message: "Category deleted successfully" });
    } catch (error) {
        console.log("Error in deleteCategory controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

async function updateCategory() {
    const { name, image } = req.body
    try {
        const category = await Category.findById(req.params.id)
        if(!category)
            return res.status(404).json({ message: "Category not found" });

        if (category.image) {
            const publicId = category.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`products/${publicId}`);
                console.log("deleted image from cloduinary");
            } catch (error) {
                console.log("error deleting image from cloduinary", error);
            }
        }

        let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
		}

        category.name = name || category.name;
        category.image = image || category.image;

        category.save()

		res.status(200).json(category);



    } catch (error) {
        console.log("error in updateCategory function");
    }
}