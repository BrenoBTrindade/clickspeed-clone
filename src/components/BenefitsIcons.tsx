import Image from 'next/image';

interface Props {
  icons: MyData[];
}

interface MyData {
  src: string;
}

export default function BenefitsIcons({ icons }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <ul className="flex h-28 flex-wrap justify-center">
          {icons.map((icon: MyData) => (
            <li className="ml-2" key={icon.src}>
              <Image src={icon.src} alt="test" height={50} width={50} />
            </li>
          ))}
        </ul>
      </div>
      <div className=" ml-8 justify-center text-white">
        <p>*valor com pontualidade</p>
      </div>
    </div>
  );
}
