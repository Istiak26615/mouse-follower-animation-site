
import React, { useState } from 'react';
import Logo from '../../assets/img/Tal-Logo.svg'
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Box, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const StickyIconButton = styled(IconButton)({
  position: 'sticky',
  top: '10px',
  right: '10px',
  zIndex: 999,
});

const NavbarLinks = styled('nav')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  '& li': {
    marginLeft: theme.spacing(3),
    '&:first-child': {
      marginLeft: 0,
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#000000', // Change this to your desired link color
  },
}));

const DrawerLinks = styled('nav')(({ theme }) => ({
  width: '250px', // Change this to your desired drawer width
  padding: theme.spacing(2),
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  '& li': {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#000000', // Change this to your desired link color
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
    
 

      <Box position="static" sx={{display:"inline-block",width:{xs:"87%",sm:"90%", md:"90%",lg:"90%"}, backgroundColor: "transparent", backdropFilter: 'blur(10px)', flexGrow: 1 }}>
        <Box container spacing={2}
          sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" passHref>
              <IconButton color="inherit">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img height={100} width="auto" src={Logo} alt='' />
                </Typography>
              </IconButton>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavbarLinks>
              <ul>
                <li><Link to="/about"><Typography sx={{ color: "black" }}>About</Typography></Link></li>
                <li><Link to="/contact"><Typography sx={{ color: "black"}}>Contact</Typography></Link></li>
              </ul>
            </NavbarLinks>

            {/* <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton> */}
          </Box>

        </Box>
      </Box>
      <StickyIconButton onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "black" }} />
      </StickyIconButton>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} >
        <DrawerLinks>
          <ul>
            <li>
              <Link to="/" sx={{ display: "flex" }} onClick={() => { setDrawerOpen(false) }}>
                <ListItem button component="a" >
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </li>
            <li>
              <Link to="/about" sx={{ display: "flex" }} onClick={() => { setDrawerOpen(false) }}>
                <ListItem button component="a">
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </Link>
            </li>
            <li>
              <Link to="/services" sx={{ display: "flex" }} onClick={() => { setDrawerOpen(false) }}>
                <ListItem button component="a" >
                  <ListItemIcon><BuildIcon /></ListItemIcon>
                  <ListItemText primary="Services" />
                </ListItem>
              </Link>
            </li>
            <li>
              <Link to="/solutions" sx={{ display: "flex" }} onClick={() => { setDrawerOpen(false) }}>
                <ListItem button component="a">
                  <ListItemIcon><AssignmentIcon /></ListItemIcon>
                  <ListItemText primary="Solutions" />
                </ListItem>
              </Link>
            </li>
            <li>
              <Link to="/contact" sx={{ display: "flex" }} onClick={() => { setDrawerOpen(false) }}>
                <ListItem button component="a">
                  <ListItemIcon><PhoneIcon /></ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </Link>
            </li>
          </ul>
        </DrawerLinks>
      </Drawer>
    </>
  );
};

export default Navbar;

