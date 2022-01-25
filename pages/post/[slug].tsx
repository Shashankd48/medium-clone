import { GetStaticProps } from "next";
import { Fragment } from "react";
import Page from "../../components/Page";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";

interface PostProps {
   post: Post;
}

const Post = ({ post }: PostProps) => {
   console.log(post);

   return (
      <Fragment>
         <Page title="Post | Medium Blog" />
         <main></main>
      </Fragment>
   );
};

export const getStaticPaths = async () => {
   const query = `*[_type == 'post']{
        _id,
        slug {
        current
        }
    }`;

   let posts = [];

   try {
      posts = await sanityClient.fetch(query);

      const paths = posts.map((post: Post) => ({
         params: {
            slug: post.slug.current,
         },
      }));
      return { paths, fallback: "blocking" };
   } catch (error) {
      console.log(error);
      return { fallback: "blocking" };
   }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const query = `*[_type == 'post' && slug.current == $slug][0]{
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
    }`;

   const post = await sanityClient.fetch(query, {
      slug: params?.slug,
   });

   console.log(post);

   if (!post || Object.keys(post).length === 0) {
      console.log("log: ", post);
      return {
         notFound: true,
      };
   }

   console.log("notFound");

   return {
      props: {
         post,
      },
   };
};

export default Post;
