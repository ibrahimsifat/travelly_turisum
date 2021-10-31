import React from 'react';
import { NavLink } from 'react-router-dom';

const BookCart = (props) => {
    const {cart}=props

console.log(cart)
let total=0
let totalQuantity=0
for (const cartProduct of cart){
    if(!cartProduct.quantity){
        cartProduct.quantity=1
        
    }
total=total+cartProduct.price*cartProduct.quantity
totalQuantity=cartProduct.quantity+totalQuantity
    // console.log(cartProduct)
}
const shipping=total>0?15:0
const tax=(total+shipping)*0.15
const grandTotal=total+shipping+tax
    return (
        <div>
       
             <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-blue-100 py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Total Item:</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      
                      <p> {totalQuantity} </p>
                   
                  </div>
                </div>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Shipping & Handling:</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      
                      <p> $ {shipping.toFixed(2)} </p>
                   
                  </div>
                </div>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Estimated Tax:</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      
                      <p> $ {tax.toFixed(2)} </p>
                   
                  </div>
                </div>
          </div>
      
      </div>
       <div className="bg-blue-100 py-4 px-4 shadow-md rounded-lg my-4 mx-4">
   
          <div className="flex justify-center items-center text-center">
            <div className="text-xl font-semibold"> 
                <p>Total Price</p>
                <p className="text-5xl"> $ {grandTotal}</p>
            </div>
          </div>
    
       </div>
       <NavLink
         to='/payment'

            className="mx-auto px-6 mb-10 block my-3 md:w-64 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-900 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
          >
            Book Now
          </NavLink>
    </div>
        </div>
    );
};

export default BookCart;