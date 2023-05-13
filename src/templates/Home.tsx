import BeforeHeader from '@/components/BeforeHeader';
import BenefitsIcons from '@/components/BenefitsIcons';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import CardTitle from '@/components/CardTitle';
import CaroulselBanner from '@/components/CaroulselBanner';
import ContentImages from '@/components/ContentImages';
import Header from '@/components/Header';
import OfferCard from '@/components/OfferCard';
import TitleSecton from '@/components/TitleSection';
import ButtonOffer from '@/components/buttonOffer';
import Image from 'next/image';

const Icons1 = [{ src: '/4.png' }, { src: '/3.png' }];
const Icons2 = [{ src: '/4.png' }, { src: '/3.png' }, { src: '/5.png' }, { src: '/2.png' }];

const Icons3 = [
  { src: '/4.png' },
  { src: '/3.png' },
  { src: '/5.png' },
  { src: '/2.png' },
  { src: '/1.png' },
];

export default function Home() {
  return (
    <div className="w-full">
      <BeforeHeader />
      <Header />
      <CaroulselBanner />
      <ContentImages />
      <div className="w-3/5">
        <TitleSecton />
        <div className=" flex w-1/4 justify-center">
          <Card>
            <CardTitle speed="350 MB" price="99,90/Mês" />
            <CardContent />
            <BenefitsIcons icons={Icons1} />
            <Button />
          </Card>
          <OfferCard>
            <CardTitle speed="450 MB" price="119,90/Mês" />
            <CardContent />
            <BenefitsIcons icons={Icons2} />
            <ButtonOffer />
          </OfferCard>
          <Card>
            <CardTitle speed="650 MB" price="139,90/Mês" />
            <CardContent />
            <BenefitsIcons icons={Icons3} />
            <Button />
          </Card>
        </div>
      </div>
      <Image
        className="m-auto mt-16 h-[100%] w-[85%] rounded-md shadow-md shadow-gray-700"
        src={'/BANNER-FINAL.jpg'}
        alt="apresentacao"
        width={1980}
        height={800}
      />
    </div>
  );
}
