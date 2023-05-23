import { GETCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from "axios"
export const getContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/contact/readContact")

        dispatch(
            {
                type : GETCONTACTS,
                payload : res.data.contacts
            }
        )


    } catch (error) {
        console.log(error)
    }
}


export const addContact=(newContact,navigate)=>async(dispatch)=>{
    try {
        await axios.post("/api/contact/createContact",newContact)

        dispatch(getContacts())

        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/getOneContact/${id}`)

        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.oneContact
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(upContact,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,upContact)

        dispatch(getContacts())

        navigate("/ListContact")
    } catch (error) {
        console.log(error)
    }
    
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)

        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}