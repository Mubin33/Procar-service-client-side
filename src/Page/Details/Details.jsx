import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData([])
    
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default Details;