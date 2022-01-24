import Image from "next/image";

const Banner = () => {
   return (
      <div className="flex justify-center items-center bg-sky-200 border-y border-black py-10 lg:p-0">
         <div className="px-10 space-y-5">
            <h1 className="text-5xl lg:text-6xl max-w-xl font-serif">
               <span className="underline decoration-black decoration-4">
                  Medium
               </span>{" "}
               is a place to write, read and connect.
            </h1>
            <h2 className=" text-lg">
               It's easy and free to post your thinking on any topic and connect
               with millions of readers.
            </h2>
         </div>

         <div className="hidden md:inline-flex">
            <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
               <Image
                  src="/big-m-medium-logo.png"
                  alt="banner-image"
                  layout="fill"
                  objectFit="contain"
               />
            </div>
         </div>
      </div>
   );
};

export default Banner;
