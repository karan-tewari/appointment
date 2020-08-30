import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';


const LocationTimings =()=>{

  const [checked, setChecked] = React.useState(true);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return(
    <div>
<div>
   <FormControlLabel
        control={<Checkbox checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }} />}
        label="Monday"
      />
            <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1800, // 5 min
        }}
      />
  <Switch
        checked={state.checkedA}
        onChange={handleSwitchChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1800, // 5 min
        }}
      />
  <Switch
        checked={state.checkedA}
        onChange={handleSwitchChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Button variant="contained" color="primary">Apply to all checked</Button>
  </div>
  <div>
    <Link to="/addLocation">
    <Button variant="contained" color="primary">Save</Button>
    </Link>
    <Link to="/">
    <Button variant="contained" color="secondary">Cancel</Button>
    </Link>
  </div>
  </div>
  )
}

export default LocationTimings