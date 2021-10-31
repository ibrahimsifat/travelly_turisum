import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const deleteICon=<FontAwesomeIcon size='2x' icon={faMinusCircle}/>
const DisplayMyBooking = (props) => {
const {title,price,quantity}=props.service

const {handleremoveitem}=props
    return (
        <div>
     <div class="grid grid-cols-12 gap-2">
    <div class="col-span-12 sm:col-span-12 ">
      <div class="bg-indigo-100 py-2 px-4 shadow-md rounded-lg my-4 mx-4">
        <div class=" flex justify-between my-2 px-4 items-center">
            <div class="text-lg font-semibold"> 
              <p>{title}</p>
              <p class="text-gray-700 text-base">{price}</p>
              <p class="text-gray-700 text-base">Quantity: {quantity}</p>
            </div>
            <button className='text-pink-600 transition duration-500 ease-in-out transform  hover:scale-125 ' onClick={()=>handleremoveitem(props.service)}>{deleteICon}</button>
        </div>
      </div>
      
       
    </div>
   
            </div>
        </div>
    );
};

export default DisplayMyBooking;