import React from 'react';

const ServiceCard = ({service}) => {
    console.log(service)
    return (
        <div>
            {service?._id}
        </div>
    );
};

export default ServiceCard;