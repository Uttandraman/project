import React, { useState ,useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    const [apidata,setApidata]=useState("");
    useEffect(() => {
      
        axios.get("https://jsonfakery.com/movies/random")
        .then(response =>{
            console.log("response=============>>>>>",response)
            setApidata(response.data.casts[0].name)
        })
    }, []);

  return (
    <div>
        <h1>{apidata}</h1>
    </div>
  )
}

export default Axios