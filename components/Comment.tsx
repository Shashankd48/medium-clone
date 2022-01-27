import { CommentInterface } from "../typings";
import Image from "next/image";
import moment from "moment";

interface CommentProps {
   comment: CommentInterface;
}

const Comment = ({ comment }: CommentProps) => {
   return (
      <div className="mb-1 px-3 pb-2 border-b">
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
   );
};

export default Comment;
