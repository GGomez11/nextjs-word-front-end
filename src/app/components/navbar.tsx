import Button from "@mui/material/Button";
import { doLogout } from "../actions";
import { auth } from "@/app/auth";
import Image from 'next/image';

export default async function Navbar() {
    const session = await auth();
    
    return (        
        <div className="w-full h-10 bg-white border-black border-b-1 absolute">
            <div className="h-full flex justify-between items-center mx-6 py-4">
                <p className="text-black">Words</p>
                { (session?.user) &&
                    <form action={doLogout} className="flex justify-end">
                        <Button type="submit" className="p-0 flex justify-end"> 
                            <Image
                                src="logout.svg"
                                width={30}
                                height={30}
                                alt="Log out icon"
                            />
                        </Button>
                    </form>
                }
            </div>
        </div>
    )
}