import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "./Button";
import { Url, Url_img, en } from "../hooks";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type CarouselProps = {
  id: number;
  text: string;
  img_url: string;
  linkk: string;
};

const MainCarousel = () => {
  const { isPending, error, data } = useQuery<CarouselProps[]>({
    queryKey: ["carousel"],
    queryFn: () => fetch(`${Url}/${en}/headers`).then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="w-full flex justify-center my-9">
        <div className="loader flex justify-center items-center h-screen">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    );
  if (error) return "An error has occurred: " + error.message;

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
              <img src={`${Url_img}/${item?.img_url}`} className="h-[500px] " />
              <Button classes="absolute bottom-10 transfom left-[50%]   ">
                <Link to={"/1/4"}> 
                Discover More
                </Link>
              </Button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
