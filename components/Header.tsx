import Link from "next/link";

const Header = () => {
   return (
      <header>
         <div className="flex items-center space-x-5">
            <Link href="/">
               <img
                  src="/medium-logo.png"
                  alt="Logo"
                  className="w-44 object-contain cursor-pointer"
               />
            </Link>
            <div className="hidden sm:inline-flex items-center space-x-5">
               <h3>About</h3>
               <h3>Contact</h3>
               <h3 className="bg-green-600 text-white px-4 py-1 rounded-full">
                  Follow
               </h3>
            </div>
         </div>
      </header>
   );
};

export default Header;
