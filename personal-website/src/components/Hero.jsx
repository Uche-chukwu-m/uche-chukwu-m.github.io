import React from "react";
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic-dark.jpg'

const Hero = ({ alias, tagline, altText}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center container mx-auto px-4">
                <img className="profile-pic rounded-full w-48 h-48 border-4 border-red-800 object-cover mb-6" src={profilePic} alt={altText} />
                <h1 className="text-5xl text-slate-100 md:text-6xl font-bold">{alias}</h1>
                <p className="mt-4 text-xl md:text-2xl text-slate-400"> {tagline} </p>
            </section>
        </motion.div>
    );
};

export default Hero