import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.scss';

const ImageSlider = ({ photos }) => {
  return (
    <Slider speed={200} className="imageSliderContainer">
      {photos.map((e) => {
        return <img alt="" src={e} />;
      })}
    </Slider>
  );
};

export default ImageSlider;
