import axios from 'axios';
import React, { useContext  } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import ServiceCard from '../Services/ServiceCard';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const ManageService = () => {
    let {userInformation} = useContext(AuthContext) 
  const navigate = useNavigate()


    const { data: postedService, isLoading, isError, error } = useQuery({
      queryKey: ['allService'],
      queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/service?email=${userInformation?.email}`);
          return res.data;  
      }
  });

  if (isLoading) {
      return <Loading/>; 
  }

  if (isError) {
      return <p>Error: {error.message}</p>; // Handle error state
  }



    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/service?email=${userInformation?.email}` )
    //     .then(res =>{
    //         setPostedService(res.data)
    //     })
    // },[ userInformation?.email])




    const handleDelete=(id)=>{


        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Confirm!"
        }).then((result) => {
          if (result.isConfirmed) {
              axios.delete(`http://localhost:5000/service/${id}`)
          .then(res=> {
            navigate('/')
          })
          .catch(error=>{ 
              Swal.fire({
                  title: "Opps!!",
                  text: "Something want wrong",
                  icon: "error"
                });
          })
            Swal.fire({
              title: "Booked!",
              text: "Your request is pending.",
              icon: "success"
            });
          }
        });
      }



    return (
        <>
        <h1 className='text-3xl mt-10 underline font-bold text-center'>Manage Services</h1>
        <div className='my-20 px-5  md:px-16'>
            {
                postedService?.map(item=> <ServiceCard key={item._id} handleDelete={handleDelete} service={item}/>)
            }
        </div>
        </>
    );
};

export default ManageService;