'use client'

import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from "@mui/material";
import { useEffect } from 'react';
import { signOut } from '../lib/firebase-config';
import { useAuth } from '../utils/AuthContext';

export default function Navbar() {
    const { user, loading } = useAuth();

    if (!user) {
        return (
            <div className="w-full h-10 bg-white border-black border-b-1">
            <div className="h-full flex justify-between items-center mx-6 py-4">
                <Link href="/">
                    <p className="text-black">Words</p>
                </Link>
            </div>
        </div>
        )
    }

    return (        
        <div className="w-full h-10 bg-white border-black border-b-1">
            <div className="h-full flex justify-between items-center mx-6 py-4">
                <Link href="/">
                    <p className="text-black">Words</p>
                </Link>
                <div className="flex justify-end" onClick={signOut}>
                    <Tooltip title="Log out">
                        <IconButton type="submit" color="primary"> 
                            <LogoutIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}