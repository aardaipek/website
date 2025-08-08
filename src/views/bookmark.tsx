import Bookmark from "../components/bookmark"
import Footer from "../components/common/footer"
import Navbar from "../components/common/navbar"


export default function BookmarkPage(){
    return(
        <div className="font-primary tracking-normal dark:bg-gray-900">
            <Navbar/>
            <Bookmark/>
            <Footer/>
        </div>
    )
}