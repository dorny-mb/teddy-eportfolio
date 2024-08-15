import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box } from "@chakra-ui/react";

// import Swiper core and required modules
import SwiperCore, { Thumbs, EffectFade, Pagination, Autoplay } from "swiper";
import { Quote } from "..";

SwiperCore.use([Pagination, Thumbs, EffectFade, Autoplay]);

type SwiperWrapProps = {
  slides: {
    link: string;
    message: string;
    name: string;
    jobTitle: string;
    imageSrc: any;
  }[];
};

const SwiperWrap: React.FC<SwiperWrapProps> = ({ slides }) => {
  const [thumbsSwiper] = React.useState<SwiperCore | null | undefined>(null);

  return (
    <Box w="100%" mx="auto">
      <Swiper
        slidesPerView={1}
        autoHeight
        spaceBetween={10}
        effect="fade"
        autoplay={{
          delay: 30000,
          waitForTransition: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        fadeEffect={{ crossFade: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="cardSwiper"
      >
        {slides?.map(({ message, name, jobTitle, imageSrc, link }, index) => (
          <SwiperSlide key={index + link}>
            <Quote
              message={message}
              name={name}
              jobTitle={jobTitle}
              imageSrc={imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperWrap;
