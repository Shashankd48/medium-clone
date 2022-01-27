import { PostInterface } from "../typings";
import PostCard from "./PostCard";

interface PostFeedProps {
   posts: [PostInterface];
}

const PostFeed = ({ posts }: PostFeedProps) => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-4 py-6 md:p-6">
         {posts.map((post) => (
            <PostCard post={post} key={post._id} />
         ))}
      </div>
   );
};

export default PostFeed;
