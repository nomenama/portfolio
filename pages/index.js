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
const [toggle, setToggle] = useState(false);

	return (
		<Screen>

			<nav className={`navBar ${scrollState > 0 ? "sticky" : ""}`}>
				<Column className="container">
					<Row className="logo"><Link href="#"><a>Portfo<span>lio.</span></a></Link></Row>

					<Row className="menu">
							<Link href="#home"><a>Home</a></Link>
							<Link href="#about"><a>About</a></Link>
							<Link href="#services"><a>Services</a></Link>
							<Link href="#skills"><a>Skills</a></Link>
							<Link href="#teams"><a>Teams</a></Link>
							<Link href="#contact"><a>Contact</a></Link>
					</Row>

					<Row className="menuButton">
						<i className="fas fa-bars"/>
					</Row>
				</Column>
			</nav>

			<section className="home" id="home">
				<Column className="container">
					<Row className="homeContent">
						<h3>Hello, my name is</h3>
						<h1>Nomen Ama</h1>
						<h2>And I am a <span>Developer</span></h2>
					</Row>
				</Column>
			</section>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti fugiat iure laboriosam necessitatibus nemo nihil, nobis obcaecati, placeat quasi quidem repellendus sapiente sit sunt ut. Accusantium amet, animi aut consequuntur dignissimos, eaque et ex facere fugit incidunt ipsa nemo pariatur quia quidem tempora veniam voluptatem. Aliquam autem cupiditate, deserunt doloribus eaque enim eos, esse hic labore maxime minima natus neque nesciunt possimus reiciendis rem, soluta. Accusamus ex expedita possimus! Accusantium aliquam aliquid animi at beatae blanditiis consequatur cum distinctio eius enim eos error est eveniet, ex hic id ipsa ipsam iure magni minima modi nemo neque nulla, officiis perspiciatis praesentium quam quas quasi ratione repellat rerum similique sunt veritatis vero voluptate voluptatem voluptatum! Aliquam cumque debitis ea eum incidunt ipsam ipsum, molestiae nam perspiciatis possimus similique voluptatum! At dolores doloribus dolorum, iure officiis sed veritatis. Ab ad alias amet at, autem debitis dolore doloribus, eos esse harum illo inventore ipsa ipsam iste iusto natus nemo neque nesciunt numquam pariatur perferendis porro praesentium provident quasi quisquam rem repellendus rerum saepe sint sunt tempora temporibus vitae, voluptate. Asperiores atque aut ea fugiat impedit molestias possimus rem voluptates! A consequatur, dicta eligendi explicabo laboriosam maxime perferendis quos veniam. Et illo modi officiis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, consequatur dolorum est ex natus odit officiis placeat quas recusandae? Aliquid asperiores dolorum ea est facere hic libero magnam nihil, perspiciatis placeat quam reprehenderit sint tempore. Aliquid cumque dignissimos eligendi et eveniet facere magnam, nisi nobis non quae quaerat, quod rerum unde! Ad ex possimus quod similique ut voluptate. Ab ad animi assumenda, consequatur consequuntur cumque dicta distinctio error esse explicabo facere minus nisi nobis nostrum, quaerat quod repellat tempora tempore voluptas voluptatem? Blanditiis, dolore, recusandae? Aliquam asperiores assumenda aut blanditiis, commodi corporis culpa cumque delectus dicta dolorum ducimus error impedit iure iusto laborum odit officiis perferendis, quam quidem saepe sit sunt suscipit voluptatem. Amet animi aperiam architecto, aut distinctio doloremque earum illum iure laboriosam necessitatibus, nobis non odit perspiciatis placeat quo tempora tempore. Accusamus ad adipisci asperiores at atque aut blanditiis corporis cum debitis delectus dolorem ducimus eligendi est eum exercitationem facilis fugiat id incidunt ipsum itaque laudantium, minima molestiae mollitia nesciunt nisi non nulla officiis praesentium quas quis ratione repellendus, reprehenderit rerum ullam vel velit vitae. Architecto assumenda, dolore facilis labore necessitatibus quam quibusdam quo sed tenetur velit. Assumenda autem commodi, delectus illo iusto laboriosam quo rerum sit?</p>
			<i className="far fa-thumbs-up fa-3x"/>
		</Screen>
	);
}
