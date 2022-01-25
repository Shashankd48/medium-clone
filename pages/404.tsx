import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
   return (
      <main className="flex flex-col justify-center items-center h-[83vh]">
         <div className="w-[95%] h-[120px] sm:w-[65%] sm:h-[150px] lg:w-[55%] lg:h-[150px] relative">
            <Image src="/medium-logo.png" alt="medium-logo" layout="fill" />
         </div>

         <h1 className="mt-4 text-4xl font-bold">
            {" "}
            <span className=" text-blue-600">404</span> Page not found
         </h1>
         <Link href="/">
            <a className="bg-green-600 px-4 py-2 text-white rounded-md mt-6 active:opacity-80">
               Go back home
            </a>
         </Link>
      </main>
   );
};

export default PageNotFound;
