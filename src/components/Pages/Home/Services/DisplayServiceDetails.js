import React from 'react';

const DisplayServiceDetails = ({match}) => {
    const {title}=match
    return (
        <div className='text-center'>
            <h1>title:{title}</h1>
        </div>
    );
};

export default DisplayServiceDetails;