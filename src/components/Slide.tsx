import "../styles/Slide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import SwiperCore, { Autoplay, History, Pagination, Lazy } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { RiNetflixFill } from "react-icons/ri";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import request from "../api/Api";
import { Ifilms } from "../types/fetchdata";
import { RefContext } from '../App';

SwiperCore.use([Autoplay, History, Pagination, Lazy]);

const Slide = () => {
  const [upcomingdata, setupcomingdata] = useState<Ifilms[]>([]);
  const context = React.useContext(RefContext);

  
  useEffect(() => {
    axios.get(request.fetchUpcoming).then((dat) => {
      setupcomingdata(dat.data.results);
    });
  }, []);


  React.useEffect(() => { 
    console.log(context?.HomeComponentRef);
  }, [context?.HomeComponentRef])

  const getContrastYIQ = (hexcolor: any) => {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  return (
    <div className='Slide_all' ref={context?.HomeComponentRef}>
      <div className='Slide-start'>
        <Swiper
          pagination={true}
          scrollbar
          autoplay={true}
          lazy={true}
          history={true}>
          {upcomingdata.slice(12, 17).map((r) => (
            <SwiperSlide>
              <div className='Slide_inbox'>
                <div
                  className='Image'
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${r.backdrop_path} )`,
                  }}>
                  <div className='Image-innter-text-div'>
                    <p className='icon-header'>
                      <RiNetflixFill />
                      <span>SERIES</span>
                    </p>
                    <p className='title'>{r.title}</p>
                    <p className='upcoming'>
                      <span>Release date</span>-{r.release_date}
                    </p>
                    <p
                      className='about-text'
                      style={{ color: `${getContrastYIQ(r.overview)}` }}>
                      {r.overview}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
