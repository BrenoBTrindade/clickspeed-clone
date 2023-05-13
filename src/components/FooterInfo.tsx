import Image from 'next/image';

const links = [
  { name: 'QUEM SOMOS', link: 'https://clickspeednet.com.br/quem-somos/' },
  { name: 'NOSSOS PLANOS', link: 'https://clickspeednet.com.br/nossos-planos/' },
  { name: 'lOCALIZAÇÃO', link: 'https://clickspeednet.com.br/localizacao/' },
  { name: 'INDIQUE E GANHE', link: 'https://clickspeednet.com.br/indique-e-ganhe/' },
];

export default function FooterInfo() {
  return (
    <>
      <div className="flex w-[25%] flex-col">
        <Image
          className="mb-5 h-16 w-60 rounded-md bg-purple-950 p-1 shadow-md shadow-gray-700"
          src={'/logo-white-click.png'}
          alt="clickspeed logo white"
          width={200}
          height={200}
        />
        <p className="w-60 font-semibold">
          Provedor de Internet. O melhor da internet na sua casa.
        </p>
      </div>
      <div className="w-[25%] flex-col font-semibold">
        <p className="ml-3 text-left font-bold">OUTROS LINKS</p>
        <ul className="flex flex-col items-start">
          {links.map((link) => (
            <li className="p-3 opacity-60 hover:opacity-100" key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
