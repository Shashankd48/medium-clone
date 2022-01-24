import Image from "next/image";
import Link from "next/link";

const Header = () => {
   return (
      <header className="flex justify-between py-3 sm:py-5 sm:pl-2 sm:pr-4 px-1 pr-2 max-w-6xl mx-auto border-b">
         <div className="flex items-center space-x-5">
            <Link href="/">
               <div className="w-32 relative h-full cursor-pointer">
                  <Image
                     src="/medium-logo.png"
                     layout="fill"
                     objectFit="contain"
                     alt="Medium Logo"
                  />
               </div>
            </Link>
            <div className="hidden sm:inline-flex items-center space-x-5">
               <h3>About</h3>
               <h3>Contact</h3>
               <h3 className="bg-green-600 text-white px-4 py-1 rounded-full">
                  Follow
               </h3>
            </div>
         </div>

         <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className=" border px-4 py-1 rounded-full border-green-600">
               Get Started
            </h3>
         </div>
      </header>
   );
};

export default Header;
