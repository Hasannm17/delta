import { flexing } from "../utils";
import Search from "./Search";
import Category from "./SubCategory";

const Header = () => {
  return (
    <>
      <section className={`${flexing} justify-between px-8 py-7 Rubik w5 `}>
        <div>LOGO GOES HERE</div>

        <h3 className="text-gray-400 italic">Welcome to this website</h3>

        <div className={`${flexing} gap-x-10`}>
          <ul className={`${flexing} text-[13px] gap-x-4`}>
            <li>
              <a href="">ContactUs</a>
            </li>
            <li>
              <a href="">AboutUS</a>
            </li>
          </ul>

          <div className="p-1 flex flex-col  gap-y-2" >
            <div className={`flex justify-end mr-2`}>
              <h1>Eng</h1>
            </div>

            <Search />
          </div>
        </div>
      </section>
      <Category />
    </>
  );
};

export default Header;
