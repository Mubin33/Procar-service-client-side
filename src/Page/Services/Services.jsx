import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';

const Services = () => {
    let [allService, setAllService] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/service')
        .then(res=>setAllService(res.data))
    },[])
// console.log(allService)
    return (
        <>
        <h1 className='text-3xl mt-10 underline font-bold text-center'>All Services</h1>
        <div className='my-20 px-5  md:px-16'>
            {
                allService.map(item => <ServiceCard key={item._id} service={item}/>)
            }
        </div>
                </>
    );
};

export default Services;