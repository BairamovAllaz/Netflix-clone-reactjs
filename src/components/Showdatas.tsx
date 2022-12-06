import { FC, useEffect } from "react";
import React from 'react';
import { Ifilms, Itrends } from "../types/fetchdata";
import "../styles/Showdata.scss";

interface prop {
  title: string;
  data: Ifilms[];
}

const Showdatas: FC<prop> = ({ title, data }) => {

  return (
    <div>
      <div className='Show-data'>
        <div className='Show-data-header'>
          <p>{title}</p>
        </div>
        <div className='Show-data-slide-div'>
          <div className='Show-slide'>
            {data.map((s) => (
              <div className='Show-slide-scrolll-in'>
                <div className='image'>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${s.backdrop_path}`}
                    width='100%'
                    height='100%'
                  />
                </div>
                <p>{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showdatas;
