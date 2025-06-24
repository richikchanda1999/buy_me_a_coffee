import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      {/* Success Icon */}
      <div className="relative">
        <Avatar className="rounded-4xl size-24">
          <AvatarImage src="https://ui-avatars.com/api/?name=Alex+Taylor" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-semibold text-xl">Payment Successful!</h1>
        <h2 className="text-center max-w-md">
          Thank you so much for buying me a coffee! Your support means the world to me and helps keep me caffeinated and
          coding.
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/" className="block">
          <Button className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      
    </div>
  );
}
