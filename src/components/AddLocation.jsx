import React from "react";

import TextField from "@material-ui/core/TextField";

import "./addLoc.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const AddLocation = () => {
   return (
      <div className="addLocationContainer">
         <h3>Add Location</h3>
         <div className="container">
            <div className="addLocForm">
               <div className="row">
                  <div className="col-lg-12">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Location Name"
                     />
                  </div>
                  <div className="col-lg-6">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Address Line 1"
                     />
                  </div>
                  <div className="col-lg-6">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Suite No."
                     />
                  </div>
                  <div className="col-lg-6">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Address Line 2"
                     />
                  </div>
                  <div className="col-lg-3">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="City"
                     />
                  </div>
                  <div className="col-lg-3">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="State"
                     />
                  </div>
                  <div className="col-lg-3">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Zip Code"
                     />
                  </div>
                  <div className="col-lg-3">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Phone Number"
                     />
                  </div>
                  <div className="col-lg-6">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Time Zone"
                     />
                  </div>
                  <div className="col-lg-6">
                     <Link to="/addfacilities">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Facility Time"
                     />
                     </Link>
                  </div>
                  <div className="col-lg-6">
                     <TextField
                        style={{ width: "100%", margin: "15px 0" }}
                        label="Appointment Pool"
                     />
                  </div>
                  <div className="col-lg-12">
                     <div className="buttonContainer">
                        <Link to="/">
                        <Button variant="contained" color="secondary">
                           Cancel
                        </Button>
                        </Link>
                        <Link to="/showlocations">
                        <Button variant="contained" color="primary">
                           Save
                        </Button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddLocation;
