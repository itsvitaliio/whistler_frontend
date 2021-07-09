import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

const theme = {
  colors: {
    primaryBlue: '#1da1f2',
    blue: '#29a3ef',
    darkerBlue: '#006dbf',
    green: '#3e8e41',
    red: '#E23D68',
    gray: '#7A7A7A',
    darkGray: '#474747',
    lightGray: '#757575',
    black: '#000',
    white: '#fff',
    lightGreen:'#A5D6A7',
    lightPink: '#FF80AB',
    warning:'#FFFF00',
    seaGreen: '#26A69A',
    seaBlue:'#0097A7',
  },
};

const CustomThemeProvider = (props) => (
  <ThemeProvider theme={theme} {...props} />
);

export default CustomThemeProvider;
