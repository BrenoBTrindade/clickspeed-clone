import Image from 'next/image';

const links = [
  { name: 'QUEM SOMOS', link: '#' },
  { name: 'NOSSOS PLANOS', link: '#' },
  { name: 'lOCALIZAÇÃO', link: '#' },
  { name: 'INDIQUE E GANHE', link: '#' },
];

export default function Header() {
  return (
    <nav className=" flex items-center justify-center">
      <div className=" text-md flex w-full justify-around font-semibold text-purple-950">
        <Image
          className="mt-2 h-10 w-40"
          src={'/clickspeed.png'}
          alt="Logo da Click"
          width={166}
          height={38}
        />
        <div className="flex">
          <ul className="flex  justify-between">
            {links.map((link) => (
              <li className="p-5 opacity-60 hover:opacity-100" key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className=" mt-2 h-12 w-44 rounded-md bg-purple-900 p-3 text-sm font-bold text-white shadow-md shadow-gray-700 duration-500 hover:cursor-pointer hover:bg-red-500">
          ÁREA DO CLIENTE
        </button>
      </div>
    </nav>
  );
}
