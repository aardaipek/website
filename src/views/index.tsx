import SimpleAbout from "../components/simple-about";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import About from "../components/about";
import Contact from "../components/contact";
import Quotes from "../components/quotes";


export default function Index() {
    return (
        <div className="flex container mx-auto max-w-screen-md place-content-center">
            <div className="justify-center items-center">
                <Navbar/>
                <SimpleAbout/>
                <Contact/>
                <About/>
                <Quotes/>
                <Footer/>
            </div>
        </div>
    )
}