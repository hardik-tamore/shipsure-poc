'use client';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';
import { routeHeaders } from '@/lib/constants';

const NavHeader = () => {
  const pathname: string = usePathname();
  return (
    <Typography variant="subtitle1" gutterBottom>
      {routeHeaders[pathname]}
    </Typography>
  );
};

export default NavHeader;
