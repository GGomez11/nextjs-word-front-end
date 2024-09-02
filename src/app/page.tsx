import Image from "next/image";
import WordCard from "./components/wordcard";
import Button from '@mui/material/Button';

export default function Home() {
  
  return (
    <div className="h-full" >
      {/* Mobile View */} 
      <div className="h-full zeroWidth:flex flex-col justify-evenly items-center lg:hidden">
        <div className="zeroWidth:flex flex-col justify-center md:items-start items-center xs:px-4 sm:px-9 lg:px-20 lg:hidden">
          <p className="text-2xl xs:text-3xl sm:text-5xl 2xl:text-7xl mb-1">New Words at your fingertips.</p>
          <p className="zeroWidth:hidden md:block lg:hidden md:text-3xl 2xl:text-6xl">Store definitions. </p>
          <p className="zeroWidth:hidden md:block lg:hidden md:text-3xl 2xl:text-6xl">Learn pronunciations.</p>
          <p className="zeroWidth:hidden md:block lg:hidden md:text-3xl 2xl:text-6xl">Find synonyms.</p>
        </div>
        <div className="w-full flex justify-center ">
          <WordCard></WordCard>
        </div>
        <div>
          <Button variant="contained" className="capitalize" size="large">
            Get Started 
          </Button>
        </div>
      </div>
      {/* Desktop View */} 
      <div className="h-full zeroWidth:hidden lg:flex">
        <div className="basis-3/5	xs:px-4 sm:px-9 lg:px-20 flex flex-col justify-center">
          <div className="mb-7 basis-2/5 flex flex-col justify-end">
            <p className="text-7xl">New Words at your fingertips.</p>
          </div>
          <div className="text-4xl basis-3/5">
            <p className="">Store definitions. </p>
            <p className="">Learn pronunciations.</p>
            <p className="">Find synonyms.</p>
            <div className="mt-7">
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex flex-col justify-center">
          <div>Card Card</div>
        </div>
      </div>
    </div>
  )
}
