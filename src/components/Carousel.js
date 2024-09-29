import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const items = [
    {
        name: "Slide 1",
        description: "Description for Slide 1",
        image: "/images/school-hero1.webp"
    },
    {
        name: "Slide 2",
        description: "Description for Slide 2",
        image: "/images/school-hero2.webp"
    },
    {
        name: "Slide 3",
        description: "Description for Slide 3",
        image: "/images/school-hero3.webp"
    }
];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Box position="relative" width="100%" height="715px" overflow="hidden">
            {items.map((item, index) => (
                <Box
                    key={index}
                    position="absolute"
                    width="100%"
                    height="100%"
                    display={index === currentIndex ? 'block' : 'none'}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover' // Prevent stretching
                        }}
                    />
                    <Box
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        color="white"
                        textAlign="left"
                    >
                        <Typography variant="h4">{item.name}</Typography>
                        <Typography variant="body1">{item.description}</Typography>
                    </Box>
                </Box>
            ))}
            <IconButton onClick={prevSlide} style={{ position: 'absolute', left: 10, top: '50%' }}>
                <ArrowBack style={{ color: 'white' }} />
            </IconButton>
            <IconButton onClick={nextSlide} style={{ position: 'absolute', right: 10, top: '50%' }}>
                <ArrowForward style={{ color: 'white' }} />
            </IconButton>
        </Box>
    );
};

export default CarouselComponent;
