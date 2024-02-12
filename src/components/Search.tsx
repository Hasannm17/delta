import { CiSearch } from "react-icons/ci";
const Search = () => {

  





  return (
    <>
      <div>
        <div className="flex justify-center items-center py-2">
          <input
            type="text"
            placeholder="Search products"
            className="outline-none px-2"
          />
          <button>
            <CiSearch className="text-[1.3rem] " />{" "}
          </button>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Search;
