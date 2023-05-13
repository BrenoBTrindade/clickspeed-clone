type Props = {
  speed: string;
  price: string;
};

export default function CardTitle({ speed, price }: Props) {
  return (
    <div>
      <h1 className="pt-5 text-center text-6xl font-bold text-white">{speed}</h1>
      <h2 className="pt-5 text-center text-4xl  text-white">R${price}</h2>
    </div>
  );
}
