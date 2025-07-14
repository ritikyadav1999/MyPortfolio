'use client';

import {useState} from 'react';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/DropdownMenu";
import Link from "next/link";
import {Menu} from "lucide-react";
import {getNavItems} from "@/lib/utils";

const Hamburger = () => {
  const navItems = getNavItems();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={toggleDropdown}
    >
      <DropdownMenuTrigger className="focus:outline-none">
        <Menu className="h-8 w-8 rounded-md text-emerald-900" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        {
          navItems.map(({name, href, icon: Icon}, idx) => (
            <div key={idx}>
              <DropdownMenuItem asChild>
                <Link className="cursor-none capitalize flex items-center justify-between" href={href}>
                  {name} <Icon className="h-4 w-4"/>
                </Link>
              </DropdownMenuItem>
              {idx !== navItems.length - 1 && <DropdownMenuSeparator />}
            </div>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Hamburger;