import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';

export default function AddCategory() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="flex h-screen">
      <Sidebar />
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add a new Category</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: true})} />

      <input type="submit" />
    </form>
    </div>
    </div>
  );
}