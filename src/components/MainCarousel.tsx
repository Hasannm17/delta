import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { data } from "../constants";
import Button from "./Button";
const MainCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlay
        autoFocus
        infiniteLoop
        className=""
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        stopOnHover
        showThumbs={false}
        interval={3000}
      >
        {data.map((item, index) => {
          return (
            <div key={index} className="relative">
              <img src={item?.Link} className="h-[500px] " />
              <Button classes="absolute bottom-10 transfom left-[50%]   ">
                Discover More
              </Button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
