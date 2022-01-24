const Banner = () => {
   return (
      <div className="flex justify-center items-center bg-sky-200 border-y border-black py-10 lg:p-0">
         <div className="px-10 space-y-5">
            <h1 className="text-5xl max-w-xl font-serif">
               <span className="underline decoration-black decoration-4">
                  Medium
               </span>{" "}
               is a place to write, read and connect.
            </h1>
            <h2>
               It's easy and free to post your thinking on any topic and connect
               with millions of readers.
            </h2>
         </div>

         <div>
            <img
               src="/big-m-medium-logo.png"
               alt="banner-image"
               className="hidden md:inline-flex h-48  lg:h-full"
            />
         </div>
      </div>
   );
};

export default Banner;
