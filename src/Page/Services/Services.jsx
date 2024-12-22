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
        <div>
            {
                allService.map(item => <ServiceCard key={item._id} service={item}/>)
            }
        </div>
    );
};

export default Services;