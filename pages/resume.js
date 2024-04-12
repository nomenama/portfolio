import Layout from "@/components/layout/Layout"
import Link from "next/link"

const stacks = [
    {
        name: "React",
        level: "Proficient"
    },
    {
        name: "Nextjs",
        level: "Proficient"
    },
    {
        name: "Nodejs",
        level: "Proficient"
    },
    {
        name: "MongoDB",
        level: "Proficient"
    },
    {
        name: "MySQL",
        level: "Advance Beginner"
    },
    {
        name: "Git",
        level: "Competent"
    },
    {
        name: "Tailwind CSS",
        level: "Proficient"
    },
    {
        name: "Styled Component",
        level: "Competent"
    },
    {
        name: "Nginx",
        level: "Competent"
    },
    {
        name: "Linux Server",
        level: "Competent"
    },
]

export default function Home() {

    return (
        <>
             <Layout  maincls="main-aboutpage">
                <section className="credential-area">
                    <div className="container">
                        <div className="gx-row d-flex">
                            <div className="credential-sidebar-wrap" data-aos="zoom-in">
                                <div className="credential-sidebar text-center">
                                    <div className="shadow-box">
                                        {/*<img src="https://gridx-next.vercel.app/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                        <div className="img-box">
                                            <img src="/assets/img/me.webp" alt="About Me" />
                                        </div>
                                        <h2>Nomen Ama</h2>
                                        <p>@nomenama</p>
                                        <ul className="social-links d-flex justify-content-center">
                                            <li><a target="_blank" href="https://github.com/nomenama"><i className="iconoir-github" /></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/in/nomen-ama"><i className="iconoir-linkedin" /></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com/nomenama1990"><i className="iconoir-instagram" /></a></li>
                                            <li><a target="_blank" href="https://www.facebook.com/nomenama1990"><i className="iconoir-facebook-tag" /></a></li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="credential-content flex-1">
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2 className="spacing-3">About Me</h2>
                                    <p>
                                        I am a self-taught software engineer with a decade of experience in IT support and system administration.
                                        In 2020, I made a career transition to become a software engineer and I have not looked back since.
                                    </p>

                                    <p>
                                        I love the core aspect of software engineering which is problem solving and there&apos;s always something new to tackle.
                                        Whether it&apos;s creating a stunning UI or writing a functioning API.
                                        (Sound generic, but I have no other way to put it.)
                                    </p>

                                    <p>
                                        When I&apos;m not working, you might catch me cruising through the picturesque Yorkshire countryside on my motorcycle or camping amidst the breathtaking landscapes of the Scottish Highlands.
                                    </p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up" className="spacing-3">Experience</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Feb 2023 - Current</h4>
                                        <h3>Software Engineer & Co-Founder</h3>
                                        <h5>Intraverse Software Enterprise (Malaysia)</h5>

                                        <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                            <span>&#x2022;</span>
                                            <span>Led the development of a platform that facilitates the connection between homeowners and tradesmen.</span>
                                        </p>

                                        <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                            <span>&#x2022;</span>
                                            <span>Actively participated in the entire software development lifecycle, including initial design, custom architectures, and platform deployment.</span>
                                        </p>

                                        <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                            <span>&#x2022;</span>
                                            <span>Successfully launched and made <a href="https://kontraktor.my" target="_blank">www.kontraktor.my</a> live.</span>
                                        </p>

                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>June 2021 - Nov 2022</h4>
                                        <h3>Apprentice & Software Engineer</h3>
                                        <h5>Irrelon Software Limited (UK)</h5>
                                        <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                            <span>&#x2022;</span>
                                            <span>
                                                Designed and developed a food ordering and point-of-sale system for a small food truck during an apprenticeship.
                                                Launched the system and secured six initial clients on a subscription basis, generating £20k/year in revenue for the company.
                                            </span>
                                        </p>

                                        <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                            <span>&#x2022;</span>
                                            <span>
                                                Contributed to the front-end development team, supporting the development of financial reporting and tracking applications for renowned investment firms.
                                                Resulted in enhanced production timelines and achieved the Minimum Viable Product (MVP) target ahead of schedule.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up" className="spacing-3">Education</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2020 - 2021</h4>
                                        <h3>Full Stack Engineering Course</h3>
                                        <h5>Codecademy</h5>
                                        <p>Completed the Full Stack Engineering course. </p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2018 - 2019</h4>
                                        <h3>Access to Higher Education Diploma (Business)</h3>
                                        <h5>York College & University Centre</h5>
                                        <p>Graduated with Distinction.</p>
                                    </div>
                                </div>
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2 className="spacing-3">Skills</h2>
                                    <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                        <span>&#x2022;</span>
                                        <span>
                                            Proficiency in modern programming languages such as HTML5, CSS3, JavaScript and TypeScript. Expert in creating beautiful UI and functional APIs and server.
                                        </span>
                                    </p>

                                    <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                        <span>&#x2022;</span>
                                        <span>
                                            Proficient in utilising programming methodologies and tools such as Git for version control and Agile/Scrum for project management.
                                        </span>
                                    </p>

                                    <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                        <span>&#x2022;</span>
                                        <span>
                                            Experienced in the complete software development lifecycle, including requirements gathering, development, testing, deployment, and maintenance. Strong ability to identify problems and how to solve them.
                                        </span>
                                    </p>

                                    <p style={{display: "flex", "flexDirection": "row", gap: "10px", marginTop: "10px"}}>
                                        <span>&#x2022;</span>
                                        <span>
                                            I&apos;m a self-motivated individual who excels both in collaborative team environments and when working independently.
                                        </span>
                                    </p>
                                </div>
                                <div className="skills-wrap">
                                    <h2 data-aos="fade-up" className="spacing-3">Tech Stacks</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">

                                        {stacks.map(({name, level}) => (
                                            <div key={name} className="skill-item" data-aos="zoom-in">
                                                <h3 className="name">{name}</h3>
                                                <p>{level}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}