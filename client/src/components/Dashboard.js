import React, { useState } from 'react';

import { Container, Grid, } from '@mui/material';
import Card from './Card';

const breweries = [
  {
    name: "Alphabet City Brewing Co",
    address: "96 Avenue C Frnt 4",
    phone: "9143566809",
    website: "http://www.acbnyc.com",
    rating: 5
  },
  {
    name: "B9 Beverages Inc",
    address: "404 5th Ave # 7.055",
    phone: "Not Available",
    website: "Not Available",
    rating: 3
  },
  {
    name: "Birreria @ Eataly",
    address: "200 5th Ave Fl 14",
    phone: "2125390204",
    website: "http://www.eatalyny.com",
    rating: 3
  },
  {
    name: "Death Avenue",
    address: "315 10th Ave B/W 28th & 29th St.",
    phone: "2126958080",
    website: "http://www.deathave.com",
    rating: 4
  },
  {
    name: "Empire City Beer Company",
    address: "Not Available",
    phone: "9178040571",
    website: "http://www.hitemhard.com",
    rating: 4
  },
  {
    name: "Harlem Blue Beer",
    address: "2214 Frederick Douglass Blvd Ste 267",
    phone: "Not Available",
    website: "http://www.harlemblue.com",
    rating: 3
  },
  {
    name: "Harlem Brewing Co",
    address: "2 W 123rd St",
    phone: "8885596735",
    website: "http://www.harlembrewingcompany.com",
    rating: 4
  },
  {
    name: "Heartland Brewery",
    address: "35 Union Sq W Frnt 1",
    phone: "2126453400",
    website: "http://www.heartlandbrewery.com",
    rating: 3
  },
  {
    name: "Radiant Pig Craft Beers",
    address: "122 W 27th St Fl 10",
    phone: "Not Available",
    website: "Not Available",
    rating: 3
  },
  {
    name: "Ruckus Brewing Co",
    address: "261 W 35th St Ste 1002",
    phone: "6467105098",
    website: "Not Available",
    rating: 4
  },
  {
    name: "The Owls Brew",
    address: "135 W 29th St Rm 602",
    phone: "2125640218",
    website: "Not Available",
    rating: 4
  },
  {
    name: "Third Rail Beer",
    address: "928 Broadway Ste 902",
    phone: "Not Available",
    website: "Not Available",
    rating: 3
  },
];

const Dashboard = () => {
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilteredBreweries(
      breweries.filter((brewery) =>
        brewery.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {filteredBreweries.map((brewery, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card brewery={brewery} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;











































// const Dashboard = () => {
//   const [boxes, setBoxes] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [value, setValue] = useState(0);

//   const addBox = () => {
//     const newBox = {
//       id: uuidv4(),
//       name,
//       description,
//       value
//     };
//     setBoxes([...boxes, newBox]);
//     setName('');
//     setDescription('');
//     setValue(0);
//   };

//   return (
//     <Box sx={{ padding: '20px', width: 300,height: 300, display: 'flex', flexDirection: 'row', border: '1px solid black' }}>
//       <TextField
//         label="Name"
//         variant="standard"        
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         fullWidth
//         margin="normal"
//       />

//       <TextField
//         label="Description"
//         variant="standard"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//       <Button variant="contained" onClick={addBox} sx={{ mt: 2 }}>
//         Add Rating Box
//       </Button>

//       {boxes.map(box => (
//         <Box key={box.id} sx={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
//           <Typography variant="h6">{box.name}</Typography>
//           <Typography variant="body1">{box.description}</Typography>
//           <Rating name="read-only" value={box.value} readOnly />
//           <Typography variant="caption">ID: {box.id}</Typography>
//         </Box>
//       ))}
//     </Box>
//   );
// };


