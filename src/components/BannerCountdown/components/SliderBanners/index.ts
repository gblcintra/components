import { FunctionComponent } from 'react';
import './styles.scss'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useBanner } from '../Context'

import Banner from '../banner';

const SliderBanners = (sliderSettings:any) => {

  const { bannersCountdownFormated } = useBanner()
  if (!bannersCountdownFormated.length || !bannersCountdownFormated) return null

  return (
    <Slider {...sliderSettings} className="mainSlider">
          {contents.map((banner, index) => (
            <Banner {...banner} key={index} />
        ))}
    </Slider>
  )
}

export default SliderBanners
