import Image from 'next/image';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, image, thumbnailUrl }) {
  return (
    <Card style={{ minHeight: '300px', overflow: 'auto' }}>
      <figure>
        <Image
        priority={true}
        layout="responsive"
        objectFit="cover"
        objectPosition="center top"
        // className='img'
          src={image}
          alt={title} // Use a descriptive alt text
          width={300} // Adjust to your desired size
          height={150}
        />
        <figcaption>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {thumbnailUrl}
            </Typography>
          </CardContent>
        </figcaption>
      </figure>
    </Card>
  );
}
