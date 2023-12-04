import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const TempGrid = ({ name }) => {
    console.log(name)
    return (
        <div className='temp-grid'>
            <h2>{name}</h2>
            <button>Get Template <FaArrowRight /></button>
        </div>
    )
}

export default TempGrid
