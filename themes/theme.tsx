"use client"
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#00504b',
      main: '#052e2b',
      dark: '#020a08',
      contrastText: '#fff',
    },
    secondary: {
      light: '#61d368',
      main: '#61d368',
      dark: '#00704b',
      contrastText: '#000',
    },
    info:{
      light: '#80e7ff',
      main: '#80e7ff',
      dark: '#80e7ff',
      contrastText: '#04487f',
    },
  },
});
