import React from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './../../Components/Loading/Loading';

const Services = () => {
    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/service');
            return res.data; // Extract data here
        }
    });

    if (isLoading) {
        return <Loading/>; // Handle loading state
    }

    if (isError) {
        return <p>Error: {error.message}</p>; // Handle error state
    }

    return (
        <>
            <h1 className='text-3xl mt-10 underline font-bold text-center'>All Services</h1>
            <div className='my-20 px-5 md:px-16'>
                {
                    response?.map(item => <ServiceCard key={item._id} service={item} />)
                }
            </div>
        </>
    );
};

export default Services;
