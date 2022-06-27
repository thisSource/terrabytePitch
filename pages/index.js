import TerraTitle from "../components/TerraTitle";
import FundSavers from "../components/FundSavers";
import GridData from "../components/GridData";
import Header from "../components/Header";
import OceanData from "../components/OceanData";
import GridDataB from "../components/GridDataB";
import GridDataFloater from "../components/GridDataFloater";
import LineModel from "../components/LineModel";
import StillLogo from "../components/StillLogo";
import TerraGrid from "../components/TerraGrid";

const Home = (props) => {
  // Will only render on client-side
  return (
    <div className="font-Nunito">
      <Header />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <TerraTitle />
        {/* <StillLogo /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
          <GridData />
          <div className="w-96 mt-5 mb-20">
            <p className="lg:text-base text-gray-500 text-sm font-semibold">
           rgb(162, 137, 240) purpule
           <br/>
         rgb(220, 220, 220) gray

            </p>
            <p className="text-sm text-gray-500">
              font: Nunito 
            </p>
            <p className="text-sm text-gray-500">   
              Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <GridDataB />
          <div className="w-96 mt-5 mb-20">
            <p className="lg:text-base text-gray-500 text-sm font-semibold">
              rgb: (120, 220, 194) green
            </p>
            <p className="text-sm  text-gray-500">
              Proin id sagittis augue. Curabitur eu nisi ac leo lacinia
              hendrerit. In ut rhoncus erat. Donec ultricies placerat tortor
              eget suscipit. Sed interdum augue sed justo lacinia, at pharetra
              sapien gravida. Maecenas vel lorem mollis, dignissim quam id,
              fringilla lacus. Maecenas placerat dictum euismod.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <LineModel /> */}

      <FundSavers />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      <TerraGrid />
      <GridDataFloater />
      </div>
      <OceanData />

    </div>
  );
};

export default Home;
