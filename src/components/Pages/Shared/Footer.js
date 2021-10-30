import React from 'react';
import { NavLink } from 'react-router-dom';
// import FooterLogo from '../../img/logo.png'
import Footerimg from '../../../img/footer-bg.png'
import insImg1 from '../../../img/instagram1.jpg'
import insImg2 from '../../../img/instagram2.jpg'
import insImg3 from '../../../img/instagram3.jpg'
import insImg4 from '../../../img/instagram4.jpg'
import insImg5 from '../../../img/instagram5.jpg'
import insImg6 from '../../../img/instagram6.jpg'

const Footer = () => {
    return (
        <div className='mt-auto -block'>
       <div class="container mx-auto bg-indigo-500 rounded-lg p-14">
		<form>
			<h1 class="text-center font-bold text-white text-4xl">Find the perfect domain name</h1>
				<p class="mx-auto font-normal text-sm my-6 max-w-lg">Enter your select domain name and choose any
					extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)</p>
				<div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
					<div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<select id="Com" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>com</option>
            <option value="net">net</option>
            <option value="org">org</option>
            <option value="io">io</option>
          </select>
						<button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
	</div>     
<footer className="relative mx-auto bg-blue-100 pt-8 pb-6">

  <div className="container mx-auto px-4">
    <div className="md:flex flex-wrap text-center justify-around lg:text-left">
    <div className=" flex items-center  w-16 h-16 mb-6 rounded-full  ">
        <img src={'FooterLogo'} alt="" />
        <span className='ml-3 font-bold inline text-2xl'>DENTIST</span>
      </div>
      <div className="w-full md:w-8/12 px-4 ">
        <div className="flex flex-wrap items-top mb-6">
      
          <div className="w-full md:w-6/12 px-4">
            <span className="block uppercase text-black text-md font-semibold mb-2">Quick Links</span>
            <ul className="list-unstyled">
              <li>
                <NavLink className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">About Us</NavLink>
              </li>
              <li>
              <NavLink className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Destinations</NavLink>
              </li>
              <li>
              <NavLink className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Latest Blog</NavLink>
              </li>
              <li>
              <NavLink className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Our Team</NavLink>
              </li>
              <li>
              <NavLink className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Contact Us</NavLink>
              </li>
            </ul>
          </div>
         
          <div className="w-full md:w-6/12 px-4 text-center">
            <span className="block uppercase text-black text-md font-semibold mb-2">Instagram Post</span>
            <div className="grid grid-cols-3 w-64 justify-center">
              <img className='w' src={insImg1} alt="" />
              <img className='w' src={insImg2} alt="" />
              <img className='w' src={insImg3} alt="" />
              <img className='w' src={insImg4} alt="" />
              <img className='w' src={insImg5} alt="" />
              <img className='w' src={insImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-black font-semibold py-1">
          <span>Copyright © </span>
          <span id="get-current-year">2021</span>
         
          <NavLink to=''>Ibrahim Sifat</NavLink>.
        </div>
      </div>
    </div>
    
  </div>
    <img className='absolute bottom-0 left-0' src={Footerimg} alt="" />
</footer>
<div className="z-10  social-links bg-gray-900">
<h1>klsdf</h1>
<h1>klsdf</h1>
    </div>
        </div>
    );
};

export default Footer;