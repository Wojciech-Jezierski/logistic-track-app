import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Track_Map from "../../components/map/track_map";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <Navbar />
      <Track_Map />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
