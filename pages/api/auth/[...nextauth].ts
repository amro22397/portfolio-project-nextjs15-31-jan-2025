import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "@/models/User";



export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: {
            label: "email",
            type: "text",
          },
          password: {
            label: "password",
            type: "password",
          },
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials.password) {
                throw new Error("Invalid email or password");
              }
              mongoose.connect(process.env.MONGO_URL as string)
      
              const user = await User.findOne({email: credentials.email})

              if (!user) {
                throw new Error("User is not exists");
              }

              // const isCorrectPassword = await bcrypt.compare(
              //   credentials.password,
              //   user.hashedPassword
              // );
      
              // if (!isCorrectPassword) {
              //   throw new Error("Password is incorrect");
              // }
      
              return user;

              }
            
      })
    ],

    pages: {
        signIn: "/login",
    },
    debug: process.env.NODE_ENV === "development",

    session: {
        strategy: "jwt",
    },
};

export default NextAuth(authOptions);