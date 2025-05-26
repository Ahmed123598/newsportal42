import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const API_URL = "http://localhost:3000/api/categories"; // ✅ Updated API for categories

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await axios.post(API_URL, {
                name: data.name,
                description: data.description,
            });

            if (response.status === 201) {
                setSuccessMessage("✅ Category added successfully!");
                reset();
                setTimeout(() => navigate("/admin/categories"), 1500); // ✅ Redirect after success
            } else {
                throw new Error(response.data.message || "❌ Failed to add category.");
            }
        } catch (error) {
            console.error("❌ Error adding category:", error.response?.data || error.message);
            alert(`❌ ${error.response?.data?.message || "Failed to add category. Check console for details."}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Add a New Category</h2>

            {successMessage && <p className="text-green-600 text-sm mb-4">{successMessage}</p>} {/* ✅ Success Message */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Category Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Category name is required" })}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter category name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    disabled={loading}
                >
                    {loading ? "Creating..." : "Create Category"}
                </button>
            </form>
        </div>
    );
};

export default AddCategory;
