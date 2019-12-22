import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "filepond/dist/filepond.min.css";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 18,
      },
      pos: {
        marginBottom: 12,
      },
  });

class OformListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            {/* List Of Existing Records */}
            <Grid item xs={12}>
            <Link to={'/fill_form_o'} style={{ textDecoration: 'none' }}>
            <Card className={classes.card} style={{padding:"1em"}} Button>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                +919971082707
        </Typography>
        </Card>
        </Link>
            </Grid>
         </Grid>
          </Container>
    );
  }
}

export default withStyles(useStyles)(OformListItem);