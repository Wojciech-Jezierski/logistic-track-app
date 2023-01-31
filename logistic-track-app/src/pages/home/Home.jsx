import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Track_Map from "../../components/map/track_map";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <Track_Map />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
