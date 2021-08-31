import Screen from "../components/Screen";
import Header from "../components/Header";
import Column from "../components/Column";
import Row from "../components/Row";
import MainBanner from "../components/MainBanner";
import About from "../components/About";
import Services from "../components/Services";

export default function Home (props) {

	return (
		<Screen>

			<Header/>
			<MainBanner/>
			<About />
			<Services />

		</Screen>
	);
}
