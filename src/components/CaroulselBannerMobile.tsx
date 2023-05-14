'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';

const imageBanner = [
  { src: '/BANNER-TOPO-LP-MOBILE.jpg', link: '#' },
  { src: '/BANNER-TOPO-01-MOBILE-1-1.jpg', link: '#' },
  { src: '/BANNER-TOPO-02-MOBILE-1.jpg', link: '#' },
  { src: '/BANNER-TOPO-03-MOBILE-1.jpg', link: '#' },
];

export default function CaroulselBannerMobile() {
  return (
    <div className="m-auto mb-5 mt-2.5 hidden h-[540px] w-[95%] select-none rounded-md bg-purple-950 shadow-md shadow-gray-700 max-md:block">
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
      >
        {imageBanner.map((banner, i) => (
          <SwiperSlide key={i}>
            {' '}
            <Image
              className="m-auto mt-5 w-[85%] rounded-md shadow-md shadow-black"
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
