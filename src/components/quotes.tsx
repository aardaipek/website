export default function Quotes() {
    const quotes = [
        {
            quoteText: 'At dawn, when you have trouble getting out of bed, tell yourself: ‘I have to go to work—as a human being. What do I have to complain of, if I’m going to do what I was born for—the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?',
            author: 'Marcus Aurelius',
            img: '',
            quoteBook: 'Meditations'
        },
        {
            quoteText: 'Time is the friend of the wonderful company, the enemy of the mediocre.',
            author: 'Warren Buffet',
            img: '',
            quoteBook: ''
        },
        {
            quoteText: 'Lend yourself to others, but give yourself to yourself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: 'Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.',
            author: 'Robert T. Kiyosaki',
            img: '',
            quoteBook: 'Rich Dad, Poor Dad'
        },
        {
            quoteText: "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place, and this will be carried away too.",
            author: 'Marcus Aurelius',
            img: '',
            quoteBook: 'Meditations'
        },
        {
            quoteText: 'I do not care so much what I am to others as I care what I am to myself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: "The time to repair the roof is when the sun is shining",
            author: 'John F. Kennedy',
            img: '',
            quoteBook: ''
        },
        {
            quoteText: 'Lend yourself to others, but give yourself to yourself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: 'I do not care so much what I am to others as I care what I am to myself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: 'We have always known that heedless self interest was bad morals, we now know that it is bad economics.',
            author: 'Franklin Delano Roosevelt',
            img: '',
            quoteBook: ''
        },
        {
            quoteText: "Everyone thinks of changing the world, but no one thinks of changing himself.",
            author: 'Lev Nikolayevich Tolstoy',
            img: '',
            quoteBook: ''
        },
        {
            quoteText: "However stupid a fool's words may be, they are sometimes enough to confound an intelligent man.",
            author: 'Nikolai Vasilievich Gogol',
            img: '',
            quoteBook: 'Dead Souls'
        },
    ]
    return (
        <>
            <div id="bookmarks" className="mt-12">
                <div className="relative flex min-h-screen flex-col justify-center pb-24">
                    <div>
                        <p className="text-base font-semibold text-orange-800"> Quotes</p>
                        <p className="text-md">I share snippets of wisdom that have left a lasting impact on me. I keept them here for remind </p>
                    </div>
                    <div className="columns-3 2xl:columns-3 gap-5 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit mt-7">
                        {quotes.map((quote) => (
                            <div className="break-inside-avoid rounded-lg mb-4 py-2">
                                <div className="block max-w-sm p-6 rounded-lg shadow dark:hover:bg-orange-100/25">
                                    <div className="flex flex-row mb-2 place-content-between">
                                        <p className="text-base font-medium text-orange-800">{quote.author}</p>
                                        <p className="text-xs font-light text-orange-800/75">{quote.quoteBook}</p>
                                    </div>
                                    <blockquote className="text-l italic font-ligth text-gray-900/75">
                                        <svg className="w-8 h-8 dark:text-gray-500 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                        </svg>
                                        <p>{quote.quoteText}</p>
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}