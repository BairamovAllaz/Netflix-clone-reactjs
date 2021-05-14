import { useEffect, useState } from "react";
import request from "../api/Api";
import axios from "../api/axios";
import Showdata from "./Showdatas";
import { Itrends } from "../types/fetchdata";
import { Ifilms } from "../types/fetchdata";
import Trends from "./Trends";
const Datas = () => {
  const [trendfilms, settrendfilms] = useState<Itrends[]>([]);
  const [upcomingfilms, setupcomingfilms] = useState<Ifilms[]>([]);
  const [latestfilms, setlatest] = useState<Ifilms[]>([]);
  const [topratedfilms, settopratefilms] = useState<Ifilms[]>([]);

  useEffect(() => {
    axios.get(request.fetchUpcoming).then((dat) => {
      setupcomingfilms(dat.data.results); //ren
    });

    axios.get(request.fetchtoprated).then((dat) => {
      settopratefilms(dat.data.results);
    });

    axios.get(request.fetchtrend).then((dat) => {
      settrendfilms(dat.data.results);
    });
  }, []);

  return (
    <div>
      <Showdata title='Upcoming films' data={upcomingfilms} />
      <Showdata title='Top rated films' data={topratedfilms} />
      <hr style={{ color: "white", border: "9px", marginBottom: "60px" }} />
      <Trends data={trendfilms} />
    </div>
  );
};

export default Datas;
