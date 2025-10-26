import { ReactNode } from "react";

interface RenderIfProps {
  condition: boolean;
  children: ReactNode;
}

export const RenderCondition = ({ condition, children }: RenderIfProps) => {
  return condition ? <>{children}</> : null;
};
