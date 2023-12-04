import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setSliderImgNum } from '../redux/sliderSlice'

const Card = ({ name, desc, imgNum }) => {
    const dispatch = useDispatch();
    const sliderImgNum = useSelector(state => state.slider.sliderImgNum)
    const hoverHandler = () => {
        console.log(imgNum)
        dispatch(setSliderImgNum(imgNum))
    }
    return (
        <div className={`card ${sliderImgNum === imgNum ? 'active' : ''}`} onMouseEnter={() => hoverHandler()}>
            <div>
                <img src="" alt="" />
                <h2>{name}</h2>
            </div>
            <div className="movable-box">
                <p>{desc}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Card
