import React from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from '../../Page/Services/ServiceCard';
import Title from '../Title/Title';

const TopService = () => {
    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService'], // Using search in the query key to refetch data when search changes
        queryFn: async () => {
            const res =  await axios.get('https://mubins-server-project.vercel.app/service2');
            return res.data;
        },
    });

    if (isLoading) {
        return <Loading />; 
    }

    if (isError) {
        return <p>Error: {error.message}</p>;  
    }


    const sortedServices = response.sort((a, b) => b.bid - a.bid);
    return (
        <div className='mt-28'>
            <Title title={'Top booked service'}/>
            <div className="my-1 px-5 md:px-32">
                {sortedServices?.map(item => (
                    <ServiceCard key={item._id} service={item} />
                ))}
            </div>
        </div>
    );
};

export default TopService;