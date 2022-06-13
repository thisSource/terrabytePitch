import TerraTitle from "../components/TerraTitle";
import FundSavers from "../components/FundSavers";
import GridData from "../components/GridData";
import Header from "../components/Header";
import GridDataB from "../components/GridData copy";
import OceanData from "../components/OceanData";


const Home = (props) => {
  // Will only render on client-side
  return (
    <div className="">
      <Header />
      <TerraTitle />
      <FundSavers />
      <GridData />
      <GridDataB />
      <OceanData />
    </div>
  );
};

export default Home;
