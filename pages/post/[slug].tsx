import { GetStaticProps } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Page from "../../components/Page";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import moment from "moment";

interface PostProps {
   post: Post;
}

const Post = ({ post }: PostProps) => {
   console.log(post);

   return (
      <Fragment>
         <Page title="Post | Medium Blog" />
         <main>
            <div className="h-80 w-full relative object-cover">
               <Image
                  src={urlFor(post.mainImage).url()!}
                  alt="banner-image"
                  objectFit="cover"
                  layout="fill"
               />
            </div>

            <article className="max-w-3xl mx-auto py-10 px-5">
               <h1 className="text-4xl font-serif mb-2">{post.title}</h1>
               <h2 className="text-xl font-light text-gray-500">
                  {post.description}
               </h2>

               <div className="flex items-center my-5">
                  <div className="h-12 w-12 relative">
                     <Image
                        src={urlFor(post.author.image).url()!}
                        layout="fill"
                        alt="author-pic"
                        className="rounded-full"
                     />
                  </div>

                  <div className="ml-4 font-medium">
                     <p className="text-lg">{post.author.name}</p>
                     <p className="text-gray-500 text-sm  font-normal">
                        {moment(post.publishedAt).format("lll")}
                     </p>
                  </div>
               </div>
            </article>
         </main>
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
      return {
         notFound: true,
      };
   }

   return {
      props: {
         post,
      },
      revalidate: 60,
   };
};

export default Post;
