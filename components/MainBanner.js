import React from "react";
import Column from "./Column";
import Row from "./Row";

const MainBanner = () => {

	return (
		<section className="home" id="home">
			<Column className="container">
				<Row className="homeContent">
					<h3>Hello, my name is</h3>
					<h1>Nomen Ama</h1>
					<h2>And I am a <span>Developer</span></h2>
					<a href="#">Hire Me</a>
				</Row>
			</Column>
		</section>
	)
}

export default MainBanner;