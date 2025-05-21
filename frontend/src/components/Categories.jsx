import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/categories");
                if (!response.ok) throw new Error("Failed to fetch categories");
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const handleDeleteCategory = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/categories/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete category");
            setCategories(categories.filter((item) => item.id !== id));
        } catch (error) {
            console.error("❌ Error deleting category:", error);
        }
    };

    const handleEditCategory = async (id, currentName) => {
        const updatedName = prompt("Enter new category name:", currentName);
        if (!updatedName) return;
        try {
            const response = await fetch(`http://localhost:3000/categories/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: updatedName }),
            });
            if (!response.ok) throw new Error("Failed to edit category");
            setCategories(categories.map((item) => (item.id === id ? { ...item, name: updatedName } : item)));
        } catch (error) {
            console.error("❌ Error editing category:", error);
        }
    };

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span>User Name</span>
                    <Link to="/addCategory">
                        <button className="bg-red-600 text-white px-4 py-2 rounded">add Category</button>
                    </Link>
                </div>
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">SNo</th>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => (
                            <tr key={item.id}>
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleEditCategory(item.id, item.name)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-2 py-1 rounded"
                                        onClick={() => handleDeleteCategory(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Categories;
