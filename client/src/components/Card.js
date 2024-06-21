// src/BreweryCard.js

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const BreweryCard = ({ brewery }) => {
  const { name, address, phone, website, rating } = brewery;

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">{name}</Typography>
          <Box display="flex" alignItems="center">
            <Typography>{rating}</Typography>
            <StarIcon color="secondary" />
          </Box>
        </Box>
        <Typography variant="body2">Address: {address}</Typography>
        <Typography variant="body2">Phone: {phone}</Typography>
        <Typography variant="body2">
          Website: {website !== "Not Available" ? <a href={website} target="_blank" rel="noopener noreferrer">{website}</a> : website}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BreweryCard;
