import React, { Component } from 'react';

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
    email: '',
    firstNameError: false,
    lastNameError: false,
    emailError: false
  }

  checkErrors = () => {

    const fields = [
      'firstName',
      'lastName',
      'email'
    ]

    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    fields.forEach(field => {
      if (this.state[field] === '') {
        this.setState({ [`${field}Error`]: true } );
      } else {
        this.setState({ [`${field}Error`]: false } );
      }
      
      if (!emailPattern.test(this.state.email)) {
        this.setState({ emailError: true } );
      } else {
        this.setState({ emailError: false } );
      }
    });

    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && emailPattern.test(this.state.email)) {
      return true;
    }

  }

  handleChange = (name, event) => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const valid = this.checkErrors();

    if (valid) {
      this.props.handleSave({
        firstName: this.state.firstName, 
        lastName: this.state.lastName, 
        email: this.state.email
      });
    }

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
        error= {this.state[`${name}Error`]}
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
      <form className="ContactNew-form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
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

export default withStyles(styles)(ContactNew);