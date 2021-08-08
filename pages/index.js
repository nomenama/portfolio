import Head from "next/head";
import Link from "next/link";
import Screen from "../components/Screen";
import Row from "../components/Row";
import Column from "../components/Column";

export default function Home () {
	return (
		<Screen>

			<nav className="navBar">
				<Column className="container">
					<Row className="logo"><Link href="#"><a>Portfo<span>lio.</span></a></Link></Row>

					<Row className="menu">
						<Link href="#"><a>Home</a></Link>
						<Link href="#"><a>About</a></Link>
						<Link href="#"><a>Services</a></Link>
						<Link href="#"><a>Skills</a></Link>
						<Link href="#"><a>Teams</a></Link>
						<Link href="#"><a>Contact</a></Link>
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
			<i className="far fa-thumbs-up fa-3x"></i>
		</Screen>
	);
}
