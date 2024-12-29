import Image from "next/image";
import logo from "../public/Frame 3.svg"
import img1 from "../public/Group 1.svg"
import tree from "../public/Tree.svg"
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="px-20 py-5 w-full h-full">
      <div>
        {/* logo */}
        <div className="py-10">
          <Image src={logo} alt="logo" width={250} height={250}></Image>
        </div>
        {/* text */}
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold tracking-wide pb-5">
            We're currently building<br/>
            something exciting!<br/>
            Check back soon.
          </span>
          <span>
            For anything else you can mail us at:
          </span>
          <span className="flex items-center gap-2">
            <IoIosMail className="text-2xl"/>
            <a href="mailto:hirisba@gmail.com">
              hirisba@gmail.com
            </a>
          </span>
        </div>
        {/* images */}
        <div className="flex relative">
          {/* bottom left image */}
          <div className="flex flex-col pt-20 w-fit content-end">
            <Image src={img1} alt="People Dancing" width={350} height={250}></Image>
          </div>
          {/* Tree Image */}
          <div className="hidden lg:block absolute -top-44 right-10">
            <Image src={tree} alt="Tree" width={250} height={250}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
