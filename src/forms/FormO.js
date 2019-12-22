import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormOComponent from "./FormOComponent";
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function FormO() {
    const classes = useStyles();
    const home = () => {
      window.location.replace(window.location.origin + "/dashboard") 
    }
    return (
        <div className={classes.root}>
         <CssBaseline />
        <main className={classes.layout}>
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
        
            {/* List Of Existing Records */}
            <Grid item xs={11}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                  O Form
                </Typography>
                <FormOComponent/>
              </Paper>
            </Grid>
            <Grid item xs={1}>
          <Fab color="secondary" aria-label="add" className={classes.margin} style={{position:"fixed", bottom: "2em", right: "2em"}} onClick={home}> 
             <HomeIcon />
          </Fab>
        </Grid>

          </Grid>
            </Container>
          </main>
        </div>
    );
}