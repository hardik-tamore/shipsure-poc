import { Avatar, Paper, Typography } from '@mui/material';
import React from 'react';
import AnchorIcon from '@mui/icons-material/Anchor';
import PushPinIcon from '@mui/icons-material/PushPin';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styles from '@/styles/orderCard.module.css';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import moment from 'moment';

const OrderComponent = ({
  title = 'default title',
  subtitle = 'default subtitle',
  category = 'default category',
  user = { name: '', email: '', avatarBg: 'green' },
  isPinned = false,
  isAnchored = false,
  showInfo = false,
  date = new Date(),
  isSelected = false,
}) => {
  return (
    <div
      className={styles.card}
      style={{ border: isSelected ? '2px solid black' : 'none' }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.titleContainer}>
          <Typography fontSize={12} fontWeight={600}>
            {title}
          </Typography>
          <Typography fontSize={12} fontWeight={600}>
            {subtitle}
          </Typography>
        </div>
        <div className={styles.cardBadges}>
          {isAnchored && <AnchorIcon sx={{ fontSize: 20, color: 'gray' }} />}
          {isPinned && <PushPinIcon sx={{ fontSize: 20, color: 'gray' }} />}
          {showInfo && (
            <InfoOutlinedIcon sx={{ fontSize: 20, color: 'gray' }} />
          )}
          <Avatar
            sx={{
              width: 20,
              height: 20,
              fontSize: 8,
              bgcolor: user.avatarBg,
            }}
          >
            {user.name.split(' ').map((item) => item.charAt(0))}
          </Avatar>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.chip}>
          <LocalShippingOutlinedIcon
            style={{
              fontSize: 16,
              color: '#0c466f',
            }}
          />
          <Typography fontSize={12}>Lorem ipsum</Typography>
        </div>
        <div className={styles.footerRight}>
          <Typography sx={{ color: 'gray' }} fontSize={12}>
            {category}
          </Typography>
          <Typography sx={{ color: 'gray' }} fontSize={12}>
            {moment(date).format('DD MMM YYYY')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
