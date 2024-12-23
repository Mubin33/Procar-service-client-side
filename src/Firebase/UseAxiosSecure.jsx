import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  let { signOutUser } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error catch in interceptors", error);
        if (error.status === 401 || error.status === 403) {
          // logout
          signOutUser()
            .then((result) => {
              console.log(result);
              navigate("/login");
            }).catch((error) => {
              console.log(error.message);
            });
          //
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};
 


export default UseAxiosSecure;