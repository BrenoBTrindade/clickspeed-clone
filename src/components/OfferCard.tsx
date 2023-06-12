type Props = {
  children: React.ReactNode;
};

export default function OfferCard({ children }: Props) {
  return (
    <div className="mb-10 ml-8 h-[594px] w-[328px] rounded-lg bg-rose-600 px-10 py-14 shadow-md shadow-gray-500 max-md:ml-0">
      <div className=" relative -top-16 ml-5 w-52 animate-bounce rounded-md bg-purple-950 p-2 text-center font-semibold text-white">
        MELHOR OFERTA
      </div>
      <div className="-mt-10">{children}</div>
    </div>
  );
}
