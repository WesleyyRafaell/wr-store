import { RenderCondition } from "@/components/atoms";

export interface IOrderStatusListProps {
  title: string;
  icon: React.ElementType;
  noUnderline: boolean;
}

export const OrderStatusList = ({ title, icon: Icon, noUnderline }: IOrderStatusListProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-center w-52 gap-3">
        <div className="w-20 h-20 rounded-full bg-primary flex justify-center items-center">
          <Icon className="text-2xl text-secondary" />
        </div>
        <p className="text-primary text-center font-bold">{title}</p>
      </div>
      <RenderCondition condition={noUnderline}>
        <div className="w-20 h-0.5 bg-amber-400 underline"></div>
      </RenderCondition>
    </div>
  );
};
