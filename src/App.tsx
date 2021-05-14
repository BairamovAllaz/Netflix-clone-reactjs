import "./App.scss";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import Datas from "./components/Datas";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Slide />
      <hr style={{ color: "white", border: "5px", marginTop: "60px" }} />
      <Datas />
      <div style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
}

export default App;
