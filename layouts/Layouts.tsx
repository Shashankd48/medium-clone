import { ReactNode } from "react";
import Header from "../components/Header";

type LayoutsProps = {
   children: ReactNode;
};

export const Layouts = (props: LayoutsProps) => {
   return (
      <div>
         <Header />
         {props.children}
      </div>
   );
};
