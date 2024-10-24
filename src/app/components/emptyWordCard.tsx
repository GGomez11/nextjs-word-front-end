import { useState } from 'react'

export default function WordCard() {
    const [placeholder, setPlaceHolder] = useState('Add a word');

    return (
            <div className="flex justify-start items-center text-black flex-col bg-white zeroWidth:w-96 xl:w-[290px] p-3 rounded-lg zeroWidth:h-44 md:h-52 lg:h-44 xl:h-[350px] 
                shadow-sm transition-transform duration-1000 delay-1500">
                <div className={`relative flex flex-col justify-evenly xl:justify-start w-full w-full h-full bg-white items-center rounded-lg`}>
                    <form className='flex flex-col justify-start h-[32px]'>
                        <input
                            type="text"
                            placeholder={placeholder}
                            className={`text-2xl text-center w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-500`}
                            onFocus={() => setPlaceHolder('')}
                            onBlur={() => setPlaceHolder('Add a word')}
                        />
                    </form>
                <hr className="my-2 border-t-1 border-black w-full hidden xl:block" />
                </div>
            </div>
    )
}