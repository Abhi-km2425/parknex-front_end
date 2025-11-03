//............user side.............

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//register user api

export const registerUserAPI=async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/register`,reqBody)
}

export const userLoginAPI=async(reqBody,reqh)=>{
    return await commonAPI('POST',`${serverURL}/login`,reqBody)
}