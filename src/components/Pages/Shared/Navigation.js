import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  NavLink } from "react-router-dom";
import useAuth from '../../../Hook/useAuth'
import logo from '../../../img/logo.png'

const userIcon=<FontAwesomeIcon icon ={faUser}/>
const  Navigation=({ fixed}) =>{
  // const {cartService,setCatService}=useState({})
  
const {user,logOut}=useAuth()
// const [cart]=UseCart(services)
// const cartService=cart[0];
// console.log(cartService);
// console.log(cart);
// // const service=cart.map(service=>{console.log(service);})
// // console.log(service);
// for(const cartservice of cart){
//   setCatService(cartservice);
// }
// console.log(cartService);
// const {cart}=props

// console.log(cart)
// let total=0
// let totalQuantity=0
// for (const cartProduct of cart){
//     if(!cartProduct.quantity){
//         cartProduct.quantity=1
        
//     }
// total=total+cartProduct.price*cartProduct.quantity
// totalQuantity=cartProduct.quantity+totalQuantity
//     // console.log(cartProduct)
// }
// const shipping=total>0?15:0
// const tax=(total+shipping)*0.15
// const grandTotal=total+shipping+tax

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1  mb-3">
      
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  "
              
            >
              <img className='w-20 mt-2' src={logo} alt="" />
            </NavLink>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">dfs</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
                <NavLink to='/'
                  className="px-3 py-2 flex hover:text-blue-500  items-center text-sm uppercase font-bold leading-snug   "
                  href="#pablo"
                >
               Home
                </NavLink>
                <NavLink to='/aboutus'
                  className="px-3 py-2 flex hover:text-blue-700 items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
               About Us
                </NavLink>
               
{
  user.email && <div className='flex'> 
    
    <NavLink  to='/mybooking'
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
              My Booking
                </NavLink>
    
    <NavLink   to='/manageservices' 
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
       Manage Booking
                </NavLink>
    <NavLink   to='/addservice' 
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
       Add Service
                </NavLink>
    </div>
    
}





                <div className="group inline-block z-20 cursor-pointer	">
  <button
    className="focus:outline-none px-3 py-2  "
  >
    <span className="">{user.photoURL?<img src={user.photoURL} alt='...'/>:userIcon}</span>
  
  </button>
  <ul
    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top ">

  
  { !user.email && <NavLink to='/login'
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
               Login
                </NavLink>}
               { !user.email &&<NavLink to='/register'
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug   hover:text-blue-500"
                  href="#pablo"
                >
               Register
                </NavLink>}
      
 {
   user.email &&   <li onClick={logOut} className="rounded-sm px-3 inline-block py-1 hover:bg-gray-100">Log Out</li>
    
 }

  </ul>
</div>






      
             
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}




export default Navigation;