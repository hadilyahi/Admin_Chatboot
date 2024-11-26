import Image from "next/image";
import SidebarList from "./UI/SidebarList";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="flex-[0.13] transition-all flex flex-col items-center justify-between gap-5 bg-white p-2 shadow">
      {/* sinse it's the logo it will navigate to the home page */}
      <Link href="/" className="logo bg-white rounded-full">
        <Image src={"/algeriePostLogo.svg"} alt="logo" width={100} height={100} />
      </Link>

      <SidebarList />

      <div className="flex flex-col items-center gap-4 w-full">
        <button className="bg-gray shadow rounded-full px-4 py-2 w-full">
          Hide
        </button>
        
        {
          // !this link for logout feature if exists
        /* <Link href="/">
          <Image src={"/logout.svg"} alt="logout" width={40} height={40} />
        </Link> */
        }
      </div>
    </aside>
  );
};

export default Sidebar;
