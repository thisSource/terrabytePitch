import TerraTitle from "../components/TerraTitle";
import FundSavers from "../components/FundSavers";
import GridData from "../components/GridData";
import Header from "../components/Header";
import GridDataC from "../components/GridData copy";
import OceanData from "../components/OceanData";
import GridDataB from "../components/GridDataB";
import BouncingBalls from "../components/BouncingBalls";


const Home = (props) => {
  // Will only render on client-side
  return (
    <div className="">
      <Header />
      <TerraTitle />
      <FundSavers />
      <div className="my-80 grid grid-cols-3">
      <GridData />
      <GridDataB />
      </div>
      <GridDataC />
      <OceanData />
    </div>
  );
};

export default Home;
