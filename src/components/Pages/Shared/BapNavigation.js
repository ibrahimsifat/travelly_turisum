import React from 'react';
import UseCart from '../../../Hook/UseCart';
import useServices from '../../../Hook/useServices';
import Navigation from './Navigation';

const BapNavigation = () => {

    const [services]=useServices()
const [cart]=UseCart(services)


console.log(cart);
    return (
        <div>
            {
                cart.map(service=><Navigation
                service={service}
                ></Navigation>)
            }
        </div>
    );
};

export default BapNavigation;