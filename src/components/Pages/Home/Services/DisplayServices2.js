import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const cartPlus=<FontAwesomeIcon icon={faCartPlus}/>
const DisplayService2 = (props) => {
  

  const {title,img,price,description,_id}=props.service
const {handledetails}=props
    return (
      <div class="md:w-80 py-5 mx-auto px-3">
      <div class="bg-white relative shadow-lg card-size hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg" src={img} alt="" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class=" h-10 text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{title}</h1>
          <p class="text-gray-700 tracking-wide">{description.slice(0,50)}</p>
          <div className="flex my-3">
            
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <GrayStar></GrayStar>
          </div>
      <div className="flex justify-between items-center">
      <button onClick={()=>handledetails(_id)} class="mt-2 py-2 px-4 text-white bg-blue-900  font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">{cartPlus} <span className='pl-1'>Book</span></button>
         
      </div>
        </div>
        <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">${price}</span>
        </div>
      </div>
    </div>
    );
};
const GrayStar=()=>{
  return(
      <svg className="w-4 h-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
  )
}
const YellowStar=()=>{
  return(
      <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
  )
}
export default DisplayService2;