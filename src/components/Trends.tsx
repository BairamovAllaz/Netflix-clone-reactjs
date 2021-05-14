import { FC, useEffect } from "react";
import "../styles/Trend.scss";
import { Itrends } from "../types/fetchdata";

interface prop {
  data: Itrends[];
}

const Trends: FC<prop> = ({ data }) => {
  useEffect(() => {
    console.log(data[5]);
  });
  return (
    <div>
      <div className='Trends'>
        <h1>Trends</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <div className='first-trend'>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data[4].backdrop_path}`}
                  className='img-fluid'
                />
                <div className='indiv'>
                  <ul>
                    <li>
                      Title : <span>{data[4].original_title}</span>
                    </li>
                    <li>
                      Overwiev : <span>{data[4].overview}</span>
                    </li>
                    <li>
                      Relase date : <span>{data[4].release_date}</span>
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
                    <div className='information'></div>
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
