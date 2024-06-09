"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-2 px-20 items-center justify-between bg-secondary shadow-sm">
      <Link href={"/dashboard"}>
      <Image src={"/logo.svg"} width={50} height={50} alt="logo"/>
      </Link>
      <UserButton />
    </div>
  );
}

export default Header;
