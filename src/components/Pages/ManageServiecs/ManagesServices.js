import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
const deleteICon=<FontAwesomeIcon size='2x' icon={faTrashAlt}/>
const editICon=<FontAwesomeIcon size='2x' icon={faEdit}/>
const ManageServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://gentle-everglades-16293.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const handleDelete=(id)=>{
const url=`https://gentle-everglades-16293.herokuapp.com/services${id}`
fetch(url,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount){
        const remaning=services.filter(service=>service._id!==id)
    setServices(remaning)
    }
    
})
    }
    return (
        <div>
            <ul>
                {
                    services.map(service=><DisplayManageService
                    key={service._id}
                    service={service}
                    handleDelete={handleDelete}
                    ></DisplayManageService>)
                }
            </ul>
        </div>
    );
};


const DisplayManageService=(props)=>{
    const {title,price,_id}=props.service
    const {handleDelete}=props
    return(
        <div class=" md:w-8/12 mx-auto px-5 bg-blue-100 py-2 px-4 mx-5 shadow-md rounded-lg my-4">
        <div class=" flex justify-between my-2 px-4 items-center">
            <div class="text-lg font-semibold"> 
              <p>{title}</p>
              <p class="text-gray-700 text-base">{price}</p>
              
            </div>
            <div>
            <button className=' mr-5 text-blue-600 transition duration-500 ease-in-out transform  hover:scale-125 ' 
            onClick={()=>handleDelete(_id)}
            >{editICon}</button>
            <button className='text-blue-600 transition duration-500 ease-in-out transform  hover:scale-125 ' 
            onClick={()=>handleDelete(_id)}
            >{deleteICon}</button>
            
            </div>
        </div>
        </div>
    )
}
export default ManageServices;