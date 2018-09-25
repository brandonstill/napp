import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveContact } from '../../../store/actions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    display: 'flex',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  actionItems: {
    marginTop: '20px',
    textAlign: 'right'
  },
  cancelButton: {
    margin: theme.spacing.unit,
  },
});

export class ContactNew extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }

  handleChange = (name, event) => event => {
    console.log(name);
    console.log(event);
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveContact(this.state);
  }

  renderField = (label, type, name) => {

    return(
      // <div>
      //   <label htmlFor={name}>{label}</label>
      //   <input value={this.state[name]} type={type} name={name} id={name} onChange={this.handleChange} />
      // </div>
      
      <TextField
        required
        id={name}
        name={name}
        label={label}
        className={this.props.classes.textField}
        value={this.state.name}
        onChange={this.handleChange(name)}
        margin="normal"
        style={{
          marginLeft: 0,
          marginRight: 0
        }}
      />

    )
  }

  render() {
    return( 
      // <form onSubmit={this.handleSubmit}>
      //   {this.renderField('First Name', 'text', 'firstName')}
      //   {this.renderField('Last Name', 'text', 'lastName')}
      //   {this.renderField('Email', 'text', 'email')}
      //   <div>
      //     <button type="submit">Submit</button>
      //     <button type="button" onClick={this.props.handleClose}>Cancel</button>
      //   </div>
      // </form>
      <form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <Typography gutterBottom variant="headline" component="h2">
          Add New Contact
        </Typography>
        {this.renderField('First Name', 'text', 'firstName')}
        {this.renderField('Last Name', 'text', 'lastName')}
        {this.renderField('Email', 'text', 'email')}
        <div className={this.props.classes.actionItems}>
          <Button 
            size="large" 
            className={this.props.classes.cancelButton} 
            onClick={this.props.handleClose} 
            type="button"
            name="cancel"
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            type="submit"
            name="submit"
          >
           Add
          </Button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveContact: (data) => dispatch(saveContact(data))
  }
}

const styledComponent = withStyles(styles)(ContactNew);
export default connect(null, mapDispatchToProps)(styledComponent);