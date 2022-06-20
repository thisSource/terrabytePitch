import Model from "../components/Model";
import LineModel from "../components/LineModel";



const Home = (props) => {
  // Will only render on client-side
  return (
    <div className="">
        <Model />
        <LineModel />
    </div>
  );
};

export default Home;
