import _ from 'lodash';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import Gravatar from 'react-gravatar';

const styles = {
  card: {
    width: '100%'
  },
  media: {
    objectFit: 'cover',
  },
};

const ContactGrid = props => {

  const classes = props.classes;

  const renderContacts = () => {
    const orderedContacts = _.orderBy(
      props.contacts, 
      [contact => contact[props.sortBy].toLowerCase()], 
      ['asc']
    );

    // return _.map(orderedContacts, contact => {
    //   return (
    //     <li className="list-group-item" key={contact._id}>
    //       {contact.firstName} {contact.lastName} {contact.email}
    //     </li>
    //   );
    // });

    return _.map(orderedContacts, (contact, i) => {
      return (
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Grow 
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={i * 200}
          >
            <Card className={classes.card}>
              <Gravatar style={{ width: '100%', height: 'auto' }} email={contact.email} size={500} />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                {contact.firstName} {contact.lastName}
                </Typography>
                <Typography component="p">
                {contact.email}
                </Typography>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      );
    });
  }

  return (
    <Grid
      container
      direction="row"
      spacing={16}
    >
      {renderContacts()}
    </Grid>
  )
}

export default withStyles(styles)(ContactGrid);