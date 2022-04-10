import { FunctionComponent } from 'react';
import './styles.scss'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BannerProvider } from './components/Context'

import { ContentBannerProps, IBannerProps } from './types';
import Banner from './components/banner';
import SliderBanners from './components/SliderBanners';

const defaultSettings: Settings = {
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    slidesToShow: 1
};


const BannerCountdown: FunctionComponent<IBannerProps> = ({
    sliderSettings = defaultSettings,
    contents
}) => {
    return (
        <BannerProvider contents={contents}>
            <SliderBanners sliderSettings={sliderSettings}/>
        </BannerProvider>

    );
}

export default BannerCountdown;