import BeforeHeader from '@/components/BeforeHeader';
import CaroulselBanner from '@/components/CaroulselBanner';
import ContentImages from '@/components/ContentImages';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <BeforeHeader />
      <Header />
      <CaroulselBanner />
      <ContentImages />
    </div>
  );
}
