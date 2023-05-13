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
    <div className=" m-auto mt-5 flex h-72 w-[85%] items-center justify-center rounded-md bg-purple-950 p-5 shadow-md shadow-gray-500">
      <div className="flex w-[80%] justify-evenly">
        {image.map((image) => (
          <Image
            key={image.src}
            className="mt-2 rounded-md shadow-md shadow-black"
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
