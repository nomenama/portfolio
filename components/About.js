import React, {useEffect, useRef} from "react";
import Column from "./Column";
import Row from "./Row";
import Typed from "typed.js";

const About = () => {

	const el = useRef(null);

	useEffect(() => {

		const typed = new Typed(el.current, {
			strings: ["developer", "thinker","designer"],
			typeSpeed: 150,
			backSpeed: 100,
			loop: true
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<section className="about" id="about">

			<h2>About Me</h2>

			<Column className="container">

				<Row className="aboutContent">

						<img src={"/assets/profile-1.jpeg"} alt="image of the author"/>

					<div className="detailColumn">
						<div className="text">I&apos;m Nomen and I&apos;m a <span ref={el}/></div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi corporis dolores dolorum eum excepturi impedit ipsam, magni, molestiae nam nobis nostrum officiis quasi quisquam rem sit tempore ullam ut veritatis! Accusantium, aperiam aspernatur assumenda consequuntur, dignissimos dolor doloribus ducimus est explicabo id magnam modi neque numquam rerum ullam.
						</p>
						<a href="https://www.github.com/nomenama">Download CV</a>
					</div>
				</Row>
			</Column>
		</section>
	);

};

export default About;