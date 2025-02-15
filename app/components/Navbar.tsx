import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.png'


import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function Navbar(){
    return(
        <div className="flex items-center justify-between py-5">
            <Link href='/' className="flex items-center justify-between py-5 ">
            <Image src={Logo} alt='Logo' className="size-10"/>
            <h3 className="text-3xl font-semibold">Invoice<span className="text-blue-500">Store</span></h3>
            </Link>
            <Link  href='/login'>
              <InteractiveHoverButton>Get Started</InteractiveHoverButton>
            </Link>

        </div>
    )
}