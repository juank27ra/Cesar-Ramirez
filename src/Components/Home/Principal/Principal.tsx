import "./principal.css";
import { Header } from "../../Header/Header";
import { Nav } from "../../Nav/Nav";
import { BannerHome } from "../Banner/BannerHome";
import { Dates } from "../Date/Dates";
import { Live } from "../Live/Live";
import { Footer } from "../../Footer/Footer";
import { Journalist } from "../Journalist/Journalist";

export const Principal = () => {
  return (
    <div className="container ">
      <Footer>
        <Header />
        <Nav />
        <Dates />
        <Journalist />
        <BannerHome />
        <Live />
        {/* <slider /> */}
      </Footer>
    </div>
  );
};
