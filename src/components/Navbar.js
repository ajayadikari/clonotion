import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import Element from './Element';
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDownBox from './DropDownBox';
import { FaBookOpen } from "react-icons/fa";
import { GiDart } from "react-icons/gi";
import { SiGoogledocs } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { LuBuilding2 } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";



const Navbar = () => {
    const propBox1 = {
        prop1: 'Wikis',
        prop2: 'Projects',
        prop3: 'Docs',
        prop4: 'Notion AI'
    }
    const propBox2 = {
        prop1: 'Wikis',
        prop2: 'Projects',
        prop3: 'Docs',
        prop4: 'Notion AI'
    }
    return (
        <div className='nav flex'>
            <div className="left-nav">
                <ul>
                    <li></li>
                    <li>Product
                        <RiArrowDropDownLine />
                        <div className="drop-down">
                            <div>
                                <div className='nav-box'>
                                    <FaBookOpen style={{ color: 'red' }} />
                                    <Element desc={'Centralize you knowledge'} name={'Wikis'} />
                                </div>
                                <div className='nav-box' >
                                    <GiDart style={{ color: 'blue' }} />
                                    <Element desc={'Centralize you knowledge'} name={'Projects'} />
                                </div>
                                <div className='nav-box'>
                                    <SiGoogledocs style={{ color: 'orange' }} />
                                    <Element desc={'Centralize you knowledge'} name={'Docs'} />
                                </div>
                                <div className='nav-box'>
                                    <HiSparkles style={{ color: 'purple' }} />
                                    <Element desc={'Centralize you knowledge'} name={'Notion AI'} />
                                </div>
                            </div>
                            <div>
                                <Element desc={'Centralize you knowledge'} name={'Wikis'} />
                                <Element desc={'Centralize you knowledge'} name={'Projects'} />
                                <Element desc={'Centralize you knowledge'} name={'Docs'} />
                                <Element desc={'Centralize you knowledge'} name={'Notion AI'} />
                            </div>
                        </div>
                    </li>
                    <li>Download
                        <RiArrowDropDownLine />
                        <div className="drop-down">
                            <div>
                                <Element name={'IOS & Android'} />
                                <Element name={'Mac & Windows'} />
                                <Element name={'Web clipper'} />
                            </div>
                        </div>
                    </li>
                    <li>Solutions
                        <RiArrowDropDownLine />
                        <div className="drop-down">
                            <div>
                                <div className='nav-box'>
                                    <LuBuilding2 />
                                    <Element desc={'Advanced feature for your org'} name={'Enterprise'} />
                                </div>
                                <div className='nav-box'>
                                    <LuBuilding />
                                    <Element desc={'Run your team one tool'} name={'Small Buisnesses'} />
                                </div>
                                <div className='nav-box'>
                                    <FaHouse />
                                    <Element desc={'Free for individuals'} name={'Personal'} />
                                </div>
                            </div>
                            <div>
                                <Element name={'Design'} />
                                <Element name={'Engineering'} />
                                <Element name={'Product'} />
                                <Element name={'Managers'} />
                            </div>
                            <div>
                                <Element name={'StartUps'} />
                                <Element name={'Remote Work'} />
                                <Element name={'Education'} />
                                <Element name={'Non Profits'} />
                            </div>
                        </div>
                    </li>
                    <li>Resources
                        <RiArrowDropDownLine />
                        <div className="drop-down">
                            <div>
                                <Element name={'Blogs'} />
                                <Element name={'Guides & Tutorials'} />
                                <Element name={'Webinars'} />
                                <Element name={'Helper Center'} />
                                <Element name={'API docs'} />
                                <Element name={'Community'} />
                                <Element name={'Hire a consultant'} />
                            </div>
                        </div>
                    </li>
                    <li>Pricing
                        <RiArrowDropDownLine />
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="flex">
                    <button className='box'>Request a demo</button>
                    <button className='box'>Log in</button>
                    <button className='box another-black-btn'>Get Notion free</button>
                </div>
            </div>
        </div >
    )
}

export default Navbar
