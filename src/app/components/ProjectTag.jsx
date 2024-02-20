import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "bg-pink-200" : "hover:border-gray-500";
    return(
        <button
        className={`${buttonStyles} rounded-full border-2 border-pink-200 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTag