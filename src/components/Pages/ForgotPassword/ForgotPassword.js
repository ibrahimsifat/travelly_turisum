import React from 'react';

const ForgotPassword = () => {
    return (
        <div className='flex justify-center items-center mb-16'>
             <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">

    <div className="text-center m-6">
      <h1 className="text-3xl font-semibold text-gray-700">Forgot your password?</h1>
      <p className="text-gray-500">Just enter your email address below and we'll send you a link to reset your password!</p>
    </div>

    <div className="m-6">
      <form className="mb-4">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div className="mb-6">
          <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Send reset link</button>
        </div>
        <p className="text-sm text-center text-gray-400">
          Don&#x27;t have an account yet? 
          <a href="#!" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign up</a>.
        </p>
      </form>
     
      <div className="flex flex-row justify-center mb-8">
        <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
        <div className="w-full bg-gray-200 mt-3 h-px"></div>
      </div>
   
      
    </div>
  </div>
        </div>
    );
};

export default ForgotPassword;