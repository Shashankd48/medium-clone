import moment from "moment";
import Image from "next/image";
import { Comment } from "../typings";

interface CommentsProps {
   comments: [Comment];
}

const Comments = ({ comments }: CommentsProps) => {
   console.log(comments);
   return (
      <div className="px-5">
         <h3 className="font-medium text-xl">Comments :</h3>
         <hr />

         <div className="mt-5">
            {comments.map((comment) => (
               <div className="mb-1 px-3 pb-2  border-b">
                  <div className="flex mb-1 items-center">
                     <div className="h-9 w-9 relative rounded-full">
                        <Image
                           src="/avatar.jpg"
                           layout="fill"
                           alt="avatar"
                           objectFit="contain"
                           className="rounded-full"
                        />
                     </div>
                     <div className="pl-4">
                        <h1 className="font-medium">{comment.name}</h1>
                        <p className=" text-xs text-gray-500 font-medium">
                           {moment(comment._createdAt).startOf("day").fromNow()}
                        </p>
                     </div>
                  </div>

                  <p className="text-gray-600 pl-14">{comment.comment}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Comments;
