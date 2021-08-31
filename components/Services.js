import React from "react";
import Column from "./Column";
import Row from "./Row";

const Services = () => {

	return (
		<section className="services" id="services">
			<h2>My Services</h2>

			<Column className="container">

				<Row className="cardContent">

					<Column className="card">
						<i className="fas fa-paint-brush"></i>
						<div className="text">Web Design</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat mollitia rem rerum sunt? Adipisci animi autem deleniti iusto sunt!</p>
					</Column>

					<Column className="card">
						<i className="fas fa-chart-line"></i>
						<div className="text">Advertising</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat mollitia rem rerum sunt? Adipisci animi autem deleniti iusto sunt!</p>
					</Column>

					<Column className="card">
						<i className="fas fa-code"></i>
						<div className="text">Apps Design</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat mollitia rem rerum sunt? Adipisci animi autem deleniti iusto sunt!</p>
					</Column>
				</Row>

			</Column>
		</section>
	);
};
export default Services;