'use client'

import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from "@mui/material";
import { useEffect } from 'react';

export default function Navbar() {
    const { data: session, status } = useSession();
    
    useEffect(() => {
        
      }, [status]);



    return (        
        <div className="w-full h-10 bg-white border-black border-b-1">
            <div className="h-full flex justify-between items-center mx-6 py-4">
                <Link href="/">
                    <p className="text-black">Words</p>
                </Link>
                { (session) &&
                    <div onClick={() => signOut()} className="flex justify-end">
                        <Tooltip title="Log out">
                            <IconButton type="submit" color="primary"> 
                                <LogoutIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                }
            </div>
        </div>
    )
}