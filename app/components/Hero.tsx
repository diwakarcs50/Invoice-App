import { RainbowButton } from "@/components/magicui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from '@/public/hero.png'

export function Hero(){
    return(
        <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
            <div className="text-center">
                <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
                    Introducing InvoiceStore 1.0

                </span>
                <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
                    Invoicing made <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">Super easy!</span>
                </h1>

                <p className="max-w-xl mx-auto mt-4 lg:text-lg font-medium text-muted-foreground">Creating invoices can be a pain we at Invoice store make it super easy for you to get paid in time</p>
                <div className="mt-7 mb-12">
                <Link href="/login">
                <RainbowButton>Get unlimited access</RainbowButton>
                </Link>
                </div>

            </div>

            <div className="relative items-center w-full py-12 mx-auto mt-12">
                <Image className='relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-2xl' src={HeroImage} alt="hero"/>
            </div>
        </section>
    )
}