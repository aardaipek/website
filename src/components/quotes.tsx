export default function Quotes() {
    const quotes = [
        {
            quoteText: 'It is not death that a man should fear, but he should fear never beginning to live',
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
            quoteText: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
            author: 'Steve Jons',
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
            quoteText: 'Lend yourself to others, but give yourself to yourself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: 'Lend yourself to others, but give yourself to yourself.',
            author: 'Michel de Montaigne',
            img: '',
            quoteBook: 'The Complete Essays'
        },
        {
            quoteText: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
            author: 'Steve Jons',
            img: '',
            quoteBook: ''
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
                    <div className="columns-3 2xl:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit mt-14">
                        {quotes.map((quote) => (
                            <div className="break-inside-avoid mb-6 rounded-lg mb-4">
                                <div className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
                                    <div className="flex flex-row mb-2  place-content-between">
                                        <p className="text-base font-medium text-orange-800">{quote.author}</p>
                                        <p className="text-xs font-light text-orange-800/75">{quote.quoteBook}</p>
                                    </div>
                                    <blockquote className="text-l italic font-ligth text-gray-700/50">
                                        <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                        </svg>
                                        <p className="">{quote.quoteText}</p>
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