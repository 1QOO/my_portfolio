
const Hero = ()=>{
    return (
        <main className="bg-[url(/workdesk-bg.png)]">
            <div className="flex flex-col md:lg:flex-row gap-[1rem] bg-[rgba(255,255,255,0.8)] p-5">
                <img src="/profile.webp" alt="profile_photo" className="max-w-[500px] border-solid border-gray-800 border-[5px] rounded-[10px]"/>
                <div>
                    <h2>Hello...</h2>
                    <p>
                        I'm Iqro, a junior front-end web developer, i love expressing myself through coding like building useful interactive web for user, 
                        i also have a great passion on learning IT, now, i'm learning Next.js framework and i still have a long list study like:
                    </p>
                    <ol className="m-5 list-disc">
                        <li>Typescript</li>
                        <li>Express.js</li>
                        <li>node.js (back-end)</li>
                        <li>Go language (back-end)</li>
                        <li>framer-motion (js animation library)</li>
                        <li>and my ultimate goal <strong>Web security and penetration testing</strong></li>
                    </ol>
                    <p>Below are my tools:</p>
                    <ol className="m-5 mt-0">
                        <li><img src="/icons/html5-icon.svg" alt="html 5" className="size-6 inline-block mr-2" />HTML5</li>
                        <li><img src="/icons/css3-icon.svg" alt="css 3" className="size-6 inline-block mr-2" />CSS3</li>
                        <li><img src="/icons/javascript-icon.svg" alt="javascript es6" className="size-6 inline-block mr-2" />JavaScript</li>
                        <li><img src="/icons/tailwindcss-icon.svg" alt="tailwind css" className="size-6 inline-block mr-2" />TailwindCSS</li>
                        <li><img src="/icons/react-icon.svg" alt="react js" className="size-6 inline-block mr-2" />React js</li>
                        <li><img src="/icons/next-js-icon.svg" alt="next js" className="size-6 inline-block mr-2" />Next js (Still learning)</li>
                        <li><img src="/icons/github-icon.svg" alt="git" className="size-6 inline-block mr-2" />Control version (Git and Github)</li>
                    </ol>
                    <p>
                        Below is my projects i have done since August 2025, if you have any suggestion for sharpening my skill or improving my project or anything relate to coding, 
                        i really want to hear it.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Hero;