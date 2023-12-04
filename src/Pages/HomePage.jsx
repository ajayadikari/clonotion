import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import Card from '../components/Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Grid from '../components/Grid';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setSliderImgNum, setSliderImgNum2, setSliderImgNum3 } from '../redux/sliderSlice';
import Category from '../components/Category';
import CustomCont from '../components/CustomCont';
import PhotoSlider from '../components/PhotoSlider';
import CommentBox from '../components/CommentBox';
import TempGrid from '../components/TempGrid';


const HomePage = () => {
    const dispatch = useDispatch()
    const sliderImgNum = useSelector(state => state.slider.sliderImgNum)
    const sliderImages = useSelector(state => state.slider.sliderImages)
    const sliderImgNum2 = useSelector(state => state.slider.sliderImgNum2)
    const sliderImages2 = useSelector(state => state.slider.sliderImages2)
    const sliderImgNum3 = useSelector(state => state.slider.sliderImgNum3)
    const sliderImages3 = useSelector(state => state.slider.sliderImages3)



    const imageHandler = (isInc) => {
        if (isInc) {
            let num = sliderImgNum - 1;
            if (num >= 0) dispatch(setSliderImgNum(num));
            else dispatch(setSliderImgNum(3))
        }
        else {
            let num = sliderImgNum + 1
            if (num < 4) dispatch(setSliderImgNum(num));
            else dispatch(setSliderImgNum(0))
        }
        console.log(sliderImgNum)

    }
    const imageHandler2 = (num) => {
        console.log(num)
        dispatch(setSliderImgNum2(num))
    }
    // useEffect(() => {

    // }, [sliderImgNum])

    useEffect(() => {
        const interval = setInterval(() => {

            nextSlide();
        }, 2500)
        return () => clearInterval(interval)
    }, [sliderImgNum2, sliderImgNum3])

    const nextSlide = () => {
        if (sliderImgNum2 < sliderImages2.length - 1) dispatch(setSliderImgNum2(sliderImgNum2 + 1))
        else dispatch(setSliderImgNum2(0))

        if (sliderImgNum3 < sliderImages3.length - 1) dispatch(setSliderImgNum3(sliderImgNum3 + 1))
        else dispatch(setSliderImgNum3(0))
    }






    return (
        <>
            <div className="hero-section">
                <div className='hero-text'>
                    <h1 style={{ fontSize: "60px" }}>Write, plan, share.</h1>
                    <h1 style={{ fontSize: "60px" }}>With AI at your side.</h1>
                    <h4 style={{ fontSize: "24px" }}>Notion is the connected workspace where better, faster work happens.</h4>
                    <button className='black-btn'>Get Notion free <FaArrowRight /></button>
                </div>
                <img src="assets/home-hero.jpg" alt="" />
            </div>

            <div className="section-2">
                <div className="card-section">
                    <Card name={'AI'} desc={'Ask literally anything, Notion will answer'} imgNum={0} />
                    <Card name={'Wikis'} desc={'Centralise your knowledge'} imgNum={1} />
                    <Card name={'Projects'} desc={'Manage your complex project without chaos'} imgNum={2} />
                    <Card name={'Docs'} desc={'Simple, Powerful, Beautiful, Next-gen...'} imgNum={3} />
                </div>
                <div className="image-slider">
                    {/* <div className="left-img"></div> */}
                    <FaAngleLeft onClick={() => imageHandler(true)} className='leftIcon' />
                    <div >
                        <img src={`${sliderImages[sliderImgNum]}`} alt="" />
                        <FaAngleRight onClick={() => imageHandler(false)} className='rightIcon' />
                    </div>
                    {/* <div className="right-img"></div> */}
                </div>
            </div>


            <div className="section-3">
                <div className="main">
                    <h1>Millions runs on notion everyday</h1>
                    <p>Powering the world’s best teams, from next-generation startups</p>
                    <p>to established enterprises.</p>
                    <button>Read customer stories<FaArrowRightLong /></button>
                </div>
                <div className="companies">
                    <div className="images-cont">
                        <div className="cont-1 cont">
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                        </div>
                        <div className="cont-2 cont">
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                        </div>
                        <div className="cont-3 cont">
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                            <img src="/assets/figma-logo.png" style={{ width: '150px' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4">
                <div className="img-cont">
                    <div className="upper-cont">
                        <div>
                            <h1>Consolidate tools.</h1>
                            <h1>Cut costs.</h1>
                        </div>
                        <img src="/assets/giant-pencil-illustration.webp" alt="" />
                    </div>
                    <img src="/assets/tools-strikethrough-V2.webp" alt="" />
                </div>
                <h1>We got rid of nearly a dozen different tools because of</h1>
                <h1>what Notion does for us.</h1>
                <div className="flex" style={{ flexDirection: 'column', alignItems: 'flex-end', width: '50%', margin: '10px 0px' }}>
                    <h4>Justin Watt</h4>
                    <p>Director of Ops & marketing, Metalab</p>
                </div>
            </div>

            <div className="section-5">
                <div className="inner-box">
                    <img src="" alt="" />
                    <h1>Powerful building blocks</h1>
                    <div className="auto-slider-container">
                        <img src="" alt="" />
                        <h2 style={{ lineHeight: '30px' }}>Visualize, filter & sort anyway you want</h2>
                        <p style={{ lineHeight: '30px' }}>Show only tasks assigned to you, or items marked as urgent. Break</p>
                        <p style={{ lineHeight: '30px' }}>down any project in the way that’s most helpful to you.</p>
                        <div className="auto-slider">

                            <img src={`${sliderImages2[sliderImgNum2]}`} alt="" />

                            <div className="buttons">
                                <button className={`${sliderImgNum2 == 0 && 'active-btn'}`} onClick={() => imageHandler2(0)}>Board</button>
                                <button className={`${sliderImgNum2 == 1 && 'active-btn'}`} onClick={() => imageHandler2(1)}>Table</button>
                                <button className={`${sliderImgNum2 == 2 && 'active-btn'}`} onClick={() => imageHandler2(2)}>Timeline</button>
                                <button className={`${sliderImgNum2 == 3 && 'active-btn'}`} onClick={() => imageHandler2(3)}>Calender</button>
                                <button className={`${sliderImgNum2 == 4 && 'active-btn'}`} onClick={() => imageHandler2(4)}>Gallery</button>
                                <button className={`${sliderImgNum2 == 5 && 'active-btn'}`} onClick={() => imageHandler2(5)}>List</button>
                            </div>
                        </div>
                    </div>

                    <div className="inner-box-2">
                        <CustomCont headline={'Customize the info you track'} desc={'Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.'} img1={'./assets/operations.png'} img2={'./assets/operations.png'} />
                        <CustomCont headline={'Build any page, communicate any idea'} desc={'Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases.'} img1={'./assets/operations.png'} img2={'./assets/operations.png'} />
                    </div>

                </div>
            </div>

            <div className="section-6">

            </div>

            <div className="section-7">
                <h1>Every time, side-by-side</h1>
                <div className="categories">
                    <Category name={'Engineering'} image={'/assets/calendar.png'} num={1} />
                    <Category name={'Design'} image={'/assets/calendar.png'} num={2} />
                    <Category name={'Product'} image={'/assets/calendar.png'} num={3} />
                    <Category name={'Marketing'} image={'/assets/calendar.png'} num={4} />
                    <Category name={'Operations'} image={'/assets/calendar.png'} num={5} />
                    <Category name={'HR'} image={'/assets/calendar.png'} num={6} />
                </div>
                <div className="slider">
                    <img src={`${sliderImages3[sliderImgNum3]}`} alt="" />
                </div>
            </div>

            <div className="section-8">
                <h1>Join a global movement.</h1>
                <h1>Unleash your creativity.</h1>
                <p>Our vibrant community produces content, teaches courses, and leads events all over</p>
                <p>the world.</p>
                <button>Learn more</button>
                <img src="/assets/avatars.webp" alt="" />
            </div>

            <div className="section-9">
                <div className="grid-container">
                    <Grid num={"1m"} desc={"community members"} />
                    <Grid num={"150"} desc={"community groups"} />
                    <Grid num={"50"} desc={"countries represented"} />
                </div>
                <div className="grid-container-2">
                    <div className='inner-grid'>
                        <h4>An always-on support network</h4>
                        <p>Swap setups and share tips in over 149 online communities.</p>
                        <img src="/assets/community-icons-V2.webp" alt="" />
                    </div>
                    <div className='inner-grid'>
                        <h4>Choose your language</h4>
                        <p>Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</p>
                        <img src="/assets/welcome-to-notion.webp" alt="" />
                    </div>
                </div>
                <div className="grid-container-3">
                    <div>
                        <PhotoSlider />
                        <div className='inner-cont-2'>
                            <CommentBox name={'Deborah Mecca'} userId={'@DebMecca'} comment={'I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasnt that I hated documenting, I just hated Google Docs.'} />
                            <CommentBox name={'Deborah Mecca'} userId={'@DebMecca'} comment={'I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasnt that I hated documenting, I just hated Google Docs.'} />
                            <CommentBox name={'Deborah Mecca'} userId={'@DebMecca'} comment={'I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasnt that I hated documenting, I just hated Google Docs.'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-10">
                <h1>Endless ways to use it</h1>
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>Browse all topics <FaArrowRight /></button>
                <div className="container">
                    <div className="left">
                        <h3>Company wiki</h3>
                        <button>Get Template <FaArrowRight /></button>
                        <img src="/assets/company-wiki-template.webp" alt="" />
                    </div>
                    <div className="right">
                        <TempGrid name={'Product roadmap'} />
                        <TempGrid name={'OKRs'} />
                        <TempGrid name={'Meeting notes'} />
                        <TempGrid name={'Vacation planner'} />
                        <TempGrid name={'Editorial calender'} />
                        <TempGrid name={'Habit tracker'} />
                    </div>
                </div>
            </div>
            <div className="section-11">
                <h1>Get started for free</h1>
                <p>Play around with it first. Pay and add your team later.</p>
                <div>
                    <button className='black-btn'>Try Notion free</button>
                    <button className='button-2'>Request a demo <FaArrowRight /></button>
                </div>
                <img src="/assets/notion-parade.webp" alt="" />
            </div>
        </>
    )
}

export default HomePage
