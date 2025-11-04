//............user side.............

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//register user api

export const registerUserAPI=async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/register`,reqBody)
}


//login api
export const userLoginAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/login`,reqBody)
}

//booking api
export const createBookingAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/bookings`,reqBody,reqHeader)
}

//get//booking api
export const getUserBookingsAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/get-bookings`,"",reqHeader)
}

//cancel booking
export const cancelBookingAPI = (id,reqBody, headers) => {
  return commonAPI("PUT", `/cancel-booking/${id}`, reqBody, headers);
};


