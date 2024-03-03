"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "React Personal Website",
        description: "Developed my personal website using Next.js, Tailwind CSS, and hosted on Vercel. I created this platform to acquaint myself with the fundamentals of Next.js, offering visitors a glimpse into who I am and showcasing my projects.",
        image: '/images/PersonalWebsite.jpg',
        tag: ["Next.js", "React", "JavaScript", "Web", "All"],
        gitUrl: 'https://github.com/yidanwang214/yidanwang.github.io',
        previewUrl: 'https://www.yidanwang214.com/',
    },
    {
        id: 2,
        title: "Sudoku Visualisation",
        description: "In order to strengthen my understanding in backtracking algorithm and solve Sudoku in different approaches, I built a Sudoku game using Python and Pygame library that allows users to fill in the empty grid or press 'enter' to visualise how the backtracking algorithm solves Sudoku.",
        image: '/images/Sudoku.jpeg',
        tag: ["Backtracking algorithm", "Python", "Game", "Algorithm", "All"],
        gitUrl: 'https://github.com/yidanwang214/Sudoku-Backtracking-Visualisation',
        previewUrl: '/',
    },
    {
        id: 3,
        title: "Nokia Snake Game",
        description: "This is a Nokia Snake Game using JavaScript, HTML, and CSS, featuring a pink theme. This project holds my nostalgia for one of my favorite childhood games.",
        image: '/images/SnakeGame.jpg',
        tag: ["Vanilla JavaScirpt", "Game", "Web", "All"],
        gitUrl: 'https://github.com/yidanwang214/Retro-Nokia-Snake-Game',
        previewUrl: 'https://pinksnakegame.netlify.app/',
    },
    {
        id: 4,
        title: "Shortest Path Algorithm for Material Transportation - ATSYS Project",
        description: "When undertaking the Software Engineering Project course at the University of Adelaide, I collaborated with teammates to implement the Uniform Cost Search Algorithm. Our goal was to generate five shortest paths from the source to the destination, meeting the needs of AtSys in efficiently transporting materials through converters.",
        image: '/images/ShortestPath.jpg',
        tag: ["Algorithm Design", "UCS algorithm", "Fullstack Project", "Java", "Python", "All"],
        gitUrl: 'https://github.com/yidanwang214/Shortest-Paths-Algorithm-ATSYS-Project',
        previewUrl: 'http://47.106.108.49/shortestPath/',
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag);
    })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    return(
        <section id="projects">
            <h2
            className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12"
            id="projects">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Algorithm"
                    isSelected={tag === "Algorithm"}
                />
            </div>
            <ul
            ref={ref}
            className="grid md:grid-cols-2 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => 
                <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    
                    />
                </motion.li>
                )}
            </ul>
        </section>
    )
};

export default ProjectsSection;