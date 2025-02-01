import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verify(){
      return(
        <div className="min-h-screen w-full flex items-center justify-center mb-4">
            <Card className="w-[380px] p-x-5">
                <CardHeader className="text-center ">
                    
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-100">
                        <Mail className="size-12 text-blue-500"/>
                    </div>
                    <CardTitle className="text-2xl font-bold">Check your Email</CardTitle>
                    <CardDescription>We have sent a verification link at your email address</CardDescription>

                </CardHeader>
                <CardContent>
                    <div className="mt-4 rounded bg-yellow-50 border-yellow-300 p-4 ">
                        <div className="flex items-center">
                            <AlertCircle className="size-5 text-yellow-400"/>
                            <p className="text-sm font-medium text-yellow-700 ml-3">Be sure to check you spam folder!</p>

                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <Link href="/" className={buttonVariants({
                        className:'w-full',
                        variant:'outline'
                    })}>
                      <ArrowLeft className="size-4 mr-2"/> Back to homePage
                    </Link>
                </CardFooter>

            </Card>
        </div>
      )
}