import Image from 'next/image';

export default function LocalizationImageMobile() {
  return (
    <div className="hidden max-lg:block">
      <Image
        className="m-auto  h-[100%] w-[95%] rounded-md shadow-md shadow-gray-700"
        src={'/BANNER-FINAL-MOBILE-1.jpg'}
        alt="apresentacao"
        width={1980}
        height={800}
      />
    </div>
  );
}
