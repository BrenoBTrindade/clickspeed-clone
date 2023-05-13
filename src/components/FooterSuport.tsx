import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

export default function FooterSuport({ children }: Props) {
  return (
    <>
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
        {children}
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
    </>
  );
}
