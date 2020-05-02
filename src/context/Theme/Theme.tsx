import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import React from 'react';

export const defaultTheme = createMuiTheme({
    shape: {
        borderRadius: 4
    },
    palette: {
        type: 'dark',
        primary: {
            light: '#e95e86',
            main: '#de1b55',
            dark: '#a40f4b'
        },
        secondary: {
            light: '#acdcdd',
            main: '#30b0b0',
            dark: '#00827e',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.54)',
            disabled: 'rgba(255, 255, 255, 0.38)',
            hint: 'rgba(255, 255, 255, 0.38)'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#232041',
            default: 'rgba(18, 16, 39, 1)'
        },
        action: {
            active: '#fff',
            hover: 'rgba(0, 0, 0, 0.2)',
            hoverOpacity: 0.1,
            selected: 'rgba(0, 0, 0, 0.4)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)'
        }
    },
    typography: {
        fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: 38,
            lineHeight: '45px',
            letterSpacing: '-0.5px'
        },
        h2: {
            fontWeight: 400,
            fontSize: 26,
            lineHeight: '28px',
            letterSpacing: '0px'
        },
        h3: {
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '29px',
            letterSpacing: '0.25px'
        },
        h4: {
            fontSize: 20,
            lineHeight: '24px',
            letterSpacing: 0
        },
        h5: {
            fontSize: 16,
            lineHeight: '21px',
            letterSpacing: '0.25px'
        },
        h6: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '16px',
            letterSpacing: '0.25px'
        },
        subtitle1: {
            fontSize: 16,
            lineHeight: '21px',
            letterSpacing: '0.15px'
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '21px',
            letterSpacing: '0.1px'
        },
        body1: {
            fontSize: 14,
            lineHeight: '19px',
            letterSpacing: '0.5px'
        },
        body2: {
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '0.25px'
        },
        button: {
            fontSize: 14,
            lineHeight: '21px',
            letterSpacing: '1.25px'
        },
        caption: {
            fontSize: 12,
            lineHeight: '15px',
            letterSpacing: '0.4px'
        },
        overline: {
            fontSize: 12,
            lineHeight: '15px',
            letterSpacing: '1px'
        }
    }
});

export default function ThemeContext({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    );
};