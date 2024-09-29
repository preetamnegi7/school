import * as React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../components/NavBar'; // Make sure to import your NavBar
import '../styles/globals.css'; // Your global styles

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <CssBaseline />
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}
