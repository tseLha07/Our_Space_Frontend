import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ActiveUserContext from '../../Contexts/ActiveUserContext';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.light,
  backgroundColor: 'black',
  borderRadius: 20,
  fontFamily: 'sans-serif',
  fontWeight: 200,
  '&:hover': {
    backgroundColor: 'grey',
  },
}));


export default function MenuAppBar() {

  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const activeUserContext = useContext(ActiveUserContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Groups
          </Typography>
          <ColorButton style={{marginRight: 10}} onClick={() => navigate("/")}>
          Home
          </ColorButton>
          <ColorButton style={{marginRight: 10}} onClick={() => navigate("/groupList")}>
            All Groups
          </ColorButton>
          <ColorButton style={{marginRight: 10}} onClick={() => navigate("/allusers")}>
            All Users
          </ColorButton>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={activeUserContext.logout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
