import Screen from "../components/Screen";
import Header from "../components/Header/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function Home() {
    return (
        <Screen>
            <Header/>
            <MainBanner/>
            <About/>
            <Projects/>
        </Screen>
    );
}
