import Cards from "../components/Cards";
import EcommerceCollection from "../components/EcommerceCollection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectedCard from "../components/SelectedCard";
import SoldOutCampaign from "../components/SoldOutCampaign";
import Ellipse from "../assets/Ellipse 4.png";
import EllipseY from "../assets/EllipseY.png";
import LandingPageOne from "../components/LandingPageOne";

const HomeOne = () => {
  return (
    <div className="bg-black relative">
      <img src={Ellipse} alt="" className="absolute top-0 right-0" />
      <img src={EllipseY} alt="" className="absolute top-0 left-0" />
      <Navbar />
      <LandingPageOne />
      <Cards />
      <SelectedCard />
      <SoldOutCampaign />
      <EcommerceCollection />
      <Footer />
    </div>
  );
};

export default HomeOne;
