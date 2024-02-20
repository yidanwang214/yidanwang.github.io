"use client";
import React, {useTransition, useState} from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='text-slate-700 '>
                <div >
                    <li >Language</li>
                    <div className='grid grid-cols-10'>
                    <div className='col-start-2 col-span-full'>Proficient: Java, Python,  JavaScript/CSS/HTML</div>
                    <div className='col-start-2 col-span-full'>Familiar: C++/C</div>
                    </div>
                </div>
                <div>
                    <li>Frontend & Backend Development</li>
                    <div className='grid grid-cols-10'>
                        <div className='col-start-2 col-span-full'>React, Vue, Next.js, Node.js, Remix.js, SQL, Flask API, PostgreSQL</div>
                    </div>
                    
                </div>
                <div>
                    <li>Tools</li>
                    <div className='grid grid-cols-10'>
                    <div className='col-start-2 col-span-full'>Figma, Bitbucket, Jira, Git, SVN, GitHub</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
               <div className='grid grid-cols-7'>
                 <div className='col-span-4'>The University of Adelaide</div>
                 <div className='col-span-3'>07/2022-06/2024</div>
               </div>

        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='grid grid-cols-10'>
                <li className='col-span-4'>Software Developer Intern</li>
                <li className='col-span-2'>Outhire</li>
                <li className='col-span-4'>07/2023-10/2023</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    };
    return (
      <section className='text-black'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 md:place-items-stretch'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold'>About Me</h2>
                <p className='text-base lg:text-lg text-slate-700 text-justify'>I am proficient in Java, Python, JavaScript/CSS/HTML. Additionally, I am familiar with C++ and C. I have gained hands-on experience with git, React.js, Remix, SQL, and training NLP models. Moreover, I am always eager to acquire new tools and expand my knowledge base.</p>
                <br />
                <p className='text-base lg:text-lg text-slate-700 text-justify'>
                    In addition to programming, I actively volunteer in various events, run 30 kilometers every week, enjoy music, bake and try out different desserts with my friends.
                </p>
            </div>
            <div>
            <div className='flex flex-row mt-8'>
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("experience")}
                    active={tab === "experience"}>
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className='mt-2'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
      </section>
    );
};

export default AboutSection;