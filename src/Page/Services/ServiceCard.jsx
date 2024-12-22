import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {
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
  } = service;
  return (
    <div className="flex p-5 rounded-2xl bg-base-200  mt-8  shadow-xl ">
      <div className="h-48 w-56 mr-6">
        <img className="h-full rounded-md min-w-56" src={photo} alt="" />
      </div>
      <div className="pl-6 border-l-2 border-gray-400"> 
        <h1 className="text-xl font-bold">{name}</h1> 
        <div className="flex items-center mt-2 space-x-2">
          <img className="h-6 w-6 rounded-full " src={hr_photo} alt="" />
          <p className="text-sm font-bold ">{hr_name}</p>
        </div>
        <p className="text-xs mt-2 flex items-center gap-1"><FaLocationDot />  {city}, {country}</p>
        <p className="text-sm   my-2">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
        <p className="text-sm font-semibold flex items-center gap-1"><TbCurrencyTaka size={14}/>  {price} BDT</p>
        <Link to={`/details/${_id}`}>
        <button className="btn btn-sm mt-2 text-sm bg-green-400 text-white">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
