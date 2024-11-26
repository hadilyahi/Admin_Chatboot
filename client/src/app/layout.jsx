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
  icons: {
    icon: "/algeriePostLogo.svg",
  },
};

// components
import Sidebar from "../Components/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaldi.variable} bg-gray`}>
        <div className="w-screen h-screen flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
