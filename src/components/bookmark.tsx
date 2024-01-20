
export default function Bookmark() {
    const bookmarks = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet',
            link: '#',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            date: 'Jun,12 2023'
        },
        {
            id: 2,
            title: 'Consectetur adipiscing elit',
            link: '#',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            date: 'Sep,12 2023',
        },
        {
            id: 3,
            title: 'Molestiae consequatur, vel illum qui ',
            link: '#',
            description: 'otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
            date: 'Sep,15 2023'
        },
        {
            id: 4,
            title: 'At vero eos et accusamus et iusto odio dignissimos ',
            link: '#',
            description: '',
            date: 'Sep,15 2023'
        },
    ]
    return (
        <>
            <div id="bookmarks" className="container py-7 mt-32 dark:bg-gray-800 rounded-3xl">
                <div className="flex place-content-center">
                    <div>
                        <div>
                            <p className="text-2xl pt-14 mb-2 font-semibold text-orange-200"> Bookmarks</p>
                            <p className="text-md text-gray-300 ">I share snippets of wisdom that have left a lasting impact on me. I keept them here for remind </p>
                            <hr className="my-6 h-0.5 border-t-0 bg-gray-300/50 opacity-100 dark:opacity-50" />
                        </div>
                        {bookmarks.map((bookmark) => (
                            <div className="flex container my-24 text-gray-300 flex-col items-start justify-items-start justify-start border-b-2 border-gray-700 " key={bookmark.id}>
                                <div className="text-amber-300 mb-4 cursor-pointer hover:underline">
                                    <a href='#'>
                                        <p>{bookmark.title}</p>
                                    </a>
                                </div>
                                {bookmark.description.length > 0 && (
                                    <div className="mb-4 ">
                                        {bookmark.description}
                                    </div>
                                )}
                                <div className="columns-2 flex-row">
                                    <div className="mb-4 text-gray-100/50">
                                        domain.com
                                    </div>
                                    <div className="text-gray-300/25 mb-4">
                                        {bookmark.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}