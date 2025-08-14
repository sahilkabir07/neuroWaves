import React from 'react'
import HeroAbout from '../components/aboutComponents/HeroAbout'
import ServicesAbout from '../components/aboutComponents/ServicesAbout'

const About = () => {
    return (
        <div className="bg-white/80 min-h-[100svh] md:min-h-[100dvh] w-full flex flex-col overflow-x-hidden">
            <HeroAbout />
            <ServicesAbout />
        </div>
    )
}

export default About