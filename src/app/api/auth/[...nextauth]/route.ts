import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/lib/prisma/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text", placeholder: "member" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials: any): Promise<any | null> {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        if (!credentials.role) {
          throw new Error("Please select a role");
        }

        if (credentials.role === "admin") {
          console.log("admin selected");
          // check to see if user exists
          const user = await prisma.admin.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // if no user was found
          if (!user || !user?.hashedPassword) {
            throw new Error("Incorrect Credentials");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Incorrect Credentials");
          }

          return user;
        } else if (credentials.role === "centerMember") {
          console.log("center member selected");
          // check to see if user exists
          const user = await prisma.center_Member.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // if no user was found
          if (!user || !user?.hashedPassword) {
            throw new Error("Incorrect Credentials");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Incorrect Credentials");
          }

          return user;
        } else if (credentials.role === "secretary") {
          console.log("secretary selected");
          // check to see if user exists
          const user = await prisma.secretary.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // if no user was found
          if (!user || !user?.hashedPassword) {
            throw new Error("Incorrect Credentials");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Incorrect Credentials");
          }

          return user;
        } else if (credentials.role === "convert") {
          console.log("convert selected");
          // check to see if user exists
          const user = await prisma.convert.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // if no user was found
          if (!user || !user?.hashedPassword) {
            throw new Error("Incorrect Credentials");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Incorrect Credentials");
          }

          return user;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
