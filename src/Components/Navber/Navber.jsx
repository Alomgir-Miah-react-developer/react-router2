import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
   <nav className='p-5 bg-[#ffa62f]'>
    <div className="container">
        <div className="menu-row flex justify-between items-center">
            <div className="logo-col text-[35px] font-bold font-poppins text-black">Logo</div>
            <div className="menu">
                <ul className='flex gap-20 text-l font-poppins font-semibold text-black'> 
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/About">About</Link></li>
                    <li><Link to ="/Blog">Blog</Link></li>
                    <li><Link to ="/Help">Help</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navber
