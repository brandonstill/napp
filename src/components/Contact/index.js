import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, contactModal, saveContact, deleteContact } from '../../store/actions';
import Grid from '@material-ui/core/Grid';
import ContactNav from './ContactNav';
import ContactGrid from './ContactGrid';
import ContactNew from './ContactNew';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export class Contact extends Component {
  state = {
    sortBy: 'lastName'
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleSort = event => {
    this.setState({
      sortBy: event.target.value
    });
  }

  handleOpen = () => {
    this.props.contactModal(true);
  }

  handleClose = () => {
    this.props.contactModal(false);
  }

  handleSave = data => {
    this.props.saveContact(data);
  }

  handleDelete = (e, data) => {
    e.preventDefault();
    const id = { id: data }
    this.props.deleteContact(id);
  }

  render() {
    return (
      <Grid 
        container 
        spacing={24} 
        style={{ 
          margin: '0px',
          padding: '20px',
          width: '100%'
        }}
      >
        <ContactNav 
          handleOpen={this.handleOpen} 
          handleSort={this.handleSort} 
          sortBy={this.state.sortBy} 
        />
        <ContactGrid 
          contacts={this.props.contacts} 
          sortBy={this.state.sortBy}
          handleDelete={this.handleDelete}
        />
        <Modal
          aria-labelledby="new-contact-modal"
          aria-describedby="new-contact-modal"
          open={this.props.modal}
          onClose={this.handleClose}
        >
          <div className={this.props.classes.paper}>
            <ContactNew handleClose={this.handleClose} handleSave={this.handleSave}/>
          </div>
        </Modal>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return { 
    contacts: state.contacts, 
    modal: state.contactModal 
  }; 
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    contactModal: (b) => dispatch(contactModal(b)),
    saveContact: (data) => dispatch(saveContact(data)),
    deleteContact: (data) => dispatch(deleteContact(data))
  }
}

const styledComponent = withStyles(styles)(Contact);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);