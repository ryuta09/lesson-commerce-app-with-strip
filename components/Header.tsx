import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import AuthServerButton from "./auth/AuthServerButton";

const Header = () => {
  return (
    <>
      <div className="flex py-4 px-56 border-b border-gray-200">
        <Link href={"/"}>
          <Button variant={"outline"}>ホーム</Button>
        </Link>
        <Link href={"/price"} className="ml-4">
          <Button variant={"outline"}>価格</Button>
        </Link>
        <div className="ml-auto">
          <AuthServerButton />
        </div>
      </div>
    </>
  );
};

export default Header;
