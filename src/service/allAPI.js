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
export const cancelBookingAPI=async(id)=>{
    return await commonAPI('PUT',`${serverURL}/cancel-booking/${id}`,)
}

//...................ADMIN SIDE.........................
//post
export const addParkingAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/add-parking`,reqBody,reqHeader)
}


//get
export const getAddedParkingAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/get-parking`,)
}


//delete
export const deletetParkingslotAPI=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/delete-slot/${id}`,)
}


//edit
export const updateParkingAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/update-slot/${id}`,reqBody,reqHeader)
}


//.................for admin dashboard route ui...................
//no of slots booked
export const getAllParkingAPI = async () => {
  return await commonAPI('GET', `${serverURL}/all-parking`,);
};


//todays booking
export const getTodayBookingsAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/get-user-bookings`)
}


//no of active user by booking confiremed with id

export const getActiveUsersAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/geta-active-users`)
}


export const getTodayRevenueAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/admin-today-revenue`)
}


