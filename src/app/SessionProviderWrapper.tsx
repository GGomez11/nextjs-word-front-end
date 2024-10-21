'use client';

import { SessionProvider } from 'next-auth/react'; // Assuming you're using NextAuth.js

export default function SessionProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}