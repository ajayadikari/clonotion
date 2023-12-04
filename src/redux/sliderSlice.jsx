import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardName: 'AI',
  sliderImages: [
    '/assets/engineering.png',
    '/assets/kanban.png',
    '/assets/meeting-notes.png',
    '/assets/product.png'
  ],
  sliderImgNum: 0,
  sliderImages2: [
    '/assets/engineering.png',
    '/assets/kanban.png',
    '/assets/meeting-notes.png',
    '/assets/product.png',
    '/assets/engineering.png',
    '/assets/kanban.png'
  ],
  sliderImgNum2: 0,
  sliderImages3: [
    '/assets/engineering.png',
    '/assets/kanban.png',
    '/assets/meeting-notes.png',
    '/assets/product.png',
    '/assets/engineering.png',
    '/assets/kanban.png'
  ],
  sliderImgNum3: 0, 
  sliderImages4:[
    '/assets/engineering.png',
    '/assets/kanban.png',
    '/assets/meeting-notes.png',
    '/assets/product.png',
  ],
  sliderHeadings: [
    'Community meet-up in Tokyo',
    'Notion ambassador event in New York',
    'Sharing Notion setups in San Francisco',
    'Coffee pop-up in London'
  ],
  sliderImgNum4: 0,
}

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSliderImgNum: (state, action) => {
      state.sliderImgNum = action.payload
    },
    setSliderImgNum2: (state, action) => {
      state.sliderImgNum2 = action.payload
    },
    setSliderImgNum3: (state, action) => {
      state.sliderImgNum3 = action.payload
    }, 
    setSliderImgNum4:(state, action) =>{
      state.sliderImgNum4 = action.payload
    }
  },
})

export const { setSliderImgNum, setSliderImgNum2, setSliderImgNum3, setSliderImgNum4 } = sliderSlice.actions

export default sliderSlice.reducer
