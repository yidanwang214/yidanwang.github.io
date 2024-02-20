import React from "react";

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'border-b border-pink-500': '';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-slate-500 ${buttonClasses}`}>
            {children}
            </p>
            
        </button>
    )
}

export default TabButton;