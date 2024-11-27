import "./principal.css";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { BannerHome } from "../Banner/BannerHome";
import { Dates } from "../Date/Dates";
import { Live } from "../Live/Live";
import { Footer } from "../Footer/Footer";

export const Principal = () => {
  return (
    <div className="container ">
      <Footer>
        <Header />
        <Nav />
        <Dates />
        <BannerHome />
        <Live />
        {/* <slider /> */}
      </Footer>
    </div>
  );
};
