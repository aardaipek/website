import { useState } from 'react';

export default function Footer() {


    const [currentDate, setCurrentDate] = useState(new Date());
    return (
        <footer className="container flex flex-row">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="block text-sm  sm:text-center text-gray-300">Arda Ipek {currentDate.getFullYear()}. ❤ <span className='text-sm  sm:text-center text-red-200'>Sumy</span></span>
            </div>
        </footer>
    )
}