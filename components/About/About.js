import React from "react";
import Column from "../Column";
import Row from "../Row";

const About = () => {

	return (
		<section className="about" id="about">
			<h2>About Me</h2>
			<Column className="container">
				<Row className="aboutContent">
					<img src={"/assets/me1.jpg"} alt="image of the author"/>

					<div className="detailColumn">
						<div className="text">Hi, I am Nomen Ama.</div>
						<p>
							I am a self-taught developer with two years’ experience developing web-based applications.
							I understand the web application lifecycle and I am skilled at all aspects of development from project planning to
							requirement gathering through to writing and testing code, deployment and post-deployment support.
						</p>

						<p>
							I am passionate about all disciplines of software development and working towards learning new skills every day.
						</p>

						<p>
							<i>"If a man emptied his purse into his head, no one can take it away from him. An investment in knowledge always pays the best interest." - Benjamin Franklin</i>
						</p>
						<a href="/CV-Nomen-2022.pdf" download>Download CV</a>
					</div>
				</Row>
			</Column>
		</section>
	);

};

export default About;