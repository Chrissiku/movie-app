import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-primary p-[1rem]">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl cursor-pointer">
          Movie App
        </Link>
        <div className="font-medium text-white inline-flex justify-between items-center gap-1 min-w-[130px] cursor-pointer">
          <span>John Doe</span>
          <div className="overflow-hidden">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src="https://cdn.pixabay.com/photo/2023/01/27/09/40/australian-king-parrot-7748188__340.jpg"
              alt="John Doe"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
