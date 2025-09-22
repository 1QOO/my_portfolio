const Hero = ()=>{
    return (
        <main className="p-5 flex flex-col md:lg:flex-row gap-[1rem]">
            <img src="/profile.webp" alt="profile_photo" className="max-w-[500px] border-solid border-gray-800 border-[5px] rounded-[10px]"/>
            <div>
                <h2>Hello...</h2>
                <p>
                    I'm Iqro, a junior front-end web developer, i love expressing myself through coding like building useful interactive web for user, 
                    i also have a great passion on learning IT, now, i'm learning Next.js framework and i still have a long list study like:
                </p>
                <ol className="m-5">
                    <li>Typescript</li>
                    <li>Express.js</li>
                    <li>node.js (back-end)</li>
                    <li>Go language (back-end)</li>
                    <li>framer-motion (js animation library)</li>
                    <li>and my ultimate goal <strong>Web security and penetration testing</strong></li>
                </ol>
                <p>Below are my tools:</p>
                <ol className="m-5 mt-0">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>TailwindCSS</li>
                    <li>React js</li>
                    <li>Next js (Still learning)</li>
                    <li>Control version (Git and Github)</li>
                    <li>Build tool Vite</li>
                </ol>
                <p>
                    Below is my projects i have done since August 2025, if you have any suggestion for sharpening my skill or improving my project or anything relate to coding, 
                    i really want to hear it.
                </p>
            </div>
        </main>
    )
}

export default Hero;