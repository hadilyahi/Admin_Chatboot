import "./globals.css";
import { Jaldi } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jaldi = Jaldi({
  subsets: ["latin"],
  variable: "--font-jaldi",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Chat Admin",
  description: "This app was made by Chat Admin",
  icons: {
    icon: "/algeriePostLogo.svg",
  },
};

// components
import Sidebar from "../Components/Sidebar";
import Linkbar from "../Components/UI/Linkbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaldi.variable} bg-gray-100 overflow-x-hidden`}>
        <div className="w-screen h-screen flex relative">
          <Sidebar />
          <div className="flex-1 overflow-y-scroll">
            <Linkbar />
            {children}
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}