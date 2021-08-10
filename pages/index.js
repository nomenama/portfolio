import React, {useEffect, useState} from "react";
import Link from "next/link";
import Screen from "../components/Screen";
import Row from "../components/Row";
import Column from "../components/Column";

export default function Home () {
	//sticky navBar state
	const [scrollState, setScrollState] = useState(0);
	const handleScroll = () => {
		setScrollState(window.scrollY > 20);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	//toggle menu/navbar state
	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	return (
		<Screen>

			<nav className={`navBar ${scrollState > 0 ? "sticky" : ""}`}>
				<Column className="container">
					<Row className="logo"><Link href="#"><a>Portfo<span>lio.</span></a></Link></Row>

					{(toggleMenu || screenWidth > 947) && (
						<Row className="menu">
							<Link href="#home"><a>Home</a></Link>
							<Link href="#about"><a>About</a></Link>
							<Link href="#services"><a>Services</a></Link>
							<Link href="#skills"><a>Skills</a></Link>
							<Link href="#teams"><a>Teams</a></Link>
							<Link href="#contact"><a>Contact</a></Link>
						</Row>
					)}


					<Row className="menuButton">
						<i onClick={toggleNav} className="fas fa-bars"/>
					</Row>
				</Column>
			</nav>

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

			<section className="about" id="about">
				<Column className="container">
					<h2>About me</h2>
					<Row className="aboutContent">
						<div className="imgColumn">
							<img src="/assets/profile-1.jpeg" alt="image of the author"/>
						</div>

						<div className="detailColumn">
							<div className="text">I&apos;m Nomen and I&apos;m a <span>Developer</span></div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi corporis dolores dolorum eum excepturi impedit ipsam, magni, molestiae nam nobis nostrum officiis quasi quisquam rem sit tempore ullam ut veritatis! Accusantium, aperiam aspernatur assumenda consequuntur, dignissimos dolor doloribus ducimus est explicabo id magnam modi neque numquam rerum ullam.
							</p>
							<a href="https://www.github.com/nomenama">Download CV</a>
						</div>
					</Row>
				</Column>
			</section>
		</Screen>
	);
}
