import { useQuery } from "@tanstack/react-query";
import { Url, Url_img, en } from "../hooks";
import { flexing } from "../utils";

type Item = {
  id: number;
  name: string;
  img_url: string;
  category_id: number;
  focus_row: number;
  focus_colm: number;
  focus_width: number;
};

type ItemSet = {
  items: Item[];
};

const Hero = () => {
  const { isPending, error, data } = useQuery<ItemSet[]>({
    queryKey: ["focusdata"],
    queryFn: () => fetch(`${Url}/${en}/focus`).then((res) => res.json()),
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
    <section className="flex flex-col justify-center items-center mt-20">
      <div style={{ width: "70%", margin: "auto" }} className="">
        {data && data.length > 0 ? (
          data.map((itemSet, setIndex) => {
            return (
              <div key={setIndex} className="flex  ">
                {itemSet?.items?.map((item) => (
                  <div
                    key={item?.id}
                    style={{
                      display: "inline-block",
                      margin: "8px",
                      width: `${item.focus_width}%`,
                      height: "300px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    className="cursor-pointer relative hover-div"
                  >
                    <img
                      className="image"
                      src={`${Url_img}/${item?.img_url}`}
                      alt={item?.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase transition text-lg w4  hover:text-black">
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div className={`${flexing}`}>
            <p className="w7">No data available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
