import { useState } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AccommodationKebabMenu = ({
  accommodation,
  itineraryId,
  handleDeleteAccommodation,
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
            to={`/itineraries/${itineraryId}/accommodations/${accommodation._id}`}
            state={accommodation}
          >
            <EditIcon style={{ color: '#567189'}}/>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleDeleteAccommodation(itineraryId, accommodation._id)} style={{ color: '#567189'}}>
          <DeleteForeverIcon />
        </MenuItem> 
      </Menu>
    </>
  )
}

export default AccommodationKebabMenu