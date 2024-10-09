'use client'

import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        // e.preventDefault();
        // if (onSearch) {
        // onSearch(query);
        // }
        setQuery(''); // Clear the input after search
    };
    
    return (
        <div className='basis-36 flex flex-col justify-center items-center w-full'>
            <form className='zeroWidth:w-3/4 md:w-'>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="p-2 border w-full text-black bg-greyAccent border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            {/* <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>    */}
            </form>
        </div>
    )
}