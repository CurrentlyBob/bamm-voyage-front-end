// npm modules
import { NavLink } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";

//css
import styles from "./NavBar.module.css";

const NavBar = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={styles.navContainer}>
      <Link to="/">
        <img
          className={styles.logo}
          src="../../../public/assets/images/logo-transparent-back.png"
          alt="logo"
        />
      </Link>
      {user ? (
        <>
          <ul className={styles.linkContainer}>
            <div className={styles.links}>
              <li className={styles.li}>
                <NavLink to="/itineraries">Itineraries</NavLink>
              </li>
              <li className={styles.li}>
                <NavLink to="/itineraries/new">Create Itinerary</NavLink>
              </li>
            </div>
          </ul>
          <div className={styles.profile}>
            <IconButton
              id="button"
              aria-controls={open ? "menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              color="neutral"
              onClick={handleClick}
            >
              <MenuIcon className={styles.menuIcon} />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              aria-labelledby="button"
              placement="bottom-end"
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/auth/change-password">Change Password</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="" onClick={handleLogout}>
                  Log Out
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
        </>
      ) : (
        <ul className={styles.linkContainer}>
          <li>
            <NavLink to="/auth/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
