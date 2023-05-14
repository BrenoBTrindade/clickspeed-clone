import Image from 'next/image';

export default function LocalizationImage() {
  return (
    <div className="max-md:hidden">
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
