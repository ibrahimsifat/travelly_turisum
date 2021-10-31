import React from 'react';
import UseCart from '../../../Hook/UseCart';
import useServices from '../../../Hook/useServices';
import BookCart from './BookCart';
import DisplayMyBooking from './DisplayMyBooking';
import { removeFromDb } from '../../../Hook/fakedb';
const MyBooking = () => {
    
const [services]=useServices()
const [cart,setCart]=UseCart(services)


 const handleremoveitem=(service)=>{
        const newcart=cart.filter(cartService=>cartService._id!==service._id)
        setCart(newcart)
        removeFromDb(service._id)
    }

return (
    <div className="container md:grid grid-cols-3 my-16">
        <div className="left col-span-2">
            {
            cart.map(service=><DisplayMyBooking
            service={service}
            key={service._id}
            handleremoveitem={handleremoveitem}
            ></DisplayMyBooking>)
}
        </div>
    <div className="cart">
        <BookCart
        cart={cart}
        ></BookCart>
    </div>

    </div>
    );
};

export default MyBooking;


// let history=useHistory()
// const handlePlaceOrder=()=>{
// history.push('/shipping')
// }




