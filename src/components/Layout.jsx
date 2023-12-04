import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (prop) => {
    return (
        <>
            <Navbar />
            {
                prop.children
            }
            <Footer />
        </>
    )
}

export default Layout
