import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer'

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
                <div className='w-100vw '>
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default Layout;