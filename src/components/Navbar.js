import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import useNavbar from '../hook/useNavbar';

const Navbar = () => {
  const routes = useNavbar();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const { pathname } = location;

  return (
    <AppBar position='static' elevation={0}>
      <Toolbar sx={{ bgcolor: '#fff', gap: '30px', padding: '20px' }}>
        <IconButton
          edge='start'
          onClick={toggleMobileMenu}
          sx={{ display: { md: 'none' }, color: '#124C6E' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          color='#124c6e'
          fontWeight='600'
          sx={{
            fontSize: { xs: '26px', md: '30px', xl: '40px' },
            textDecoration: 'none',
          }}
        >
          FitGuide
        </Typography>
        <Drawer anchor='left' open={isMobileMenuOpen} onClose={closeMobileMenu}>
          <List
            sx={{
              width: '180px',
            }}
          >
            {routes.map((item) => (
              <ListItem
                button
                key={item.href}
                component={Link}
                to={item.href}
                onClick={closeMobileMenu}
                sx={{
                  bgcolor: pathname === item.href ? ' #124C6E' : '',
                  color: pathname === item.href ? ' #fff' : '',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {isMobile ? null : (
          <Stack
            direction='row'
            gap='40px'
            fontFamily='Alegreya'
            alignItems='flex-end'
          >
            {routes.map((item) => (
              <Link
                to={item.href}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  color='#111'
                  borderBottom='3px solid #FF2625'
                  sx={{
                    fontSize: { xs: '20px', md: '22px', xl: '24px' },
                    borderBottom:
                      item.href === pathname ? '3px solid #090C15' : '',
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
