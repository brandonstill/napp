import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 24,
    right: 24
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const ContactNav = props => {
  const classes = props.classes;

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="orderBy">Order By</InputLabel>
        <Select
          value={props.sortBy}
          onChange={props.handleSort}
        >
          <MenuItem value={'firstName'}>First Name</MenuItem>
          <MenuItem value={'lastName'}>Last Name</MenuItem>
          <MenuItem value={'email'}>Email</MenuItem>
        </Select>
      </FormControl>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={props.handleOpen}>
        <AddIcon />
      </Button>
    </form>
  )
}

export default withStyles(styles)(ContactNav);
