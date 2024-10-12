import { Tooltip } from "@mui/material";

export default function WordCard() {

    return (
        <Tooltip title="Add a word">
            <div className="flex justify-center items-center text-black flex-col bg-white p-4 rounded-lg zeroWidth:w-4/5 md:w-4/5 lg:w-4/5 zeroWidth:h-44 md:h-36 lg:h-44 md:h-52 p-5
                shadow-sm cursor-pointer transition-transform duration-1000 delay-1500">
                <p className="text-8xl">+</p>
            </div>
        </Tooltip>
    )
}