import Header from "../../components/header/header.component";
import Frontpage from "../../components/frontpage/frontpage.component";
import About from "../../components/about/about.component";
import Packages from "../../components/packages/packages.component";
import Infoform from "../../components/infoform/infoform.component";

const Home = () => {
    return (
        <div>
            <Frontpage />
            <Packages />
            <About />
            <Infoform />
        </div>
    );
}

export default Home;