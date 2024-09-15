'use server';

import {signIn, signOut} from "@/app/auth";

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, {redirectTo: "/landing"})
}

export async function doLogout() {
    await signOut({redirectTo: "/"})
}