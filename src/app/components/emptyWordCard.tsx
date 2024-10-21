import { Tooltip } from "@mui/material";

export default function WordCard() {

    return (
        <Tooltip title="Add a word">
            <div className="flex justify-center items-center text-black flex-col bg-white zeroWidth:w-96 xl:w-[290px] px-4 rounded-lg zeroWidth:h-44 md:h-52 lg:h-44 xl:h-[350px] 
                shadow-sm cursor-pointer transition-transform duration-1000 delay-1500">
                <p className="text-8xl relative -top-2">+</p>
            </div>
        </Tooltip>
    )
}