type Props = {
  children: React.ReactNode;
};

export default function Footer({ children }: Props) {
  return (
    <div className="max:md:text-sm mt-14 flex w-[85%] justify-center text-purple-600 max-md:w-full max-md:flex-col max-md:text-center max-md:text-sm md:mx-auto xl:mx-auto 2xl:mx-52">
      {children}
    </div>
  );
}
