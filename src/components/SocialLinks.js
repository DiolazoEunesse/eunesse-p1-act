import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Link to="https://github.com/" className="text-dark">
        <FaGithub />
      </Link>
      <Link to="https://www.facebook.com/" className="text-dark">
        <FaFacebook />
      </Link>
      <Link to="https://instagram.com/" className="text-dark">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;