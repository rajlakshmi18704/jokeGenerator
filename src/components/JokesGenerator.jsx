import React, { useState } from 'react'
import { useEffect } from 'react'

function JokesGenerator() {
    const fetchJoke = async () => {
      
        const response = await fetch(
          'https://dad-jokes7.p.rapidapi.com/dad-jokes/random',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY, // Updated to import.meta.env
              'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        console.log(data)
        setJoke(data?.joke || 
           " No Jokes available"
        );}
    const [joke,setJoke]=useState("")
  useEffect(()=>{
   
fetchJoke()},[])
  return (
    <div>
        <h3>{joke}</h3>

      <button onClick={fetchJoke}>Click</button>
    </div>
  )
}

export default JokesGenerator
