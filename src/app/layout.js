import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Auth_Provider } from "./Provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Google Authentication",
  description: "Created a Google Auth feature using Next.js framework",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Auth_Provider>
            <main className="max-w-[1400px] m-auto">
              <Header />
              {children}
              <Footer />
            </main>
          </Auth_Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
