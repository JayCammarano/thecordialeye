import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../assets/style/carousel.css';
// Load list of images from a folder
interface CarouselProps {
  data: GatsbyTypes.HomepageQueryQuery;
}

const CarouselContainer: React.FC<CarouselProps> = ({
  data,
}: CarouselProps) => {
  const CarouselContent = data.airtable.data.Attachments.map((url) => {
    const urlArray = url.url.split('/');
    const fileName = urlArray[urlArray.length - 1];
    const pageName = fileName.split('.')[0];
    const displayName = pageName.toUpperCase();
    return (
      <div key={url.url}>
        <img alt={`Link to ${pageName} page`} src={url.url} />
        <p className="legend impactlabel">{displayName}</p>
      </div>
    );
  });
  // const onClickLink = () => {
  //   return '/login';
  // };

  return (
    <div className="text-center">
      <Carousel autoPlay={false}>{CarouselContent}</Carousel>
      <br />
    </div>
  );
};
export { CarouselContainer };
