import Layout from "@/components/layout/Layout"
import {useState} from "react";

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

export default function Home() {
    const [formData, setFormData] = useState(initialState);
    const [response, setResponse] = useState({type: "", message: ""});

    const onChange = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setFormData(initialState);

            setResponse({
                type: "success",
                message: "Your message was sent successfully."
            })
        } else {
            setResponse({
                type: "error",
                message: "An error occurred. Please try again."
            })
        }
    }

    return (
        <>
            <Layout  maincls="main-aboutpage">
                <section className="contact-area">
                    <div className="container">
                        <div className="gx-row d-flex justify-content-between gap-24">
                            <div className="contact-infos">
                                <h3 data-aos="fade-up">Contact Info</h3>
                                <ul className="contact-details">
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-mail" />
                                        </div>
                                        <div className="right">
                                            <span>EMAIL</span>
                                            <h4><a href="mailto:nomen@intraversesoftware.com">nomen@intraversesoftware.com</a></h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-phone" />
                                        </div>
                                        <div className="right">
                                            <span>Mobile</span>
                                            <h4><a href="tel:+4407500930944">+44 07500 930 944 (UK)</a></h4>
                                            <h4><a href="tel:+60169755921">+60 16 9755 921 (MY)</a></h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-pin-alt" />
                                        </div>
                                        <div className="right">
                                            <span>Location</span>
                                            <h4>York <br />United Kingdom <br /></h4>
                                        </div>
                                    </li>
                                </ul>
                                <h3 data-aos="fade-up">Social Info</h3>
                                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                    <li><a className="shadow-box" href="https://github.com/nomenama" target="_blank"><i className="iconoir-github" /></a></li>
                                    <li><a className="shadow-box" target="_blank" href="https://www.linkedin.com/in/nomen-ama"><i className="iconoir-linkedin" /></a></li>
                                    <li><a className="shadow-box" target="_blank" href="https://www.facebook.com/nomenama1990"><i className="iconoir-facebook-tag" /></a></li>
                                </ul>
                            </div>
                            <div data-aos="zoom-in" className="contact-form">
                                <div className="shadow-box">
                                    {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                    <img src="/assets/images/icon3.png" alt="Icon" />
                                    <h1>Let’s work <span>together.</span></h1>
                                    <form onSubmit={onSubmit}>
                                        <div className="alert alert-success messenger-box-contact__msg" style={{ display: `${response.type && response.message ? "block" : "none"}` }} role="alert">
                                            {response.message}
                                        </div>
                                        <div className="input-group">
                                            <input onChange={onChange} value={formData.name} type="text" name="name" id="name" placeholder="Name *" required/>
                                        </div>
                                        <div className="input-group">
                                            <input onChange={onChange} value={formData.email} type="email" name="email" id="email" placeholder="Email *" required/>
                                        </div>
                                        <div className="input-group">
                                            <input onChange={onChange} value={formData.subject} type="text" name="subject" id="subject" placeholder="Your Subject *" required/>
                                        </div>
                                        <div className="input-group">
                                            <textarea onChange={onChange} value={formData.message} name="message" id="message" placeholder="Your Message *" required/>
                                        </div>
                                        <div className="input-group">
                                            <button disabled={!formData.name || !formData.email || !formData.subject || !formData.message} className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}