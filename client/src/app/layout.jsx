import "./globals.css";
import { Jaldi } from "next/font/google";

const jaldi = Jaldi({
  subsets: ["latin"],
  variable: "--font-jaldi",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Chat Admin",
  description: "this App was made by Chat Admin",
};

// components
import Sidebar from "../Components/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaldi.variable} antialiased flex`}>
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
