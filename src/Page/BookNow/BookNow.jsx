import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BookNow = () => {
  const data = useLoaderData([]);
  let {userInformation} = useContext(AuthContext)
  let {email, photoURL, displayName} = userInformation
  let {
    _id,
    price,
    photo,
    name,
    hr_photo,
    hr_name,
    hr_email,
    description,
    country,
    city,
  } = data;


const handleBooked=(e)=>{
    e.preventDefault()

    let form = e.target
    let date = form.date.value
    let message = form.message.value
    let bookedUserName =displayName
    let bookedUserPhoto = photoURL
    let bookedUserEmail = email
    let serviceId = _id



    let info = {
        serviceId,
        price,
        photo,
        name,
        hr_photo,
        hr_name,
        hr_email,
        description,
        country,
        city,
        date,
        message,
        bookedUserName,
        bookedUserPhoto,
        bookedUserEmail
    }
 

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
            axios.post('http://localhost:5000/booked', info)
        .then(res=> {
            console.log(res.data)
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
    <div>
      <div className=" hero bg-base-200 min-h-[700px]">
        <div className="md:grid grid-cols-2 card bg-base-100 lg:w-10/12 h-[1610px] md:h-[620px] shrink-0 p-6 shadow-2xl">
          <div className="md:pl-4 md:pr-9 md:border-r-4 border-green-600 ">
            <img className="h-80 rounded-md w-full" src={photo} alt="" />
            <h1 className="text-3xl my-4 text-center font-bold">{name}</h1>
            <p className=" font-semibold text-center   my-4">{description}</p>
            <p className="text-xs mt-2 flex items-center gap-1">
              <FaLocationDot /> {city}, {country}
            </p>
            <p className="text-sm font-semibold flex mt-2 items-center gap-1">
              <TbCurrencyTaka size={14} /> {price} BDT
            </p>
          </div>
          <div className="md:pl-6  ">
            <h1 className="text-xl underline font-bold">Provider Information:-</h1>
              <img className="h-9 w-9 rounded-md my-2" src={hr_photo} alt="" /> 
              <p className="text-sm font-bold ">Name: {hr_name}</p> 
              <p className="text-sm font-semibold">Email: {hr_email}</p> 
              {/*  */}
            <h1 className="text-xl text-end mt-10 underline font-bold">Your Information:-</h1>
              <div className="flex justify-end">
            <img className="h-9 w-9 rounded-md my-2" src={photoURL} alt="" /> 
              </div>
              <p className="text-sm text-end font-bold ">Name: {displayName}</p> 
              <p className="text-sm text-end font-semibold">Email: {email}</p> 
            {/*  */}
            <form onSubmit={handleBooked}> 
              <div className="form-control my-5">
          <label className="label">
            <span className="label-text ">Service Taking Date</span>
          </label>
          <input type="date" placeholder="email" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Plan or Your other instruction</span>
          </label>
          <input type="text" placeholder="enter anything" name="message" className="input input-bordered" required />
        </div>
        <input type="submit" className="btn bg-green-500 w-full mt-4 text-white"/>
            </form>
        {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
