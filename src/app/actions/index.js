'use server';

import {signIn, signOut} from "@/app/auth";

export async function doSocialLogin() { 
    await signIn({redirectTo: "/landing"})
}

export async function doLogout() {
    await signOut({redirectTo: "/"})
}