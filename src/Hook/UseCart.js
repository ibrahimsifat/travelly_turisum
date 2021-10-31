import  { useEffect, useState } from 'react';
import { getStoredCart } from './fakedb';

const UseCart = (services) => {
    const [cart,setCart]=useState([])
useEffect(()=>{
const savecart=getStoredCart()
if(services.length){
    let stroedCart=[]
    for(const service_id in savecart){
        const addedService=services.find(service=>service._id===service_id)
        if(addedService){
            const productQuantity=savecart[service_id]
addedService.quantity=productQuantity
stroedCart.push(addedService)
        }
    }
    setCart(stroedCart)
}
},[services])
    return [cart,setCart]
};

export default UseCart;