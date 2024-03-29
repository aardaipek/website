import React, { useState, useEffect } from 'react';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_QUOTES_TABLE_ID}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                        },
                    });
                const jsonData = await response.json();
                const extractedFields = jsonData.records.map((record:any) => {
                    const { Author, "Quote Text": QuoteText, "Quote Book": QuoteBook, } = record.fields;
                    return { Author, QuoteText, QuoteBook };
                });
                setQuotes(extractedFields);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div id="bookmarks" className="mt-12">
                <div className="relative flex min-h-screen flex-col justify-center pb-24">
                    <div>
                        <p className="text-base font-semibold text-orange-800"> Quotes</p>
                        <p className="text-md">I share snippets of wisdom that have left a lasting impact on me. I keept them here for remind </p>
                    </div>
                    <div className="columns-3 2xl:columns-3 gap-5 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit mt-7">
                        {quotes.map((quote:{Author:string, QuoteText:string, QuoteBook:string}) => (
                            <div className="break-inside-avoid rounded-lg mb-4 py-2">
                                <div className="block max-w-sm p-6 rounded-lg shadow dark:hover:bg-orange-100/25">
                                    <div className="flex flex-row mb-2 place-content-between">
                                        <p className="text-base font-medium text-orange-800">{quote.Author}</p>
                                        <p className="text-xs font-light text-orange-800/75">{quote.QuoteBook}</p>
                                    </div>
                                    <blockquote className="text-l italic font-ligth text-gray-900/75">
                                        <svg className="w-8 h-8 dark:text-gray-500 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                        </svg>
                                        <p>{quote.QuoteText}</p>
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