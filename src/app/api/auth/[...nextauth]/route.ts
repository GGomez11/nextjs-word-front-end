import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
            }
        }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // If the user just logged in, get the id_token from the account
      if (account) {
        token.idToken = account.id_token; // Add id_token to the token object
      }
      return token;
    },
    async session({ session, token }) {
      // Include the idToken in the session object
      session.idToken = token.idToken; // Pass the idToken to the session
      return session;
    },
  },
});

export { handler as GET, handler as POST }