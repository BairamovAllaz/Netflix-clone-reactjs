import { FC, useEffect } from "react";
import React from 'react';
import "../styles/Trend.scss";
import { Itrends } from "../types/fetchdata";
import { RefContext } from "../App";

interface prop {
  data: Itrends[];
}

const Trends: FC<prop> = ({ data }) => {
  const refContext = React.useContext(RefContext);

  return (
    <div ref={refContext?.TrendComponentRef}>
      <div className='Trends' >
        <h1>Trends</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <div className='first-trend'>
                <div className = "Img-div"> 
                <img
                  src={`https://image.tmdb.org/t/p/original/${data[4].backdrop_path}`}
                  className='img-fluid'
                />
                </div>
                <div className='indiv'>
                  <ul>
                    <li>
                      Title : <span>{data[4].original_title}</span>
                    </li>
                    <li>
                      Overview : <span>{data[4].overview}</span>
                    </li>
                    <li>
                      Release date : <span>{data[4].release_date}</span>
                    </li>
                    <li>
                      Views : <span>{data[4].popularity}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-8  col-sm-12'>
              <div className='All-trends '>
                {data.map((dat) => (
                  <div className='in-alltrends'>
                    <div className='img'>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${dat.backdrop_path}`}
                        className='img-fluid'
                      />
                    </div>
                    <div className='information'>
                      <p>Title: {dat.title}</p>
                      <p>Release date: {dat.release_date}</p>
                      <p>Popularity: {dat.popularity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
