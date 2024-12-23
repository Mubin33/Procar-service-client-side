import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddService = () => {
    const {userInformation} = useContext(AuthContext) 
    const [bid, setBid] = useState(0)
    const [wrongDescription, setWrongDescription] = useState(false) 
    const [wrongPhoto, setWrongPhoto] = useState(false) 

    let hr_email = userInformation?.email
    let hr_name = userInformation?.displayName
    let hr_photo = userInformation?.photoURL

    const handleForm=(e)=>{
        e.preventDefault()
 
         let form = e.target
         const photo = form.photo.value
         const name = form.name.value
         const city = form.city.value
         const price = form.price.value
         const country = form.country.value
         const description = form.description.value

         let info = {photo, bid, name, city, country, price, description, hr_email, hr_name, hr_photo}
 
         axios.post('http://localhost:5000/service', info)
         .then(res => {
           Swal.fire({
             icon: "success",
             title: "WOW.....",
             text: "Service added successfully!", 
           });
           console.log(res.data); // Logs the response from the server
         })
         .catch(error => {
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Something went wrong!", 
           });
           console.error(error); // Logs the error if the request fails
         });
       



        if (!/^https?:\/\/.+\..+/.test(photo)) {
            setWrongPhoto(true)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Submit the photo URL", 
            });
            return;
          }else{
            setWrongPhoto(false)
          }

        if (!description || description.length < 60) {
            setWrongDescription(true)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "description must have at least 60 characters.", 
            });   
            return;
          }else{
            setWrongDescription(false)
          } 
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-[650px]">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Add Services</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body ">
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Photo{wrongPhoto && <span className="text-xs text-red-600">*Only photo URL*</span>}</span> 
          </label>
          <input type="url" placeholder="photo URL" name='photo' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service Name" name='name' className="input input-bordered"  required/>
        </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area City</span>
          </label>
          <input type="text" placeholder="city name" name='city' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area country</span>
          </label>
          <input type="text" placeholder="country name" name='country' className="input input-bordered"  required/>
        </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="set price" name='price' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description{wrongDescription && <span className="text-xs text-red-600">*Minimum 60 characters*</span>}</span>
          </label>
          <input type="text" placeholder="description"name='description' className="input input-bordered"  />
        </div>
        </div>
        {/*  */}
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddService;