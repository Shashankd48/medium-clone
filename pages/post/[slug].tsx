import { GetStaticProps } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import Page from "../../components/Page";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import moment from "moment";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface PostProps {
   post: Post;
}

interface CommentFormInput {
   _id: string;
   name: string;
   email: string;
   comment: string;
}

const Post = ({ post }: PostProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<CommentFormInput>();
   const [submitted, setSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const onSubmit: SubmitHandler<CommentFormInput> = async (data) => {
      try {
         setIsSubmitting(true);
         const response = await axios.post("/api/createComment", { ...data });
         setSubmitted(true);
         console.log(response.data);
      } catch (error) {
         console.log(error);
         setSubmitted(false);
      }
      setIsSubmitting(false);
   };

   const FormSection = () => {
      return (
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 flex flex-col max-w-2xl mx-auto"
         >
            <h3 className="text-base text-green-600 font-medium font-serif ">
               Enjoyed this article?
            </h3>
            <h4 className="text-3xl font-medium">Leave a comment below!</h4>
            <hr className="my-2 pb-5" />

            <input
               {...register("_id")}
               type="hidden"
               name="_id"
               value={post._id}
            />

            <label htmlFor="name" className="block mb-5">
               <span className="text-gray-700">Name</span>
               <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Tony Stark"
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-600 outline-none focus:ring-1"
                  name="name"
               />
               {errors.name && (
                  <span className="text-sm text-red-600 ml-2">
                     Name required!
                  </span>
               )}
            </label>

            <label htmlFor="email" className="block mb-5">
               <span className="text-gray-700">Email</span>
               <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="tony98@gmail.com"
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-600 outline-none focus:ring-1"
                  name="email"
               />
               {errors.email && (
                  <span className="text-sm text-red-600 ml-2">
                     Email required!
                  </span>
               )}
            </label>

            <label htmlFor="comment" className="block mb-5">
               <span className="text-gray-700">Comment</span>
               <textarea
                  {...register("comment", {
                     required: true,
                     minLength: 10,
                  })}
                  placeholder="Write you comment..."
                  rows={8}
                  className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-green-600 outline-none focus:ring-1"
                  name="comment"
               />
               {errors.comment && (
                  <span className="text-sm text-red-600 ml-2">
                     {errors.comment.type === "required"
                        ? "Comment required!"
                        : "To short!"}
                  </span>
               )}
            </label>

            <button
               type="submit"
               className="border-2 border-green-600 py-2 hover:bg-green-600 hover:text-white rounded active:opacity-75 font-medium transition-all ease-in duration-150 focus:outline-none"
            >
               {isSubmitting ? "Submitting..." : "Submit"}
            </button>
         </form>
      );
   };

   const CommentSubmission = () => {
      return (
         <div className="flex flex-col p-10 bg-green-600 text-white  rounded">
            <h3 className="text-2xl font-semibold">
               Thank you for submitting your comment:
            </h3>
            <p>✅ Once it has been apporved, it will appear below!</p>
         </div>
      );
   };

   return (
      <Fragment>
         <Page title="Post | Medium Blog" />
         <main className="pb-5">
            <div className="h-[200px] sm:h-[450px] w-full relative">
               <Image
                  src={urlFor(post.mainImage).url()!}
                  alt="banner-image"
                  objectFit="cover"
                  layout="fill"
               />
            </div>

            <div className="max-w-3xl mx-auto">
               <article className="pt-10 px-5">
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
                  <div className="mt-5">
                     <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={{
                           h1: (props: any) => (
                              <h1 className="text-3xl my-5" {...props} />
                           ),
                           h2: (props: any) => (
                              <h2
                                 className="text-xl font-bold my-5"
                                 {...props}
                              />
                           ),
                           normal: (props: any) => (
                              <p className="text-lg my-5" {...props} />
                           ),
                           ul: ({ children }: any) => (
                              <div className="px-2 border rounded-lg">
                                 <ul className="list-disc text-lg px-8 py-3">
                                    {children}
                                 </ul>
                              </div>
                           ),
                           li: ({ children }: any) => (
                              <li className="mt-3 px-2">{children}</li>
                           ),
                           link: ({ href, children }: any) => (
                              <a
                                 href={href}
                                 className="text-blue-500 hover:underline"
                                 target="_blank"
                              >
                                 {children}
                              </a>
                           ),
                        }}
                     />
                  </div>
               </article>

               <hr className="my-5 border-top border-green-600" />

               {submitted ? CommentSubmission() : FormSection()}
            </div>
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
        publishedAt,
        body
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
