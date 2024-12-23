import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import Loading from '../../Components/Loading/Loading';
import ServiceCard from '../Services/ServiceCard';
import { AuthContext } from '../../Firebase/AuthProvider';

const BookedServices = () => {
    let {userInformation} = useContext(AuthContext)
    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/booked?email=${userInformation?.email}`);
            return res.data; // Extract data here
        }
    });

    if (isLoading) {
        return <Loading/>; // Handle loading state
    }

    if (isError) {
        return <p>Error: {error.message}</p>; // Handle error state
    }


    console.log(response)
    return (
        <div className='lg:grid grid-cols-2 gap-x-16 px-10'>
            {
                response?.map(item => <ServiceCard key={item._id} service={item}/>)
            }
        </div>
    );
};

export default BookedServices;