import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { ClickAwayListener, IconButton, MenuList, Popper, Paper, MenuItem } from '@mui/material'
import MoreVert from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const FlightKebabMenu = ({ flight, itineraryId, handleDeleteFlight }) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <>
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
        <MoreVert style={{ color: '#474962' }} />
      </IconButton>
      <Popper
        id="menu"
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        aria-labelledby="button"
        placement="bottom-end"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <MenuList>
              <MenuItem>
                <Link to={`/itineraries/${itineraryId}/flights/${flight._id}`} state={flight}>
                  <EditIcon style={{ color: '#474962' }} />
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleDeleteFlight(itineraryId, flight._id)}>
                <DeleteForeverIcon style={{ color: '#474962' }} />
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  )
}

export default FlightKebabMenu
