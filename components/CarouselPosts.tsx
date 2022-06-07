import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';

const CustomDot = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <button
      className={`h-2 w-2 rounded-full p-1 mx-1 mb-5 ${active ? "bg-slate-200" : "bg-slate-400"}`}
      onClick={() => onClick()}
    >
    </button>
  );
};

const CarouselPosts = ({ articles }: any) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel 
      className="h-max" 
      responsive={responsive}
      autoPlay
      autoPlaySpeed={4000}
      infinite
      keyBoardControl
      draggable
      showDots={true}
      slidesToSlide={1}
      customDot={<CustomDot />}

    >
      {
        articles?.map((article: any) => (
          <CarouselItem key={article.id} article={article} />
        ))
      }
    </Carousel>
  )
}

export default CarouselPosts