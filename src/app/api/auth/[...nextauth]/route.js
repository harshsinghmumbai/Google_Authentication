import ConnectMongodb from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const { name, email, image } = user;
          await ConnectMongodb();
          const userExist = await User.findOne({ email });
          if (!userExist) {
            const res = await fetch("http://localhost:3000/api/user_register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });

            if (!res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(
            "Error Occurred on nextauth route file checkout it",
            error
          );
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
