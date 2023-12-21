import React from 'react'
import { scores, menuIcon, favourites, download, news, logo, search, search2 } from '../../icons'
import './navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = ({ handleItemClick, isOpen }) => {
  const navigate = useNavigate();
  return (
    <div className={`navbar ${isOpen && "dimmed-background"} fixed top-0 px-2 left-0 z-[100] flex h-[60px] bg-background w-full items-center justify-between`}>
      <div  className="logo flex items-center gap-x-2 max-lg:justify-between max-lg:w-full">
        <img onClick={handleItemClick} src={menuIcon} alt="menu" width={'14px'} height={"14px"} />
        <Link to={'/'} className='text-xl'>FutZone </Link>
        <div className='hidden max-lg:block'>
          <img src={search2} alt="" />
        </div>
      </div>
      <div className='flex flex-row gap-x-9 mr-10'>
        <Link to={'/'} className="flex items-center gap-x-2   max-lg:hidden cursor-pointer  ">
          <img src={scores} alt="scores" color='red' />
          <p className='text-base'>Scores </p>
        </Link>
        <Link to={'/favourites'}  className="flex items-center gap-x-2  max-lg:hidden cursor-pointer ">
          <img src={favourites} alt="favourites" />
          <p className='text-base'>Favourites </p>
        </Link>
        <Link to={'/news'} className="flex items-center gap-x-2  max-lg:hidden cursor-pointer ">
          <img src={news} alt="news" />
          <p className='text-base'>News </p>
        </Link>
          <Link to={'/get_app'} className='flex items-center gap-x-2 max-lg:hidden cursor-pointer'>
            <img src={download} alt="applink" />
            <p className='text-base'>Get App</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar