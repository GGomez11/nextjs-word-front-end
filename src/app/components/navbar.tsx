import Button from "@mui/material/Button";
import { doLogout } from "../actions";
import { auth } from "@/app/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";

export default async function Navbar() {
    const session = await auth();
    
    return (        
        <div className="w-full h-10 bg-white border-black border-b-1">
            <div className="h-full flex justify-between items-center mx-6 py-4">
                <Link href="/">
                    <p className="text-black">Words</p>
                </Link>
                { (session?.user) &&
                    <form action={doLogout} className="flex justify-end">
                        <Button type="submit" className="p-0 flex -right-2"> 
                            <LogoutIcon/>
                        </Button>
                    </form>
                }
            </div>
        </div>
    )
}