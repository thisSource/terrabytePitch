import TerraTitle from "../components/TerraTitle";
import FundSavers from "../components/FundSavers";
import GridData from "../components/GridData";
import Header from "../components/Header";
import OceanData from "../components/OceanData";
import GridDataB from "../components/GridDataB";
import GridDataFloater from "../components/GridDataFloater";
import LineModel from "../components/LineModel";


const Home = (props) => {
  // Will only render on client-side
  return (
    <div className="">
      <Header />
      <TerraTitle />
      <FundSavers />
      <LineModel />
      <div className="ml-5 mt-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center	">
      <GridData />
      <div className="w-96 mt-5 mb-20">
      <p className="lg:text-lg text-base font-semibold text-gray-500">80 % of all Swedes have fund savings</p>
      <p className="text-base text-gray-500">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <GridDataB />
      <div className="w-96 mt-5 mb-20">
      <p className="lg:text-lg text-gray-500 text-base font-semibold">20 % want to do good with their savings</p>
      <p className="text-base text-gray-500">Proin id sagittis augue. Curabitur eu nisi ac leo lacinia hendrerit. In ut rhoncus erat. Donec ultricies placerat tortor eget suscipit. Sed interdum augue sed justo lacinia, at pharetra sapien gravida. Maecenas vel lorem mollis, dignissim quam id, fringilla lacus. Maecenas placerat dictum euismod. </p>
    </div>
      </div>
      <GridDataFloater />
      <OceanData />
    </div>
  );
};

export default Home;
