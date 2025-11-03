import axios  from "axios"
export const commonAPI=async (httprequest,url,reqBody)=>{

    const reqConfig={
        method:httprequest,
        url,
        data:reqBody
    }
    return await axios(reqConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}