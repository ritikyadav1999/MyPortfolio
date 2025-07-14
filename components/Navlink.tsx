'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {FC} from "react";

interface NavlinksProps {
  href: string;
  name: string;
}

const Navlink: FC<NavlinksProps> = ({ href, name }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-emerald-900 transition-colors duration-300 cursor-none relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full",
        path === href && 'text-emerald-900'
      )}
    >
      {name}
    </Link>
  )
}
export default Navlink;