import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SurveyFormComponent from "./SurveyFormComponent";
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab'

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 880,
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
  appBar: {
    position: 'relative',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class FormO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  home() {
    window.location.replace(window.location.origin + "/dashboard") 
  }
  render() {
    const { classes } = this.props;
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
                  Audio Survey Form
                </Typography>
                <SurveyFormComponent />
              </Paper>
            </Grid>
        <Grid item xs={1}>
          <Fab color="secondary" aria-label="add" className={classes.margin} style={{position:"fixed", bottom: "2em", right: "2em"}} onClick={this.home.bind(this)}> 
             <HomeIcon />
          </Fab>
        </Grid>
          </Grid>
          </Container>
          </main>
        </div>
    );
  }
}

export default withStyles(useStyles)(FormO);