import React, { useState, useEffect } from 'react'

async function getPing() {
    const request = Date.now();
    try {
      const url = "http://localhost:5173/"
      await fetch(url)
      return Date.now() - request
    } catch (error) {
      console.log(error);
      return null;
    }
}

const Timer = () => {
    const [time, setTime] = useState(0);
    const [ping, setPing] = useState(null);
    const duration = 1000 + ping;
    useEffect(() => {
      getPing().then((pingTime) => {
        setPing(pingTime)
      })
    }, [])

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(time + 1)
      }, duration);
  
      return () => {
        clearInterval(timer)
      }
    }, [time])
  
    return (
      <>
        <div className="text-4xl text-white font-bold m-[1rem]">Time: {time}</div>
      </>
    )
}

export default Timer
