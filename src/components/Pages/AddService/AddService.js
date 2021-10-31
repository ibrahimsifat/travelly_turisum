import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://gentle-everglades-16293.herokuapp.com/services',data)
.then(res=>{
    console.log(res);
})
    };



    return (
        <div className='my-16'>
            <div class="mx-auto max-w-md px-6 py-12 bg-white border-0  sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8 text-center">Add a new Service</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <div class="relative z-0 w-full mb-5">
        <input
        {...register("title")}
          type="text"
          required
          name="title"
          placeholder=" "
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="text" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Title</label>
        <span class="text-sm text-red-600 hidden" id="error">Title is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
        {...register("price")}
          type="Number"
          name="price"
          required
          placeholder=" "
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Price</label>
        <span class="text-sm text-red-600 hidden" id="error">Price is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <input
        {...register("imgURL")}
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Image</label>
        <span class="text-sm text-red-600 hidden" id="error">Image is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <textarea
        {...register("description")}
          type="text"
          name="description"
          required
          placeholder=""
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
        <span class="text-sm text-red-600 hidden" id="error">Description is required</span>
      </div>

     

      

     

    
      <input  class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg focus:outline-none" type="submit" value='Add Service' />
    </form>
  </div>
        </div>
    );
};

export default AddService;