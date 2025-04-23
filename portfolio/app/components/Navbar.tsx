"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-end">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl m-auto mr-40 z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Good, to see you</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Hi, There!</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-4 p-2">
            <ProductItem
              title="Type Master"
              href="https://rush-typing.vercel.app/"
              src="https://abhaypotrfolio.netlify.app/asset/images/type_master.png"
              description="Check your typing speed"
            />
            <ProductItem
              title="Influenz"
              href="https://influenz.co.in/"
              src="https://abhaypotrfolio.netlify.app/asset/images/influenz.png"
              description="A website made of Marketing Company."
            />
            <ProductItem
              title="NST-SDC"
              href="https://www.nstsdc.org/"
              src="https://abhaypotrfolio.netlify.app/asset/images/nstsdc.png"
              description="Collage dev club website, worked on UI."
            />
            <ProductItem
              title="DevBlog"
              href="https://#"
              src="https://abhaypotrfolio.netlify.app/asset/images/blog_website.png"
              description="Rsponsive blog website."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Conect Me</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
