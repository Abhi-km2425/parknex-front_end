import axios  from "axios"
export const commonAPI=async (httprequest,url,reqBody,reqHeader)=>{

    const reqConfig={
        method:httprequest,
        url,
        data:reqBody,
         headers: reqHeader
    }
    return await axios(reqConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

