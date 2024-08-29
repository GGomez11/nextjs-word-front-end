import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-around items-center">
      <div>
        <p className="text-2xl lg:text-4xl 2xl:text-9xl mb-1">New Words at your fingertips.</p>
        <p className="sm: invisible md:visible lg:text-3xl 2xl:text-8xl">Store definitions. </p>
        <p className="sm: invisible md:visible lg:text-3xl 2xl:text-8xl">Learn pronunciations.</p>
        <p className="sm: invisible md:visible lg:text-3xl 2xl:text-8xl">Find synonyms.</p>
      </div>
      <div>
        Dog Card
      </div>
      <div>
       Get Started 
      </div>
    </div>
  )
}
