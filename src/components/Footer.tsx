import { flexing } from "../utils";
import { AiFillInstagram } from "react-icons/ai"; 
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className={`${flexing} mt-10 bg-[#2A2A2A] px-6  text-white Rubik w4 justify-between p-7`}
    >
      <div>Logo</div>
      <div className={`${flexing}`}>
        <h2>CustomerService</h2>
        <span> &nbsp; . &nbsp; </span>
        <h2>PrivacyPolicy</h2>
      </div>
      <div className="text-center flex flex-col gap-y-3">
        <h3>-Follow us-</h3>
        <ul className={`${flexing} gap-x-4`}>
          <li><AiFillInstagram  className="text-white h-6 w-6 "/> </li>
          <li><FaFacebookF className="text-white h-6 w-6" /></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
