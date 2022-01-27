import { CommentInterface } from "../typings";
import Comment from "./Comment";

interface CommentsProps {
   comments: [CommentInterface];
}

const Comments = ({ comments }: CommentsProps) => {
   return (
      <div className="px-5">
         <h3 className="font-medium text-xl">Comments :</h3>
         <hr />

         <div className="mt-5">
            {comments.map((comment) => (
               <Comment comment={comment} />
            ))}
         </div>
      </div>
   );
};

export default Comments;
