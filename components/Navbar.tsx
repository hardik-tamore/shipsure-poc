import React from 'react';
import styles from '../styles/navbar.module.css';
import { Avatar, Badge, Chip, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NavHeader from './NavHeader';
const Navbar = () => {
  return (
    <div className={styles.main}>
      <div>
        <NavHeader />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <IconButton aria-label="open drawer" >
            <SearchOutlinedIcon  sx={{fontSize: 16}}/>
          </IconButton>
        </div>
        <div className={styles.menuItem}>
          <Badge badgeContent={4} color="error" variant="dot">
            <NotificationsNoneOutlinedIcon  sx={{fontSize: 16}}/>
          </Badge>
        </div>
        <div className={styles.menuItem}>
          <IconButton aria-label="open drawer" sx={{}}>
            <AppsOutlinedIcon  sx={{fontSize: 16}}/>
          </IconButton>
        </div>
        <div className={styles.menuItem}>
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Daniel Roggers"
            variant="outlined"
            size='small'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
