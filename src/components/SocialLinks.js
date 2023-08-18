import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Link to="https://github.com/DiolazoEunesse" className="text-dark">
        <FaGithub />
      </Link>
      <Link to="https://www.facebook.com/yoxeix" className="text-dark">
        <FaFacebook />
      </Link>
      <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F000xi.0%3Futm_source%3Dqr%26igshid%3DMzNlNGNkZWQ4Mg%253D%253D%26fbclid%3DIwAR3PZayqUWf2R0tPaVPpdX8aaNH7wroBkN3O00hFwNMMf2fW0urfycIlEI0&h=AT3zXKD34S14o3fDQ0YVcrjUmcciMmi51lgGoxmxNDO7JxnPSjwt81Z1Nfzyfat5xL0ifGZaxlVmFLjJwPEDRg4HX_MplRnm0GGPCBZPW7yqzjIJe68B9BROmceNowS02F973g" className="text-dark">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;