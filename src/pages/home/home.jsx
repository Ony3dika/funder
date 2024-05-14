import Benefits from "./benefits";
import Community from "./community";
import Elevate from "./elevate";
import Feature from "./feature";
import Footer from "./footer";
import Hero from "./hero";
import Pricing from "./pricing";
import Stories from "./stories";

const Home = () => {
  return (
    <div className='min-h-screen body bg-white'>
      <Hero />
      <Stories />
      <Benefits />
      <Feature />
      <Elevate />
      <Community />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
