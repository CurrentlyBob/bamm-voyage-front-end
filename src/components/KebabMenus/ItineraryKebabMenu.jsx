import { useState } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ItineraryKebabMenu = ({
  itinerary, itineraryId, handleDeleteItinerary
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const handleClick  = async (evt) => {
    setAnchorEl(evt.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id='button'
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
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
          <Link
            to={`/itineraries/${itineraryId}/edit`}
            state={itinerary}
          >
            <EditIcon style={{ color: '#474962'}}/>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleDeleteItinerary(itineraryId)} style={{ color: '#474962'}}>
          <DeleteForeverIcon />
        </MenuItem> 
      </Menu>
    </>
  )
}

export default ItineraryKebabMenu