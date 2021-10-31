import React from 'react';
import { useParams } from 'react-router';
import '../../../../App.css';

const ServiceBooking = () => {
  const {serviceId}=useParams()
  console.log(serviceId);
const handleOnSubmit=()=>{

  
}
    return (
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Book This Package
</h1>
   
        
    
         
    
        
    
          <div className="flex flex-row space-x-4">
            <div className="relative z-0 w-full mb-5">
              <input
              required
                type="text"
                name="date"
                placeholder=" "
                onclick="this.setAttribute('type', 'date');"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="date" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
              <span className="text-sm text-red-600 hidden" id="error">Date is required</span>
            </div>
            <div className="relative z-0 w-full">
              <input
              required
                type="text"
                name="time"
                placeholder=" "
                onclick="this.setAttribute('type', 'time');"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="time" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
              <span className="text-sm text-red-600 hidden" id="error">Time is required</span>
            </div>
          </div>
    
          <div className="relative z-0 w-full mb-5">
            <input
              type="number"
              name="money"
              placeholder=" "
              className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
            <label htmlFor="money" className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Amount</label>
            <span className="text-sm text-red-600 hidden" id="error">Amount is required</span>
          </div>
    
          <div className="relative z-0 w-full mb-5">
            <input
            
              type="text"
              name="duration"
              placeholder=" "
              className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <div className="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
            <label htmlFor="duration" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
            <span className="text-sm text-red-600 hidden" id="error">Duration is required</span>
          </div>
    
          <button
          onClick={handleOnSubmit}
         
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-900 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
          >
            Book Now
          </button>
       
      </div>
    );
};

export default ServiceBooking;