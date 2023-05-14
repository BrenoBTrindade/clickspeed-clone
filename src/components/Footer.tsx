type Props = {
  children: React.ReactNode;
};

export default function Footer({ children }: Props) {
  return (
    <div className="max:md:text-sm max-md:text-md mt-14 flex w-[85%] justify-center text-purple-600 max-md:mx-auto max-md:mt-5 max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center  max-md:text-sm xl:mx-auto 2xl:mx-52">
      {children}
    </div>
  );
}
