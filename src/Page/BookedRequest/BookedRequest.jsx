import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import Loading from '../../Components/Loading/Loading';
import ServiceCard from '../Services/ServiceCard';
import { AuthContext } from '../../Firebase/AuthProvider';
import UseAxiosSecure from '../../Firebase/UseAxiosSecure';
import Title from '../../Components/Title/Title';

const BookedRequest = () => {
    const axiosSecure = UseAxiosSecure()
    let {userInformation} = useContext(AuthContext)
    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/booked?email=${userInformation?.email}&type=hr`,{
                withCredentials:true
            });
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
        <>
        <Title title={'Booked request'} subtitle={'Your booked requests are organized and accessible in one convenient place. With real-time updates and clear communication, you can stay informed about the progress of your requests at every stage. Whether it’s scheduling, status updates, or modifications, we’ve designed this platform to keep you in control and ensure a seamless experience.'}/>
        <div className='lg:grid grid-cols-2 gap-x-16 px-10'>
            {
                response?.map(item => <ServiceCard key={item._id} service={item}/>)
            }
        </div>
            </>
    );
};
export default BookedRequest;