import React from 'react'
import { motion } from 'framer-motion'
import { IoMdClose } from "react-icons/io";
import { navbar2_items } from '../data';
import { useNavigate } from 'react-router-dom';

const Navbar2 = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();

    return (
        <motion.div className=' top-0 left-0 z-[2000] h-screen fixed bg-club_color w-[300px] p-3 '
            initial={{ opacity: 1, x: "-100%" }}
            animate={{ opacity: 1, x: isOpen ? 0 : "-100%" }}
            exit={{ opacity: 1, x: '-100%' }}
            transition={{ duration: 0.5 }}>
            <div className='flex items-center justify-between   '>
                <p className='text-2xl font-bold text-white'>FutZone</p>
                <IoMdClose className='text-white' size={30} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className='flex items-start flex-col gap-10 pt-10'>
                {navbar2_items.map(item => (
                    <div key={item.id} className='flex items-center gap-2 cursor-pointer'>
                        <img width={30} src={item.icon} alt={item.title} />
                        <p className='font-bold text-xl text-white'>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className='bottom-4 absolute'>
            <div className='flex items-center pt-[100px] gap-2'>
                <img className='rounded-md' width={50} src="https://t4.ftcdn.net/jpg/03/69/79/91/360_F_369799193_D7bhKPUKNN3FFvrmp3PqtS6pi1NCGQmJ.jpg" alt="" />
                <p className='font-bold text-sm text-white'>Get instant notifications with the LiveScore app</p>
            </div>
            <div className='flex justify-around pt-3' >
                <a href="/">
                    <img width={"120px"} src="https://www.livescore.com/ls-web-assets/images/app_store-f26d940693193e7817576a67dde9b6cc.webp" alt="" />
                </a>
                <a href="/">
                    <img width={"120px"} src="https://www.livescore.com/ls-web-assets/images/google_play-d5124d23c134d8a4693f7615d16462fa.webp" alt="" />
                </a>
            </div>
            </div>
        </motion.div>
    )
}

export default Navbar2