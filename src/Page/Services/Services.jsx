import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import ServiceCard from './ServiceCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './../../Components/Loading/Loading';
import Title from '../../Components/Title/Title';

const Services = () => {
    const [search, setSearch] = useState('');  
 
    const handleSearch = useCallback(
        debounce((query) => {
            setSearch(query);
        }, 500), [] // Only re-run the debounce if search changes
    );

    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService', search], // Using search in the query key to refetch data when search changes
        queryFn: async () => {
            const res = search
                ? await axios.get(`http://localhost:5000/service2?searchParams=${search}`)
                : await axios.get('http://localhost:5000/service2');
            return res.data;
        },
    });

    // if (isLoading) {
    //     return <Loading />; // Handle loading state
    // }

    if (isError) {
        return <p>Error: {error.message}</p>; // Handle error state
    }

    return (
        <>
             <Title title={'Services'} subtitle={'We aim to provide you with the tools and strategies needed to excel in today’s digital landscape. From cutting-edge design to seamless user experiences, our services are crafted to suit your unique goals. Let us help you transform your ideas into reality and guide you toward online success.'}/>
            <div className="flex justify-end px-20 my-5">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)} // Apply debounced search
                    />
                </div>
            </div>
            <div className="my-20 px-5 md:px-16">
                {response?.map(item => (
                    <ServiceCard key={item._id} service={item} />
                ))}
            </div>
        </>
    );
};

export default Services;
