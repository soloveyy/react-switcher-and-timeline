import React from 'react'
import Card from '@material-ui/core/Card';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Source Sans Pro',
        'sans-serif',
      ].join(',')
    },
});

const useStyles = makeStyles({
    root: {
      width: 500,
      textAlign: "center",
      margin: "auto auto",
    },
  });

  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 25,
      label: '$30,000',
    },
    {
      value: 50,
      label: '$200,000',
    },
    {
      value: 75,
      label: '$1million',
    },
    {
        value: 100,
        label: 'up',
    },
  ];

const styles = {
    root: {
        color: '#557ebb',
        height: 10,
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
    },
    track: {
      height: 10,
    },
    rail: {
      height: 10,
      opacity: 1,
      backgroundColor: '#3b5b86',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 14,
      width: 2,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
}
  

function valueLabelFormat(value) {
    if(value){
    const index = marks.findIndex(mark => mark.value === value)
    return marks[index].label
    } else {
        return value = "$0"
    }
}

function Timeline(props) {

    const styles = useStyles();
    const {classes} = props
    
    return (
        <div>
           <ThemeProvider theme={theme}>
           <Card className="card-timeline">
                <div className={styles.root}>
                <Typography className="slider-timeline-text" id="discrete-slider-small-steps" gutterBottom>
                <Box fontStyle="normal" color="#040404" fontSize="20px" m={1}>
                    What are your monthly online sales?
                </Box>
                <Box fontStyle="italic" color="#9c9c9c " m={1}>
                    (approximately)
                </Box>
                </Typography>
                <Slider
                    className="slider-timeline"
                    classes={{
                        root:classes.root,
                        thumb:classes.thumb,
                        active:classes.active,
                        valueLabel:classes.valueLabel,
                        track:classes.track,
                        rail:classes.rail,
                        mark:classes.mark,
                        markActive:classes.markActive,
                    }}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0}
                    marks={marks}
                    // min={0}
                    // max={1000}
                    valueLabelDisplay="on"
                />
                </div>
            </Card>
           </ThemeProvider>
        </div>
    )
}

export default withStyles(styles)(Timeline)

