import Image from 'next/image';

const image = [
  { src: '/BOTAO-WATCH-1.jpg', link: '#' },
  { src: '/BOTAO-DEEZER-1.jpg', link: '#' },
  { src: '/BOTAO-CLICK-BENEFICIOS-1.jpg', link: '#' },
  { src: '/BOTAO-CLICK-LEVEDUCA-1.jpg', link: '#' },
  { src: '/BOTAO-CLICK-QUALIFICA-1.jpg', link: '#' },
];

export default function ContentImages() {
  return (
    <div className=" m-auto mt-5 flex h-80 w-[85%] items-center justify-center rounded-md bg-purple-950 p-5 shadow-md shadow-gray-700 max-md:mt-0 max-md:h-full max-md:w-[95%]">
      <div className="flex w-[80%] justify-evenly max-md:flex-col max-md:items-center">
        {image.map((image) => (
          <Image
            key={image.src}
            className="2xl:w-54 mb-2 mt-2 rounded-md shadow-md shadow-black max-2xl:ml-3 max-md:ml-0 max-md:w-52 lg:h-52 lg:w-40 xl:ml-4 xl:h-56 xl:w-44 2xl:ml-0 2xl:h-64"
            src={image.src}
            alt={image.link}
            width={204}
            height={261}
          />
        ))}
      </div>
    </div>
  );
}
