import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const links = [
  { name: 'QUEM SOMOS', link: 'https://clickspeednet.com.br/quem-somos/' },
  { name: 'NOSSOS PLANOS', link: 'https://clickspeednet.com.br/nossos-planos/' },
  { name: 'lOCALIZAÇÃO', link: 'https://clickspeednet.com.br/localizacao/' },
  { name: 'INDIQUE E GANHE', link: 'https://clickspeednet.com.br/indique-e-ganhe/' },
];

export default function Footer() {
  return (
    <div className="max:md:text-sm mt-14 flex w-[85%] justify-center text-purple-600 md:mx-auto xl:mx-auto 2xl:mx-52">
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
      <div className="-ml-3 w-[25%] flex-col">
        <h1 className="text-left font-bold ">SUPORTE</h1>
        <div className="mt-3 flex">
          <MapPinIcon className="w-7" />
          <p className="ml-2">Rua Br. Igarapé Mirim, 935 - Guamá.</p>
        </div>
        <div className="mt-3 flex">
          <PhoneIcon className="w-7" />
          <p className="ml-2">(91)3085-3190</p>
        </div>
        <div className="mt-3 flex">
          <EnvelopeIcon className="w-7" />
          <p className="ml-2">atendimento@clickspeed.net.br</p>
        </div>
        <h1 className="mt-3 text-left font-bold ">TRABALHE CONOSCO</h1>
        <div className="mt-3 flex">
          <EnvelopeIcon className="w-7" />
          <p className="ml-2">curriculo@clickspeed.net.br</p>
        </div>
      </div>
      <div className="ml-2 w-[25%] flex-col">
        <p className="text-left font-bold ">NOS SIGA NAS REDES SOCIAIS</p>
        <div className=" mt-5 flex w-40">
          <Link href={'https://www.instagram.com/clickspeednet_/'} target="_blank">
            <Image
              className="ml-2 w-9"
              src={'/icons8-insta.svg'}
              alt="icon-insta"
              width={50}
              height={50}
            />
          </Link>
          <Link href={'https://www.facebook.com/clickspeednet'} target="_blank">
            <Image
              className="ml-2 w-9"
              src={'/icons8-facebook.svg'}
              alt="icon-insta"
              width={50}
              height={50}
            />
          </Link>
          <Link href={'https://twitter.com/clickspeednet'} target="_blank">
            <Image
              className="ml-2 w-9"
              src={'/icons8-twitter.svg'}
              alt="icon-insta"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <p className="mt-5 text-left font-bold ">BAIXE NOSSO APP!</p>
        <div className="mt-5 flex">
          <Link href={'https://play.google.com/store/search?q=clickspeed&c=apps'} target="_blank">
            <Image
              className="ml-2 w-24"
              src={'/disponivel-google-play-badge-1-1536x455.png'}
              alt="icon-insta"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href={'https://apps.apple.com/br/app/click-benef%C3%ADcios/id1623438889'}
            target="_blank"
          >
            <Image
              className="ml-2 w-24"
              src={'/disponivel-na-app-store-botao-1024x303.png'}
              alt="icon-insta"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
