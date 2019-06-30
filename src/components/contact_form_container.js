import { connect } from 'react-redux';
import ContactForm from './contact_form';
import {
  insertContact,
  updateContact
} from '../actions/contact_actions';

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  insertContact: contact => dispatch(insertContact(contact)),
  updateContact: contact => dispatch(updateContact(contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
