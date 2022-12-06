import React, {useEffect, useRef} from "react";
import Column from "../Column";
import Row from "../Row";
import Typed from "typed.js";

const MainBanner = () => {

	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Software Developer", "Web Developer"],
			typeSpeed: 150,
			backSpeed: 60,
			loop: true
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<section className="home" id="home">
			<Column className="container">
				<Row className="homeContent">
					<h3>Hello, my name is</h3>
					<h1>Nomen Ama</h1>
					<h2>And I am a <span ref={el}/></h2>
					<a href="#about">About Me</a>
				</Row>
			</Column>
		</section>
	);
};

export default MainBanner;