'use client';

import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import { Add } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const drawerItems = [
  {
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Inventory',
    route: '/procurement',
  },
  {
    icon: <WarningAmberOutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Warnings',
    route: '/default',
  },
  {
    icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Profile',
    route: '/default',
  },
  {
    icon: <WaterDropOutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Leaks',
    route: '/default',
  },
  {
    icon: <SettingsOutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Setting',
    route: '/default',
  },
  {
    icon: <HandymanOutlinedIcon sx={{ fontSize: 16 }} color="secondary" />,
    text: 'Tools',
    route: '/default',
  },
];
const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  paddingTop: '0.5rem',
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const router = useRouter();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <IconButton
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            sx={{
              alignSelf: open ? 'flex-end' : 'center',
              marginBottom: '1rem',
            }}
          >
            {open ? (
              <ChevronLeftIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
            ) : (
              <MenuIcon sx={{ color: '#fff', fontSize:  '1.2rem' }} />
            )}
          </IconButton>

          <IconButton
            aria-label="open drawer"
            onClick={() => {}}
            color="secondary"
            sx={{
              backgroundColor: '#00704b',
              width: '70%',
              height: '2.5rem',
              marginLeft: '0.5rem',
              marginRight: '0.5rem',
              borderRadius: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <Add color="secondary"  />
          </IconButton>
        </Box>
      </DrawerHeader>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                height: 28,
                padding: 1,
                paddingLeft: 2,
                color: '#61d368',
                backgroundColor: tab === index ? '#00504b' : 'none',
                margin: 1,
                borderRadius: 10,
              }}
              onClick={() => {
                setTab(index);
                router.push(item.route);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
