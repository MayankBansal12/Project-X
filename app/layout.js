import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cine-X - Gives you something to watch",
  description:
    "Cine-X is the place to go to search what will you watch today. Explore from collections of movies and shows and pick one to watch today! Explore now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
