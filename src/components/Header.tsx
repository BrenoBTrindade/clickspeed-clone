import Image from 'next/image';
import Link from 'next/link';

const links = [
  { name: 'QUEM SOMOS', link: 'https://clickspeednet.com.br/quem-somos/' },
  { name: 'NOSSOS PLANOS', link: 'https://clickspeednet.com.br/nossos-planos/' },
  { name: 'lOCALIZAÇÃO', link: 'https://clickspeednet.com.br/localizacao/' },
  { name: 'INDIQUE E GANHE', link: 'https://clickspeednet.com.br/indique-e-ganhe/' },
];

export default function Header() {
  return (
    <nav className=" flex items-center justify-center  max-lg:hidden max-md:w-full">
      <div className=" text-md flex w-full justify-around font-semibold text-purple-950 max-2xl:mb-1 max-2xl:w-[85%] max-2xl:text-sm max-md:w-full">
        <Image
          className="m-0 mt-2 h-10 w-40 max-2xl:-ml-10 max-md:h-12 max-md:w-52"
          src={'/clickspeed.png'}
          alt="Logo da Click"
          width={166}
          height={38}
        />
        <div className="flex">
          <ul className="flex  justify-between">
            {links.map((link) => (
              <li className=" p-5 opacity-60 hover:opacity-100 " key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={'https://sgp.clickspeed.net.br/accounts/central/login'}
          className=" mt-2 h-12 w-44 rounded-md bg-purple-900 p-4 text-center text-sm font-bold text-white shadow-md shadow-gray-700 duration-500 hover:cursor-pointer hover:bg-red-500 max-2xl:-mr-12 max-lg:hidden"
        >
          ÁREA DO CLIENTE
        </Link>
      </div>
    </nav>
  );
}
