import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

// add providers for auth
export const  auth0ptions = {
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID ?? "",
          clientSecret: process.env.GITHUB_SECRET ?? "",
        })
      ]
};

// handlers for GET and POST requests


