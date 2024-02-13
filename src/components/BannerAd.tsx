import { useQuery } from "@tanstack/react-query";
import { Url, Url_img, en } from "../hooks";
import { AdList } from "../types";

interface AdProps {
  id: number;
  url: string;
  location: string;
}

interface AdArr {
  ads: AdProps[];
}

const BannerAd = () => {
  const { isFetching, error, data } = useQuery<AdArr>({
    queryKey: ["bad"],
    queryFn: () => fetch(`${Url}/${en}/ads`).then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className="w-full flex justify-center my-9">
        <div className="loader flex justify-center items-center h-screen">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }



  const banner = data?.ads && data?.ads.find((ads) => ads.location === "banner");

  return (
    <div className="w-full h-full">
      {banner && (
        <img
          src={`${Url_img}/${banner.url}`}
          alt={banner.location}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 rounded-lg shadow-md"></div>
    </div>
  );
};

export default BannerAd;
