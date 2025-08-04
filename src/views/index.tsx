import SimpleAbout from "../components/simple-about";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import About from "../components/about";
import Contact from "../components/contact";
import Quotes from "../components/quotes";
import Portfolio from "../components/portfolio";


export default function Index() {
    return (
        <div className="flex container mx-auto max-w-screen-md place-content-center">
            <div className="justify-center items-center">
                <Navbar/>
                <SimpleAbout/>
                <Contact/>
                <About/>
                <Quotes/>
                <Portfolio/>
                <Footer/>
            </div>
        </div>
    )
}