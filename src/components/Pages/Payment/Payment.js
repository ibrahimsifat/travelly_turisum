import { faChevronLeft, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
const paymentIcon=<FontAwesomeIcon size='2x' icon={faMoneyCheckAlt} />
const arrow=<FontAwesomeIcon size='2x' icon={faChevronLeft} />
const Payment = () => {
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div className="w-full md:w-7/12 mx-auto rounded-lg bg-white shadow-md p-5 text-gray-700">
        <NavLink title='Back to Booking' className='text-green-500' to ='/mybooking'> {arrow}</NavLink>
        <div className="w-full pt-1 pb-5">
            <div className="bg-green-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <p>{paymentIcon}</p>
            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 md:flex -mx-2">
            <div className="px-2">
                <label htmlFor="type1" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-green-500" name="type" id="type1" checked />
                 
                    <img  className="h-8 ml-3" src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" alt="" />
                </label>
            </div>
            <div className="md:px-6 px-2 md:mt-0 mt-6">
                <label htmlFor="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-green-500" name="type" id="type2"/>
            <img  className="h-8 ml-3" src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt="" />
                </label>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors" placeholder="John Smith" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors" placeholder="000" type="text"/>
            </div>
        </div>
        <div className='text-center'>
   
            <NavLink to='/Congratulations'className="   bg-green-500 hover:bg-green-700  duration-300 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">PAY NOW</NavLink>
        </div>
    </div>
</div>
        </div>
    );
};

export default Payment;