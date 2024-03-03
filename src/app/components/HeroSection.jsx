"use client"
import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from "framer-motion";




const HeroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return(
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            // initial={{ opacity: 0, scale: 0.7 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            ref={ref}
            initial={{y:50, opacity: 0}}
            animate={isInView ? {y:0, opacity: 1} : {y: 50, opacity: 0}}
            transition={{duration: 0.5}}
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
                <p className="text-secondary text-base sm:text-lg lg:text-xl text-justify">
                My passion lies in algorithm design and data structure, because using them to solve problems while considering the tradeoff between time and space can bring me satisfaction, just as cracking a maze game within a time limit.
                </p>
                <br></br>
                <p className="text-secondary text-base sm:text-lg lg:text-xl text-justify">
                I also like front-end development as I can translate my ingenuity into features that can be visualised instantly and build useful products.
                </p>
                <br></br>
                <p className="text-secondary text-base sm:text-lg lg:text-xl text-justify">
                Throughout my nearly 2 years of studying Computer Science, I have completed several personal and group projects, honing my problem-solving skills. As demonstrated by my experience, I thrive in both individual and collaborative team environments.
                </p>
                <div className="grid grid-cols-2 md:w-full">
                    <div
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-purple-100  to-primary-200 border border-primary-200 my-3">
                    <Link
                     href="/#contact"
                     >
                        Contact
                    </Link>
                    </div>
                    <div
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-purple-100  to-primary-200 border border-primary-200 my-3">
                    <Link
                     href="https://drive.google.com/file/d/15zYQLGDedZq_QNjh_Awv9dbg319Nre83/view?usp=sharing"
                     >
                        Resume
                    </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
            ref={ref}
            initial={{y:50, opacity: 0}}
            animate={isInView ? {y:0, opacity: 1} : {y: 50, opacity: 0}}
            transition={{duration: 0.5}}
             className="col-span-5 place-self-center mt-10 lg:mt-0">
                <div className="w-[250px] h-[250px] relative">
                    <Image src="/images/profile.jpg"
                    alt="profile"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                    width={250}
                    height={250}/>
                </div>
            </motion.div>
        </div>
        
        
    </section>
    )
};

export default HeroSection;