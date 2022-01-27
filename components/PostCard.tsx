import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PostInterface } from "../typings";
import moment from "moment";

interface PostCardProps {
   post: PostInterface;
}

const PostCard = ({ post }: PostCardProps) => {
   return (
      <div className="border rounded-lg shadow-sm mb-6 sm:mb-1 cursor-pointer group">
         <Link href={`/post/${post.slug.current}`}>
            <div className="">
               <div className="w-full object-cover h-[250px] sm:h-[200px] relative ">
                  <Image
                     src={urlFor(post.mainImage).url()!}
                     alt="post-image"
                     className="group-hover:scale-105 overflow-hidden transition-transform duration-200 ease-in-out rounded-t-lg"
                     layout="fill"
                     objectFit="cover"
                  />
               </div>

               <div className="py-5 px-4 bg-white">
                  <div className="flex justify-between mb-2">
                     <div className="pr-2 w-[90%]">
                        <h1 className="text-lg font-medium">{post.title}</h1>
                        <p className="text-sm font-medium text-gray-500">
                           Published on{" "}
                           <span className="text-green-600">
                              {moment(post.publishedAt).format("lll")}
                           </span>
                        </p>
                     </div>

                     <div className="h-9 w-9 relative">
                        <Image
                           src={urlFor(post.author.image).url()!}
                           alt="author-profile"
                           className="rounded-full"
                           layout="fill"
                           objectFit="cover"
                        />
                     </div>
                  </div>
                  <hr />
                  <div className="mt-2">
                     <p className=" text-justify text-base">
                        {post.description} by {post.author.name}
                     </p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default PostCard;
