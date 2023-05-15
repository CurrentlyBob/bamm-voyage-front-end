import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';

const KebabMenu = () => {
  return (
    <>
      <Menu>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem> 
      </Menu>
    </>
  )
}

export default KebabMenu