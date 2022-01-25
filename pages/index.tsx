import Banner from "../components/Banner";
import Page from "../components/Page";
import PostFeed from "../components/PostFeed";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface HomeProps {
   posts: [Post];
}

export default function Home({ posts }: HomeProps) {
   console.log(posts);

   return (
      <div>
         <Page title="Medium Blog" />

         <main>
            <Banner />

            <PostFeed posts={posts} />
         </main>
      </div>
   );
}
export const getServerSideProps = async () => {
   const query = `*[_type == 'post']{
      _id,
      title,
      author -> {
        name,
        image
      },
      slug,
      mainImage,
      description,
      publishedAt
    } `;

   let posts = [];
   try {
      posts = await sanityClient.fetch(query);
   } catch (error) {
      console.log(error);
      posts = [];
   }

   return { props: { posts } };
};
