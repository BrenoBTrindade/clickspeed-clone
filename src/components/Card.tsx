type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className=" mb-10 ml-8 h-[594px] w-[328px] rounded-lg bg-fuchsia-800 px-10 py-14 shadow-md shadow-gray-500 ">
      {children}
    </div>
  );
}
