import "../styles/Navbar.scss";
import { RiNetflixFill } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [small, setSmall] = useState<boolean>(false);
  const [opentoggle, setopentoggle] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200);
        setopentoggle(false);
      });
    }
  }, []);

  return (
    <div>
      {opentoggle ? (
        <div className='minsize'>
          <div className='toggles-min'>
            <ul>
              <li>Home</li>
              <li>Trends</li>
              <li>Top</li>
              <li>Upcoming</li>
              <li>Latest</li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className={`Navbar ${small ? "small" : ""}`}>
        <div className='icon'>
          <RiNetflixFill style={{ fontSize: "30px", marginLeft: "20px" }} />
        </div>
        <div className='open-toggle' onClick={() => setopentoggle(!opentoggle)}>
          {opentoggle ? <ImCancelCircle /> : <GrMenu />}{" "}
        </div>
        <div className='toggles'>
          <ul>
            <li>Home</li>
            <li>Trends</li>
            <li>Top</li>
            <li>Upcoming</li>
            <li>Latest</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
