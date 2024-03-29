import Footer from "../components/footer";
import Navbar from "../components/navbar"
import About from "../components/about";

export default function AboutPage() {
    return (
        <div className="flex container mx-auto max-w-screen-md place-content-center">
            <div className="justify-center items-center">
                <Navbar/>
                <About/>
                <Footer/>
            </div>
        </div>
    )
}