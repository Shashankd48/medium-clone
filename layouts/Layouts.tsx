import { ReactNode } from "react";
import Header from "../components/Header";

type LayoutsProps = {
   children: ReactNode;
};

export const Layouts = (props: LayoutsProps) => {
   return (
      <div>
         <Header />
         <div className="max-w-6xl mx-auto">{props.children}</div>
      </div>
   );
};
