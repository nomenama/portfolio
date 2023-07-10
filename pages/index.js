import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout maincls="main-aboutpage">
                <section className="about-area">
                    <div className="container">
                        <div className="d-flex about-me-wrap align-items-start gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-image-box shadow-box">
                                    {/*<img src="https://gridx-next.vercel.app/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                    <div>
                                        <img src="/assets/img/me.webp" alt="About Me" />
                                    </div>
                                </div>
                            </div>

                            <div className="about-details" data-aos="zoom-in">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> Summary <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="about-details-inner shadow-box">
                                    <img src="/assets/images/icon2.png" alt="Star" />
                                    <h1>Nomen Ama</h1>
                                    <p>I am a full stack software engineer based in York, UK. Skilled in web development, particularly in the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                                </div>
                            </div>
                        </div>

{/*                        <div className="col-md-6" style={{marginTop: "20px"}}>
                            <div className="about-credentials-wrap">
                                <div data-aos="zoom-in">
                                    <div className="banner shadow-box" style={{paddingTop: "5px", paddingBottom: "5px"}}>
                                        <div className="marquee">
                                            <div>
                                                <span>isAvailable: <b>True</b> <img src="/assets/images/star1.svg" alt="Star" /> isAvailable: <b>True</b> <img src="/assets/images/star1.svg" alt="Star" /> isAvailable: <b>True</b> <img src="/assets/images/star1.svg" alt="Star" /> isAvailable: <b>True</b> <img src="/assets/images/star1.svg" alt="Star" /> isAvailable: <b>True</b> <img src="/assets/images/star1.svg" alt="Star" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}

                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-experience shadow-box">
                                    {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                    <h3 className="spacing-3">EXPERIENCE</h3>
                                    <ul>
                                        <li>
                                            <p className="date">March 2023 - Current</p>
                                            <h2>Founder & Software Engineer</h2>
                                            <p className="type">Intraverse Software Enterprise (Malaysia)</p>
                                        </li>
                                        <li>
                                            <p className="date">June 2021 - Nov 2022</p>
                                            <h2>Software Engineer</h2>
                                            <p className="type">Irrelon Software Limited (UK)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-education shadow-box">
                                    {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                    <h3 className="spacing-3">EDUCATION</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2020 - 2021</p>
                                            <h2>Full Stack Engineering Course</h2>
                                            <p className="type">Codecademy</p>
                                        </li>
                                        <li>
                                            <p className="date">2018 - 2019</p>
                                            <h2>Access to Higher Education Diploma (Business)</h2>
                                            <p className="type">York College & University Centre</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="d-flex profile-contact-credentials-wrap gap-24">
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-contact-box info-box shadow-box">
                                            <Link className="overlay-link" href="/contact" />
                                            {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                            <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                            <h1>Let's <br />work <span>together.</span></h1>
                                            <Link href="/contact" className="about-btn">
                                                <img src="/assets/images/icon.svg" alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="h-full">
                                        <div className="about-crenditials-box info-box shadow-box">
                                            <Link className="overlay-link" href="/resume" />
                                            {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                            <img src="/assets/images/sign.png" alt="Sign" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>more about me</h4>
                                                    <h1>Resume</h1>
                                                </div>
                                                <Link href="/resume" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
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