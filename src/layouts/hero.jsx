
const Hero = ()=>{
    return (
        <main className="bg-[url(/workdesk-bg.png)] bg-center">
            <div className="flex flex-col md:lg:flex-row gap-[1rem] bg-[rgba(255,255,255,0.8)] p-5">
                <img src="/profile.webp" alt="profile_photo" className="max-w-[500px] border-solid border-gray-800 border-[5px] rounded-[10px]"/>
                <div>
                    <h2 className="text-center font-bold text-[1.2rem]">Singkat Saya</h2>
                    <p className="text-center md:lg:text-left">
                        Saya Iqro, junior full-stack web developer. Saya belajar pengembangan website dengan cara praktik langsung 
                        membuat project seperti toko daring, website untuk restoran, serta aplikasi dashboard.
                    </p>
                    <p className="mt-5">Skill yang saya kuasai:</p>
                    <ol className="m-5 mt-0">
                        <li><img src="/icons/html5-icon.svg" alt="html 5" className="size-6 inline-block mr-2" />HTML5</li>
                        <li><img src="/icons/css3-icon.svg" alt="css 3" className="size-6 inline-block mr-2" />CSS3</li>
                        <li><img src="/icons/javascript-icon.svg" alt="javascript es6" className="size-6 inline-block mr-2" />JavaScript</li>
                        <li><img src="/icons/tailwindcss-icon.svg" alt="tailwind css" className="size-6 inline-block mr-2" />TailwindCSS</li>
                        <li><img src="/icons/react-icon.svg" alt="react js" className="size-6 inline-block mr-2" />React js</li>
                        <li><img src="/icons/node.png" alt="node js" className="size-6 inline-block mr-2" />Node js</li>
                        <li><img src="/icons/next-js-icon.svg" alt="next js" className="size-6 inline-block mr-2" />Next js (Still learning)</li>
                        <li><img src="/icons/github-icon.svg" alt="git" className="size-6 inline-block mr-2" />Control version (Git and Github)</li>
                    </ol>
                    <p>
                        Dibawah adalah beberapa project saya beserta link kode sumber dan link demonya.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Hero;