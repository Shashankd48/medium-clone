import Head from "next/head";

type PageProps = { title: string };

const Page = (props: PageProps) => {
   const { title } = props;
   return (
      <div>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </div>
   );
};

export default Page;
