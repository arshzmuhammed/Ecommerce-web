import React from 'react'
import Banner from './Banner'
import HomeCtagory from './HomeCtagory'
import CategoryShowsCase from './categoryShowsCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponcer from './Sponcer';

const Home = () => {
  return (
    <div>
    <Banner />
    <HomeCtagory/>
    <CategoryShowsCase />
    <Register/>
    <LocationSprade/>
    <AboutUs/>
    <AppSection/>
    <Sponcer/>
    </div>
  )
}

export default Home

