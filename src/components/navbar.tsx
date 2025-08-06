
export default function Navbar() {
    return (
        <div id='navbar'>
        <nav className="container">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto py-2">

                <div className="w-full md:block md:w-auto">
                    <ul className="flex justify-center items-center flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row">
                        <li>
                            <a href="/" className="py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline">About</a>
                        </li>
                        <li>
                            <a href="https://medium.com/@aardaipek" target="_blank" className="py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline">Writings</a>
                        </li>
                        <li>
                            <a href="/portfolio" className="py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}