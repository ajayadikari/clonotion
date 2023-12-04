import React from 'react'

const CustomCont = ({ headline, desc, img1, img2 }) => {
    return (
        <div className='CustomCont'>
            <h3>{headline}</h3>
            <p>{desc}</p>
            <div className="overlap-images-container">
                <img className='img1' src={`${img1}`} alt="" />
                <img className='img2' src={`${img2}`} alt="" />
            </div>
        </div>
    )
}

export default CustomCont
