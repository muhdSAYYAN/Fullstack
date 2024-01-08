import React from 'react'
import "./Home.css"
import { Carousal } from './Carousal'
import { Item } from './Item'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from '../Navbar/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
        <Carousal/>
        <Item/>
        <div className="view">
        <Link to='Products'><button>View All Products on Sale!</button></Link>
        </div>
        <Footer/>
        
    </div>
    </>
  )
}
