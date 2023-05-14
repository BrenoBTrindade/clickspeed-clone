import Image from 'next/image';

export default function LocalizationImageMobile() {
  return (
    <div className="hidden max-md:block">
      <Image
        className="m-auto  h-[100%] w-full"
        src={'/BANNER-FINAL-MOBILE-1.jpg'}
        alt="apresentacao"
        width={1980}
        height={800}
      />
    </div>
  );
}
