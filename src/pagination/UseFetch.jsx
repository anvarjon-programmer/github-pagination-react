import React, { useEffect, useState } from 'react'
import paginate from './Utils'
const url ='https://api.github.com/users/john-smilga/followers?per_page=100';
const UseFetch = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])

    const getProducts = async () =>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setData(paginate(data))
            setLoading(false)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
    return {loading,data}
}

export default UseFetch