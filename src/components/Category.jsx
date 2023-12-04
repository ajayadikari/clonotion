import React from 'react'
import './category.css'
import { useSelector } from 'react-redux'
import { setSliderImgNum3 } from '../redux/sliderSlice'
import { useDispatch } from 'react-redux'

const Category = ({ name, image, num }) => {

  const images = useSelector(state => state.slider.sliderImages3)
  const imgNum = useSelector(state => state.slider.sliderImgNum3)
  const dispatch = useDispatch()

  const imageHandler = (num) => {
    dispatch(setSliderImgNum3(num))
  }
  return (
    <div className={`category ${imgNum == num && 'active-category'}`} onClick={() => imageHandler(num)}>
      <img src={`${image}`} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export default Category
