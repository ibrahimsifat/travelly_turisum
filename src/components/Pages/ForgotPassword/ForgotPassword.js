import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
             <div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">

    <div class="text-center m-6">
      <h1 class="text-3xl font-semibold text-gray-700">Forgot your password?</h1>
      <p class="text-gray-500">Just enter your email address below and we'll send you a link to reset your password!</p>
    </div>

    <div class="m-6">
      <form class="mb-4">
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Your email address" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Send reset link</button>
        </div>
        <p class="text-sm text-center text-gray-400">
          Don&#x27;t have an account yet? 
          <a href="#!" class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign up</a>.
        </p>
      </form>
     
      <div class="flex flex-row justify-center mb-8">
        <span class="absolute bg-white px-4 text-gray-500">or sign-in with</span>
        <div class="w-full bg-gray-200 mt-3 h-px"></div>
      </div>
   
      
    </div>
  </div>
        </div>
    );
};

export default ForgotPassword;