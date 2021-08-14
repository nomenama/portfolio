import React, {useEffect, useState} from "react";
import Row from "../components/Row";
import Column from "../components/Column";
import {motion} from "framer-motion";
import Link from "next/link";

const Header = (props) => {
	const [scrollState, setScrollState] = useState(0);
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleScroll = () => {
		setScrollState(window.scrollY > 20);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	const hamburgerIcon = <i onClick={toggleNav} className="fas fa-bars"/>;
	const closeIcon = <i onClick={toggleNav} className="fas fa-times"/>;

	const closeMobileMenu = () => setToggleMenu(false);

	const animateFrom = {opacity: 0, y: -40};
	const animateTo = {opacity: 1, y: 0};

	return (
		<nav className={`navBar ${scrollState > 0 ? "sticky" : ""}`}>
			<Column className="container">
				<Row className="logo"><Link href="#"><a>Portfo<span>lio.</span></a></Link></Row>

				{toggleMenu && (
					<Row className="menu" isMobile={true} closeMobileMenu={closeMobileMenu}>
						<Link href="#home">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={() => props.isMobile && props.closeMobileMenu()}>Home</motion.a>
						</Link>
						<Link href="#about">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={() => props.isMobile && props.closeMobileMenu()}>About</motion.a>
						</Link>
						<Link href="#services">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={() => props.isMobile && props.closeMobileMenu()}>Services</motion.a>
						</Link>
						<Link href="#skills">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} onClick={() => props.isMobile && props.closeMobileMenu()}>Skills</motion.a>
						</Link>
						<Link href="#teams">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.40}} onClick={() => props.isMobile && props.closeMobileMenu()}>Teams</motion.a>
						</Link>
						<Link href="#contact">
							<motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.50}} onClick={() => props.isMobile && props.closeMobileMenu()}>Contact</motion.a>
						</Link>
					</Row>
				)}

				<Row className="menuButton">
					{toggleMenu ? closeIcon : hamburgerIcon}
				</Row>
			</Column>
		</nav>
	);
};

export default Header;