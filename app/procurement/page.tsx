'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/procurement.module.css';
import {
  Avatar,
  Badge,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OrderComponent from '@/components/OrderComponent';
import { orderData } from '@/lib/constants';

const Procurement = () => {
  const [orders, setOrders] = useState(orderData);
  const [selectedOrder, setSelectedOrder] = useState(orderData[0]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.filterItem}>
            <div className={styles.searchInputContainer}>
              <input
                id="search-bar"
                // className="roundedInput"
                placeholder="My Responsibilities"
                className={styles.searchInput}
              />
              <IconButton
                type="submit"
                aria-label="search"
                style={{ position: 'absolute', right: 8 }}
              >
                <SearchIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <LocalShippingOutlinedIcon
                style={{
                  position: 'absolute',
                  left: 10,
                  fontSize: 16,
                  top: 8,
                  color: 'gray',
                }}
              />
            </div>
            <div className={styles.poContainer}>
              <input
                id="search-bar"
                // className="roundedInput"
                placeholder="PO"
                className={styles.poInput}
              />
            </div>
            <Badge badgeContent={10} color="secondary">
              <TuneIcon className={styles.settingsIcon} sx={{ fontSize: 16 }} />
            </Badge>
          </div>
          <div className={styles.filterItem}>
            <TextField
              className={styles.filterInputs}
              id="standard-basic"
              label="Cop id"
              variant="standard"
              placeholder="Enter cop id"
              size="medium"
              InputLabelProps={{ shrink: true }}
              InputProps={{ style: { fontSize: 12 } }}
            />
            <TextField
              className={styles.filterInputs}
              id="standard-basic"
              label="Order no"
              placeholder="Enter order no"
              variant="standard"
              size="medium"
              style={{ fontSize: 12 }}
              InputLabelProps={{ shrink: true }}
              InputProps={{ style: { fontSize: 12 } }}
            />
          </div>
          <div className={styles.filterItem}>
            <div className={styles.filterControl}>
              <div className={styles.filterActionItems}>
                <Typography
                  fontSize={12}
                  fontWeight={600}
                  sx={{ textDecoration: 'underline' }}
                >
                  Sort
                  {/* <KeyboardArrowDownIcon/> */}
                </Typography>
                <Typography
                  fontSize={12}
                  fontWeight={600}
                  sx={{ textDecoration: 'underline' }}
                >
                  Group By
                </Typography>
              </div>
              <div className={styles.filterAction}>
                <div className={styles.filterActionItems}>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    sx={{ textDecoration: 'underline' }}
                  >
                    Clear
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    sx={{ textDecoration: 'underline' }}
                  >
                    Search
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderContainer}>
          <Typography>Orders</Typography>
          <div className={styles.orderListContainer}>
            {orders.map((order) => {
              return (
                <div
                  key={order.id}
                  onClick={() => {
                    console.log(order);
                    setSelectedOrder(order);
                  }}
                >
                  <OrderComponent
                    title={order.orderId}
                    subtitle={order.name}
                    isAnchored={order.isAnchored}
                    isPinned={order.isPinned}
                    showInfo={order.info}
                    user={order.user}
                    category={order.category}
                    isSelected={order.id === selectedOrder.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <div className={styles.headerTitleContainer}>
            <Avatar
              sx={{
                width: 20,
                height: 20,
                fontSize: 8,
              }}
            >
              HT
            </Avatar>
            <Typography fontSize={12} fontWeight={600}>
              {selectedOrder.orderId}
            </Typography>
            <Typography fontSize={12} fontWeight={600}>
              {selectedOrder.name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procurement;
