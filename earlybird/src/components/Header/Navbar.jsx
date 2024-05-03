import React, { useEffect, useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'

import { motion, AnimatePresence } from 'framer-motion'
 
const Navbar = ( {lent} ) => {

    const [navVisible, setNavVisible] = useState(true)

    const nav = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Pages',
            link: '/pages',
        },
        {
            title: 'Shop',
            link: '/shop',
        },
        {
            title: 'Blog',
            link: '/blog',
        },
    ]

    const navMenu = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Pages',
            link: '/pages',
        },
        {
            title: 'Shop',
            link: '/shop',
        },
        {
            title: 'Blog',
            link: '/blog',
        },
        {
            title: `Cart(${lent})`,
            link: '/cart',
        },
        {
            title: 'Search',
            link: '/search',
        },
    ]

    const dropIn = {
        hidden: {
            x: '-100%',
            opacity: 0,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24,1]}
        },
        visible: {
            x: '0%',
            opacity: 1,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24,1]}
        },
        exit: {
            x:'-100%',
            opacity: 0,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24,1]}
        }
    }

    useEffect(() => {
        const handler = () => {
            setNavVisible(true)
        }

        window.addEventListener('mousedown', handler)
    },[])

  return (
    <div className='navbar'>
        <div className="nav">
            <button className="menuButton" onClick={() => setNavVisible(!navVisible)}><RiMenu2Fill size={30}/></button>
            <AnimatePresence className={navVisible ? 'notVisible' : 'nav_menu'} mode='wait'>
                {navVisible || (
                    <motion.div className="navMenu"
                        variants={dropIn}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        {/* <button className={navVisible ? "notVisible" : "menuButton"} onClick={() => setNavVisible(!navVisible)}><IoCloseSharp size={30}/></button> */}
                        {navMenu.map( (item, index) => {
                            return(<li key={index}> <Link to={item.link}> {item.title} </Link></li>)
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
            {nav.map( (item, index) => {
                return( <li 
                            key={index} 
                            className={navVisible ? 'nav_items' : 'notVisible'}
                            > <Link to={item.link}> {item.title} </Link> </li> )
            })}
        </div>
        <div className="logo">
            <img src={require('../../assets/images/logo.png')} alt="logoearlybird" />
        </div>
        <div className='cart'>
            <li className={navVisible ? 'nav_items' : 'notVisible'}> <Link to='/cart'> cart ({lent})</Link></li>
            <li className={navVisible ? 'nav_items' : 'notVisible'}> <Link to='/search'> search</Link></li>
            <img src={require('../../assets/images/icon.png')} alt="icon" />
        </div>
    </div>
  )
}

export default Navbar