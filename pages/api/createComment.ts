// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import config from "./config";

const client = sanityClient(config);

export default async function createComment(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const { _id, name, email, comment } = req.body;
      await client.create({
         _type: "comment",
         post: {
            _type: "reference",
            _ref: _id,
         },
         name,
         email,
         comment,
      });

      return res
         .status(200)
         .json({ isError: false, message: "Comment submitted" });
   } catch (error) {
      console.log(error);
      return res
         .status(500)
         .json({ isError: true, message: "Internal Server Error!", error });
   }
}
