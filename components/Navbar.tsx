import Link from "next/link";
import { Sacramento } from "next/font/google";
import Hamburger from "@/components/Hamburger";
import Navlink from "@/components/Navlink";
import { getNavItems } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const navItems = getNavItems();

  return (
    <div className="sticky top-0 inset-x-0 bg-white/80 shadow-lg backdrop-blur-md z-20 py-4 border-b border-emerald-100 min-h-[72px]">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center">
          <Link href="/" className={`flex items-center group select-none`}>
            <span
              className={
                `text-3xl md:text-5xl font-normal` +
                ` text-[#10B981] tracking-tight ${sacramento.className}`
              }
            >
              Ritik Yadav
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="gap-10 hidden md:flex text-emerald-900 text-lg font-medium">
            {navItems.map(({ name, href }, idx) => (
              <Navlink key={idx} href={href} name={name} />
            ))}
          </div>
          <Link
            href="https://wa.me/917027593424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors duration-200 shadow-md text-base"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp
          </Link>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;