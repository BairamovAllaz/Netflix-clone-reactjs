import "./App.scss";
import React from 'react'
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import Datas from "./components/Datas";
import Footer from './components/Footer';

//TODO #1 SEPERATE FUNCTION TO COMPONENTS #2 CREATE PAGE TO SHOW INFO 


export interface types {
  HomeComponentRef: React.RefObject<any> | null,
  UpcomingComponentRef: React.RefObject<any> | null,
  TrendComponentRef : React.RefObject<any | null>
}

export const RefContext = React.createContext<types | null>(null);

function App() {
  const HomeComponentRef = React.useRef<any>(null);
  const UpcomingComponentRef = React.useRef<any>(null);
  const TrendComponentRef = React.useRef<any>(null);

  return (
    <div className='App'>
      <RefContext.Provider value={{ HomeComponentRef, UpcomingComponentRef, TrendComponentRef }}>
        <Navbar />
        <div style={{width : "100%", height: "40px" }}></div>
        <Slide />
        <Datas />
        <Footer/>
      </RefContext.Provider>
    </div>
  );
}

export default App;
