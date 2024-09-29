import Head from 'next/head';
import CarouselComponent from '../components/Carousel';
import { Box, Typography } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>School App</title>
                <meta name="description" content="A visually stunning school web application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CarouselComponent />
            <Typography variant="h5" sx={{ marginTop: '20px' }}>
                Education for the Future
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center' }}>
                Our mission is to provide high-quality education and foster a love for learning.
            </Typography>
        </Box>
    );
}
