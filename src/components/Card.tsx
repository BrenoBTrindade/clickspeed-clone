import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  flat?: boolean;
  trimmed?: boolean;
};


export default function Card({ children, className, style }: Props) {
  return (
    <div className={clsx(className, " mb-10 ml-8 h-[594px] w-[328px] rounded-lg bg-fuchsia-800 px-10 py-14 shadow-md shadow-gray-500 max-md:ml-0 ")}>
      {children}
    </div>
  );
}
