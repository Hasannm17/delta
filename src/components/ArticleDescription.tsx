import { useState } from "react";
import { flexing } from "../utils";

type ProductProps = {
  name: string | undefined;
  subname: string | undefined;
  benefits: string | undefined;
  sizes: string | undefined;
  instrunctions: string | undefined;
};

const ArticleDescription = ({
  name,
  subname,
  benefits,
  sizes,
  instrunctions,
}: ProductProps) => {
  const [activeView, setActiveView] = useState<string>("DESCRIPTION");

  function activatedView(e: string) {
    setActiveView(e);
  }

  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div>
          <h1 className="w7">{name}</h1>
          <h3>{subname} </h3>
        </div>

        <div className="w-full">
          <div className={``}>
            <div className={`${flexing} gap-x-9 w-full w7 `}>
              <button
                onClick={() => activatedView("DESCRIPTION")}
                className={`${
                  activeView === "DESCRIPTION"
                    ? "underline transition "
                    : " text-gray-600"
                }`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => activatedView("INSTRUCTION")}
                className={`${
                  activeView === "INSTRUCTION"
                    ? "underline transition"
                    : " text-gray-600"
                }`}
              >
                INSTRUCTION
              </button>
            </div>

            <hr className="mt-2" />

            <div className="mt-6 h-[250px]">
              {activeView == "DESCRIPTION" ? (
                <article className={` max-w-[400px] flex flex-col gap-y-4`}>
                  <span>
                    <h1 className="w7 text-sm">Benefits:</h1>
                    <p>{benefits}</p>
                  </span>

                  <span>
                    <h1 className="w7 text-sm">Size:</h1>
                    <p>{sizes}</p>
                  </span>
                </article>
              ) : (
                <article className="max-w-[400px] flex flex-col gap-y-4">
                  <p>{instrunctions}</p>
                </article>
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDescription;
