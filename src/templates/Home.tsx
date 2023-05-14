import AfterFooter from '@/components/AfterFooter';
import BeforeHeader from '@/components/BeforeHeader';
import BenefitsIcons from '@/components/BenefitsIcons';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import CardTitle from '@/components/CardTitle';
import CaroulselBanner from '@/components/CaroulselBanner';
import CaroulselBannerMobile from '@/components/CaroulselBannerMobile';
import ContentImages from '@/components/ContentImages';
import Footer from '@/components/Footer';
import FooterInfo from '@/components/FooterInfo';
import FooteriNetworks from '@/components/FooterNetworks';
import FooterSuport from '@/components/FooterSuport';
import Header from '@/components/Header';
import LocalizationImage from '@/components/LocalizationImage';
import LocalizationImageMobile from '@/components/LocalizationImageMobile';
import NavMenu from '@/components/NavMenu';
import OfferCard from '@/components/OfferCard';
import TitleSecton from '@/components/TitleSection';
import ButtonOffer from '@/components/buttonOffer';

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
    <main className="w-full overflow-x-hidden">
      <BeforeHeader />
      <Header />
      <NavMenu />
      <CaroulselBanner />
      <CaroulselBannerMobile />
      <ContentImages />
      <div className="w-3/5 max-md:w-full">
        <TitleSecton />
        <div className=" flex w-1/4 justify-center max-md:flex-col max-md:items-center">
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
      <LocalizationImage />
      <LocalizationImageMobile />
      <Footer>
        <FooterInfo />
        <FooterSuport>
          <FooteriNetworks />
        </FooterSuport>
      </Footer>
      <AfterFooter />
    </main>
  );
}
