import React from 'react'

const Footer = () => {
      const year=new Date().getFullYear();
    return (
        
        <>
            <footer className="w-100 bg-light font-bold text-center bg-[#0a192f] text-gray-400 ">
                <p>© {year} Vikas Sharma. All Rights Reserved ! All Terms and Conditions Reservised ! </p>
            </footer>
        </>
    )
}

export default Footer