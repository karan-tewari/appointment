import React from "react";

import './home.css'

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Home = () => {
   return (
      <div className="home-container">
         <div className="top-section">
            <h1>Location</h1>
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
               Add location
            </Button>
         </div>
         <div className="contents">
             <div className="noContent">
                <LocationOnIcon />
                <p className="noContentHead">Kindly add your location first</p>
                <p>There's no location added right now</p>
             </div>
         </div>
      </div>
   );
};

export default Home;
