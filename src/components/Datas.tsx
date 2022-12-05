import { useEffect, useState } from "react";
import request from "../api/Api";
import axios from "../api/axios";
import Showdata from "./Showdatas";
import { Itrends } from "../types/fetchdata";
import { Ifilms } from "../types/fetchdata";
import Trends from "./Trends";
import { isNonNullExpression } from "typescript";
const Datas = () => {
  const [trendfilms, settrendfilms] = useState<Itrends[] | null>(null);
  const [upcomingfilms, setupcomingfilms] = useState<Ifilms[] | null>(null);
  const [latestfilms, setlatest] = useState<Ifilms[] | null>(null);
  const [topratedfilms, settopratefilms] = useState<Ifilms[] | null>(null);

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

  if(!upcomingfilms || !topratedfilms || !trendfilms)
  { 
    return <h1>Loding...</h1>
  }
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
