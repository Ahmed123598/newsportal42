import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Sidebar from './Sidebar';

const AddCategory = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Category Data:', data);
    // You can send this data to your API here
    navigate('/admin/categories');
  };

  return (
    <>
    <div className='flex flex-wrap'>
    <Sidebar/>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600 body-font">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
        >
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
          Add Category
        </h2>

        <div className="mb-6">
          <label htmlFor="category" className="leading-7 text-sm text-gray-600">
            Category Name
          </label>
          <input
            type="text"
            id="category"
            {...register('category', { required: 'Category name is required' })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition duration-200"
            />
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
          Add Category
        </button>
      </form>
    </section>
    </div>
          </>
  );
};

export default AddCategory;