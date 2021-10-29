import {faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const cartIcon=<FontAwesomeIcon icon={faShoppingBag} />



const DisplayServices = (props) => {
const {title,img,_id}=props.service
const {handledetails}=props
    return (
        <div className="w-72 mx-auto my-8 ">  
        <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
            <div className="overflow-hidden relative">
           
            <img className="w-full transition duration-700 ease-in-out group-hover:opacity-100 group-hover:transform group-hover:scale-150" src={img} alt="" />
            <div className="flex justify-center">
                <div onClick={()=>handledetails(_id)} className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <button className="px-4 m-1 py-1 text-5xl  text-gray-400 transition duration-500 ease-in-out hover:text-green-300">
                      {cartIcon}
                     
                    </button>
                  
                  
                </div>
            </div>
        </div>
        <div className="px-4 py-3  card_hover">
            <a href="# d" className=""><h1 className="text-gray-800 font-semibold text-lg hover:text-green-400 transition duration-300 ease-in-out">{title}</h1></a>
            <div className="flex py-2">
            <div class="flex ">
            
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <YellowStar></YellowStar>
            <GrayStar></GrayStar>
          </div>
                <p className="mr-2 text-xs text-gray-600">$45.00</p>
                    <p className="mr-2 text-xs text-green-600 line-through">$15.00</p>
            </div>
            
        </div>
        </div>
   </div>

    );
};





const GrayStar=()=>{
    return(
        <svg class="w-4 h-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
    )
}
const YellowStar=()=>{
    return(
        <svg class="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
    )
}












export default DisplayServices;