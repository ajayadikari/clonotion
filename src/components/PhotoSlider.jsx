import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSliderImgNum4 } from '../redux/sliderSlice'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PhotoSlider = (num) => {
    const images = useSelector(state => state.slider.sliderImages4)
    const headings = useSelector(state => state.slider.sliderHeadings)
    const photoNum = useSelector(state => state.slider.sliderImgNum4)
    const dispatch = useDispatch()
    const onClickHandler = (isInc) => {
        if (isInc) {
            const num = photoNum + 1
            if (num < images.length) dispatch(setSliderImgNum4(num));
            else dispatch(setSliderImgNum4(0))
        }
        else {
            const num = photoNum - 1
            if (num > 0) dispatch(setSliderImgNum4(num));
            else dispatch(setSliderImgNum4(images.length - 1))
        }
    }
    return (
        <>
            <div className="photo-slider">
                <FaAngleLeft className='left-icon' onClick={() => onClickHandler(false)} />
                <img src={`${images[photoNum]}`} style={{ width: '65%' }} alt="" />
                <p>{headings[photoNum]}</p>
                <FaAngleRight className='right-icon' onClick={() => onClickHandler(true)} />
            </div>
        </>
    )
}

export default PhotoSlider
