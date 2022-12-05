import "../styles/Navbar.scss";
import React, { RefObject } from 'react';
import { RiNetflixFill } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
import { RefContext, types } from '../App';
const Navbar = () => {
  const [small, setSmall] = useState<boolean>(false);
  const refContext = React.useContext(RefContext);
  const [opentoggle, setopentoggle] = useState<boolean>(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200);
        setopentoggle(false);
      });
    }
  }, []);

  const scroolToHome = (e: any): void => {
    e.preventDefault();
    if (!refContext?.HomeComponentRef) {
      return;
    }
    refContext?.HomeComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToUpcoming = (e: any): void => {
    e.preventDefault();
    if (!refContext?.UpcomingComponentRef) {
      return;
    }
    refContext?.UpcomingComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTrend = (e : any) : void => { 
      e.preventDefault();
      if (!refContext?.TrendComponentRef) {
        return;
      }
      refContext?.TrendComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      {opentoggle ? (
        <div className='minsize'>
          <div className='toggles-min'>
            <ul>
              <li onClick={scroolToHome}>Home</li>
              <li onClick={scrollToUpcoming}>Top rated</li>
              <li onClick={scrollToTrend}>Trend</li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className={`Navbar ${small ? "small" : ""}`}>
        <div className='icon'>
          <RiNetflixFill style={{ fontSize: "30px", marginLeft: "20px",color : `${small ? "black" : "white"}` }} />
        </div>
        <div className='open-toggle' onClick={() => setopentoggle(!opentoggle)}>
          {opentoggle ? <ImCancelCircle /> : <GrMenu />}{" "}
        </div>
        <div className='toggles'>
          <ul>
            <li onClick={scroolToHome}>Home</li>
            <li onClick={scrollToUpcoming}>Top rated</li>
            <li onClick={scrollToTrend}>Trend</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
