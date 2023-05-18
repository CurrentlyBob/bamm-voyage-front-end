import { useState } from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@mui/joy/IconButton'
import Menu from '@mui/joy/Menu'
import MenuItem from '@mui/joy/MenuItem'
import MoreVert from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const FlightKebabMenu = ({ flight, itineraryId, handleDeleteFlight }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = async (evt) => {
    setAnchorEl(evt.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id="button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={open ? handleClose : handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="button"
        placement="bottom-end"
      >
        <MenuItem>
          <Link to={`/itineraries/${itineraryId}/flights/${flight._id}`} state={flight}>
            <EditIcon style={{ color: '#474962' }} />
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleDeleteFlight(itineraryId, flight._id)} style={{ color: '#474962' }}>
          <DeleteForeverIcon />
        </MenuItem>
      </Menu>
    </>
  )
}

export default FlightKebabMenu
