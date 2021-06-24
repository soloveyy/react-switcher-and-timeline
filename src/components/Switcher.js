import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import logo from '../img/logo_transparent.png'


const styles = {
    root: {
        color: 'white',
    },
    switchBase: {
        '&$checked': {
        //   transform: 'translateX(16px)',
        //   color: 'white',
          '& + $track': {
            backgroundColor: '#3eb281',
            opacity: 1,
          },
        },
    },
    track: {
        backgroundColor: '#9c9c9c '
    },
    checked: {}
  };

 function Switcher(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const {classes} = props

  return (
    <div>
        <Card className="card-switcher">
        {/* <CardMedia
            className="logo-img"
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={logo}
          title=""
        /> */}
        <img src={logo} className="logo-img" alt="Logo" />
        <CardContent className="card-content">SOLOVEY</CardContent>
        <Switch
        className="switcher"
        classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.root,
            track: classes.track,
            checked: classes.checked
        }}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        </Card>

    </div>
  );
}

export default withStyles(styles)(Switcher)
