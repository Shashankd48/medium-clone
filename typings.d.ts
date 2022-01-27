export interface PostInterface {
   _id: string;
   title: string;
   publishedAt: string;
   author: {
      name: string;
      image: {
         asset: {
            url: string;
         };
      };
   };
   description: string;
   mainImage: {
      asset: {
         url: string;
      };
   };
   slug: {
      current: string;
   };
   body: [object];
   comments: [CommentInterface];
}

export interface CommentInterface {
   approved: boolean;
   comment: string;
   email: string;
   name: string;
   post: {
      _ref: string;
      _type: string;
   };
   _createdAt: string;
   _id: string;
   _rev: string;
   _updatedAt: string;
}
