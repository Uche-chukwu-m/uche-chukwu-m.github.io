import React from "react";
import { motion } from 'framer-motion';

const Hero = ({ alias, tagline, imageUrl, altText}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <section id="hero" className="items-center text-5xl ">
                <div className="hero-content">
                    <img className="profile-pic rounded-e-full w-128 h-128" src={imageUrl} alt={altText} />
                    <h1 className="hero-name font-bold">{alias}</h1>
                    <p className="hero-tagline"> {tagline} </p>
                </div>
            </section>
        </motion.div>
    );
};

export default Hero