import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/NetflixLogo.svg";
import "./header.css";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);

      // cleanup listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <div
        className={
          scrolled ? "header-outer-wrapper scrolled" : "header-outer-wrapper"
        }
      >
        <div className="header-wrapper">
          <div className="header-left-side">
            <ul>
              <li>
                <img src={NetflixLogo} alt="" />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by language</li>
            </ul>
          </div>
          <div className="header-right-side">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
