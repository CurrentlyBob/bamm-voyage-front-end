// npm modules
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ClickAwayListener, IconButton, MenuList, Popper, Paper, MenuItem } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import logo from '../../assets/images/logo.png'
import { useRef, useEffect } from 'react'

//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  console.log(open)

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
    console.log('open inside', open)
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }
  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <>
      {user ? (
        <nav className={styles.navContainer}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
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
              ref={anchorRef}
              id="button"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="outlined"
              color="neutral"
              onClick={handleClick}
            >
              <PersonIcon className={styles.personIcon} />
            </IconButton>
            <Popper id="menu" anchorEl={anchorRef.current} open={open} aria-labelledby="button" placement="bottom-end">
              <ClickAwayListener onClickAway={handleClose}>
                <Paper>
                  <MenuList>
                    <NavLink to="/auth/change-password" className={styles.loggedIn}>
                      <MenuItem onClick={handleClose}>Change Password</MenuItem>
                    </NavLink>
                    <NavLink to="" onClick={handleLogout} className={styles.loggedIn}>
                      <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </NavLink>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </div>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}

export default NavBar
