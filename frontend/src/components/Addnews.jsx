import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "./Sidebar";

const AddNews = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const API_URL = "http://localhost:3000/news/upload";

    // ✅ Validate image type before uploading
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!allowedTypes.includes(file.type)) {
            alert("❌ Invalid file type! Only JPG, JPEG, PNG, and GIF allowed.");
            setSelectedImage(null);
        } else {
            setSelectedImage(file);
        }
    };

    const onSubmit = async (data) => {
        try {
            if (!selectedImage) {
                alert("❌ Please upload an image.");
                return;
            }

            setLoading(true);

            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("categoryId", data.category);
            formData.append("publisherName", data.publisherName); // ✅ Added field
            formData.append("content", data.content); // ✅ Added field
            formData.append("image", selectedImage);

            const token = localStorage.getItem("token");

            const response = await axios.post(API_URL, formData, {
                headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
            });

            if (response.status === 201) {
                alert("✅ News added successfully!");
                setSelectedImage(null);
                reset();
            } else {
                throw new Error(response.data.message || "❌ Failed to add news.");
            }
        } catch (error) {
            console.error("❌ Error adding news:", error.response?.data || error.message);
            alert(`❌ ${error.response?.data?.message || "Failed to add news. Check console for details."}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-lg font-semibold mb-4">Add a New News Article</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter news title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Publisher Name</label>
                        <input
                            type="text"
                            {...register("publisherName", { required: "Publisher name is required" })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter publisher name"
                        />
                        {errors.publisherName && <p className="text-red-500 text-sm">{errors.publisherName.message}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Description</label>
                        <textarea
                            {...register("description", { required: "Description is required" })}
                            className="w-full h-40 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter news description"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Content</label>
                        <textarea
                            {...register("content", { required: "Content is required" })}
                            className="w-full h-40 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter news content"
                        ></textarea>
                        {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
                    </div>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block font-semibold mb-1">Image Upload</label>
                            <input
                                type="file"
                                {...register("image", { required: "Image is required" })}
                                onChange={handleImageUpload}
                                accept="image/jpeg,image/png,image/gif"
                                className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
                            />
                            {selectedImage && (
                                <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />
                            )}
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block font-semibold mb-1">Select Category</label>
                            <select
                                {...register("category", { required: "Category is required" })}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                            >
                                <option value="">Select</option>
                                <option value="1">India</option>
                                <option value="2">World</option>
                                <option value="3">Sports</option>
                                <option value="4">Business</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create News"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;
