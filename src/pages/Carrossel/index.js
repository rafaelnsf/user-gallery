import { Typography } from "@mui/material";
import React from "react";
import ImageGallery from 'react-image-gallery';

const Carrossel = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <div>
            <Typography variant="h6" component="div" sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                color: '#737380'
            }}>
                Carrossel
            </Typography>
            {/* Uso de biblioteca terceira para renderizar um carrossel */}
            <ImageGallery items={images} />
        </div>
    );
};

export default Carrossel;