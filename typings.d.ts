export interface Post {
   _id: string;
   title: string;
   _createdAt: string;
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
}
