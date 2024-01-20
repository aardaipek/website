import Bookmark from "../components/bookmark"
import Footer from "../components/footer"
import Navbar from "../components/navbar"


export default function BookmarkPage(){
    return(
        <div className="font-primary tracking-normal dark:bg-gray-900">
            <Navbar/>
            <Bookmark/>
            <Footer/>
        </div>
    )
}