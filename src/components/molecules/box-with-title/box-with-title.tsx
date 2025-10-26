import { RenderCondition } from "@/components/atoms";
import { FaRegEdit } from "react-icons/fa";

interface IBoxWithTitleProps {
  index: number;
  title: string;
  hasEdit: boolean;
  pressEdit: () => void;
  children: React.ReactNode;
}

export const BoxWithTitle = ({
  hasEdit,
  title,
  index,
  pressEdit,
  children,
}: IBoxWithTitleProps) => {
  return (
    <div className="border px-3 rounded-md">
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex gap-3">
          <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
            <p className="text-white">{index}</p>
          </div>
          <div>
            <p className="font-bold text-primary">{title}</p>
          </div>
        </div>
        <RenderCondition condition={hasEdit}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={pressEdit}>
            <FaRegEdit className="text-primary text-lg" />
            <p className="text-primary text-sm font-bold">Editar</p>
          </div>
        </RenderCondition>
      </div>
      {children}
    </div>
  );
};
