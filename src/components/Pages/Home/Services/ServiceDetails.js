import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplayServiceDetails from './DisplayServiceDetails';

const ServiceDetails = () => {
const [service,setService]=useState([])
useEffect(()=>{
fetch('https://gentle-everglades-16293.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setService(data))
},[])
const {serviceId}=useParams()
const matched=service.filter(sr=>sr._id===serviceId)
console.log(serviceId);
console.log(matched);
    return (
        <div>
            {
                matched.map(match=><DisplayServiceDetails
                
                key={match._id}
                match={match}
                ></DisplayServiceDetails>)
            }
        </div>
    );
};

export default ServiceDetails;