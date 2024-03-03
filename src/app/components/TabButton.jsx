import React from "react";
import {motion} from "framer-motion";

const variants = {
    default: {width: 0},
    active: {width: "calc(100% - 0.75rem)"},
}

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'border-b border-primary-500': '';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-slate-500 ${buttonClasses}`}>
            {children}
            </p>
            {/* <motion.div
            variants={variants}
            animate={active ? "active" : "default"}
            className="h-1 mt-2 mr-3"
            >
            </motion.div> */}
            
        </button>
    )
}

export default TabButton;