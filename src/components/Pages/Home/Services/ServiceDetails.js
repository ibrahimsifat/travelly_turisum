import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../../Hook/useServices';
import DisplayServiceDetails from './DisplayServiceDetails';

const ServiceDetails = () => {
const [services]=useServices()

const {serviceId}=useParams()
const matched=services.filter(sr=>sr._id===serviceId)


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