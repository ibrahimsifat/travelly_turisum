import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  NavLink } from "react-router-dom";
import useAuth from '../../../Hook/useAuth'
const userIcon=<FontAwesomeIcon icon ={faUser}/>
const  Navigation=({ fixed }) =>{
const {user,logOut}=useAuth()



  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
      
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  "
              
            >
              hello
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
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
               Home
                </NavLink>
                <NavLink to='/aboutus'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
               About Us
                </NavLink>
               
{
  user.email && <div className='flex'> 
    
    <NavLink  to='/mybooking'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
              My Booking
                </NavLink>
    
    <NavLink   to='/manageservices' 
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
       Manage Booking
                </NavLink>
    <NavLink   to='/addservice' 
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
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
    <span className="">{user.photoURL?user.photoURL:userIcon}</span>
  
  </button>
  <ul
    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top ">

  
  { !user.email && <NavLink to='/login'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
               Login
                </NavLink>}
               { !user.email &&<NavLink to='/register'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
               Register
                </NavLink>}
      
 {
   user.email &&   <li onClick={logOut} className="rounded-sm px-3 inline-block py-1 hover:bg-gray-100">Log Out</li>
    
 }

  </ul>
</div>






      
              <li className="nav-item">
                <NavLink to='/'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                  href="#pablo"
                >
                <NavLink to='cart' className=" flex md:mr-6 justify-center items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </NavLink>
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}




export default Navigation;