import{  useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DisplayServices from './DisplayServices';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://gentle-everglades-16293.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    let history=useHistory()
    const handledetails=(id)=>{
        const url=`/serviceDetails/${id}`
        history.push(url)
        }
console.log(services);

    return (
        <div className='container lg:grid-cols-3 my-16 grid md:grid-cols-2 mx-auto'>
           {
               services.map(service=><DisplayServices
               service={service}
               key={service.id}
                handledetails={handledetails}
               ></DisplayServices>)
           }


            
        </div>
    );
};

export default Services;