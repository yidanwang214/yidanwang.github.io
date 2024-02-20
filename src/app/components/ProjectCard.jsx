import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
    return(
        <div>
            <div
            className="ml-4 h-52 w-52 relative group rounded-lg"
            style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link 
                        href={gitUrl}
                        className="h-14 w-14 border-2 relative rounded-full hover:border-pink-500 group/link"
                        target="_blank">
                        <CodeBracketIcon className="h-10 w-10 MR-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-600"/>
                    </Link>
                    <Link 
                        href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full hover:border-pink-500 group/link"
                        target="_blank">
                        <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-600"/>
                    </Link>

                </div>

            </div>
            <div className=" py-6 px-4 mt-2">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-slate-700">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard