import "./App.css";
import Header from "./Component/Header";
import Crytomade from "./Screen/Home/Crytomade";
import WhyChoose from "./Screen/Home/WhyChoose";
import Bitgame from "./Screen/Home/Bitgame";
import Benifts from "./Screen/Home/Benifts";
import BgReal from "./Screen/Home/BgReal";
import RoadMap from "./Screen/Home/RoadMap";
import Team from "./Screen/Home/Team";
import Available from "./Screen/Home/Available";
import OurPartner from "./Screen/Home/OurPartner";

function App() {
  return (
    <div className="App">
      <Header />
      <Crytomade />
      <WhyChoose />
      <Bitgame />
      <Benifts />
      <BgReal />
      <RoadMap />
      <Team />
      <Available />
      <OurPartner />
    </div>
  );
}

export default App;
