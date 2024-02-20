"use client";
import React, {useState} from "react";
import GitHubIcon from "../../../public/github-mark.svg";
import LinkedInIcon from "../../../public/LinkedIn_icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if(response.status === 200){
            console.log('Messgae sent.');
            setEmailSubmitted(true);
        }
    };
    return (
        <section 
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold my-2">
                    Let&apos;s Connect
                </h5>
                <p className="mb-4 max-w-md text-justify">
                    I am currently looking for a graduate software engineer position and always open to work on new projects. Feel free to send me an email if you would like to reach out :)
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link
                    href="https://github.com/yidanwang214?tab=repositories"
                    target='_blank'>
                        <Image
                        src={GitHubIcon}
                        alt="Github Icon"
                        height={30}
                        weight={30}
                        />
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/yidanwang214/"
                    target='_blank'>
                        <Image src={LinkedInIcon}
                        alt="LinkedIn Icon"
                        height={30}
                        weight={30}
                        />
                    </Link>
                </div>
            </div>
            <div>
            {emailSubmitted ? (
                <p className="mt-2">
                    Email sent successfully!
                </p>
            ) :(
                <form 
                className="flex flex-col"
                onSubmit={handleSubmit}
                action="">
                    <div className="mb-6">
                        <label
                        htmlFor="email"
                        type="email"
                        className="block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className=" border border-[#33353F]placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                        placeholder="yourname@gmail.com"
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="border border-[#33353F]placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className="border border-[#33353F]placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                        <button
                        type="submit"
                        className="bg-pink-200 hover:bg-pink-300 font-medium py-2.5 px=5 rounded-lg w-full"
                        >
                            Send An Email
                        </button>
                </form>
                )}
            </div>
        </section>
    )
};

export default EmailSection;