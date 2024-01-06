import axios from 'axios'
import React, { useEffect, useState } from 'react'



const five_day = 'api.openweathermap.org/data/2.5/forecast?' //five day api url

const Five_day = ({apiKey ,city}) => {

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get(`${five_day}q=${city}&appid=${apiKey}`)
                console.log(response.data.list.main.temp)
                console.log('helo')
               
            }
            catch (error) {
                if (axios.isCancel(error)) {
                  console.log("Request canceled", error.message);
                } else {
                  console.error(error);
                }
              }
        }
        fetchData()
    },[city])

  return (
    <div>
{/* {tempss} */}
    </div>
  )
}

export default Five_day
