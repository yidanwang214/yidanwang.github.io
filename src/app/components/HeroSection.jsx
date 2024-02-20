"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";




const HeroSection = () => {
    return(
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to bg-pink-500">
                        Hello, I&apos;m {""}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Yidan Wang',
                            2000, // wait 1s before replacing "Yidan" with "Software Engineer"
                            'A Software Engineer',
                            2000,
                            'A Fullstack Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-slate-700 text-base sm:text-lg lg:text-xl text-justify">
                My passion lies in algorithm design and front-end development, and I aspire to become a full-stack developer. Possessing excellent problem-solving skills, I thrive in both individual and collaborative team environments.
                </p>
                <div className="grid grid-cols-2 md:w-full">
                    <div
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-purple-100  to-pink-200 hover:bg-white border border-red-200 my-3">
                    <Link
                     href="/#contact"
                     >
                        Contact
                    </Link>
                    </div>
                    <div
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-purple-100  to-pink-200 hover:bg-white border border-red-200 my-3">
                    <Link
                     href="https://drive.google.com/file/d/15zYQLGDedZq_QNjh_Awv9dbg319Nre83/view?usp=sharing"
                     >
                        Resume
                    </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
             className="col-span-5 place-self-center mt-10 lg:mt-0">
                <div className="w-[200px] h-[200px] relative">
                    <Image src="/images/profile.jpg"
                    alt="profile"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                    width={200}
                    height={200}/>
                </div>
            </motion.div>
        </div>
        
        
    </section>
    )
};

export default HeroSection;