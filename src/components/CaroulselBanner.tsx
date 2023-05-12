'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';

const imageBanner = [
  { src: '/BANNER-SITE.jpg', link: '#' },
  { src: '/BANNER-TOPO-01-1.jpg', link: '#' },
  { src: '/BANNER-TOPO-03-1.jpg', link: '#' },
];

export default function CaroulselBanner() {
  return (
    <div
      className="m-auto h-[430px] w-[85%] select-none rounded-md bg-purple-950 p-5 shadow-md shadow-gray-700
    "
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoHeight
        className="rounded-md"
      >
        {imageBanner.map((banner, i) => (
          <SwiperSlide key={i}>
            {' '}
            <Image
              className="m-auto w-3/4 rounded-md"
              src={banner.src}
              alt={banner.link}
              width={1980}
              height={50}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
