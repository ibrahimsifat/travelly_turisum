
import { useHistory} from 'react-router';


import useServices from '../../../../Hook/useServices';

import DisplayServices2 from './DisplayServices2';

const Services = () => {
    // const spinner=<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    const [services]=useServices()
    let history=useHistory()
    
    const handledetails=(id)=>{
        const url=`/serviceDetails/${id}`
        history.push(url)
        }
console.log(services);
    return (
        <div className='container lg:grid-cols-3 my-16 grid md:grid-cols-2 mx-auto'>
           {
               services.map(service=><DisplayServices2
               service={service}
               key={service.id}
                handledetails={handledetails}
               ></DisplayServices2>)
           }


            
        </div>
    );
};

export default Services;