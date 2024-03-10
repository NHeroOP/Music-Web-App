import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from "react-icons/ri"

import { logo } from '../assets'
import { links } from '../assets/constants'
import { HiOutlineMenu } from 'react-icons/hi'

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ml-6" >
    <h1 className="mt-8 mb-6 pl-6 text-xl font-[600] text-bg cursor-pointer" >Library</h1>
    {links.map((item) => (
      <NavLink 
        key={item.name}
        to={item.to}
        className="flex text-sm font-[300] text-bg hover:text-secondary max-w-fit py-4 px-6 rounded-full hover:bg-[#3D3A3A]"
        onClick={() => handleClick && handleClick()}
      >
        {item.name}
      </NavLink>
    ))}
  </div>

)


export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex justify-start hidden w-[240px] bg-[#5B5656]">
      <div className="md:flex hidden flex-co " >
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3" >
        {mobileMenuOpen ? ( <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(falsex)} /> ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`} >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </div>
  )
}
