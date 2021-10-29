import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../img/notfound.png'

const NotFound = () => {
    return (
        <div>
            <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
            <div class="mb-10 lg:mb-20">


<img src="'https://flipstore.withun.link/identity/Group%201.svg'" alt="" />
            </div>
            <div class="mb-10 md:mb-20 text-gray-600 font-light">
                <h1 class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">Sorry we couldn't find this page.</h1>
                <p className='md:text-2xl'>But dont worry, you can find plenty of other things on our homepage.</p>

            </div>
            <div class="mb-20 md:mb-0">
                <NavLink to='/' className="mt-4 mb-3 w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-md transition duration-100 hover:scale-110 text-white px-3 hover:text-white">Back to HomePage</NavLink>
            
            </div>
        </div>
        <div class="w-full md:w-6/12 text-center">
         
        <img src={img} class="md:w-full mx-6" alt="" />
        </div>
    </div>
        </div>
    );
};

export default NotFound;