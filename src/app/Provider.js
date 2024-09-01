"use client";
import { SessionProvider } from "next-auth/react";

export const Auth_Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
