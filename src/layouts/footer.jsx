const Footer = ()=>{
    return (
        <footer className="bg-gray-800 text-white p-[2rem] text-center">
            <table className="text-left pr-4">
                <tbody>
                    <tr>
                        <td><i className="fa-regular fa-envelope"></i></td>
                        <td className="text-left pl-4"><a href="mailto:iqro.s.ahfadz@gmail.com" target="_blank">Email</a></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-linkedin-in"></i></td>
                        <td className="text-left pl-4"><a href="https://www.linkedin.com/in/iqro-saeful-2a2b55284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-github"></i></td>
                        <td className="text-left pl-4"><a href="https://www.github.com/1QOO" target="_blank">GitHub</a></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-instagram"></i></td>
                        <td className="text-left pl-4"><a href="https://www.instagram.com/saefuliqro?igsh=aTzta21tYjduejlu" target="_blank">Instagram</a></td>
                    </tr>
                </tbody>
            </table>
        </footer>
    )
}

export default Footer;