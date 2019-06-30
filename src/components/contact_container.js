import { connect } from 'react-redux';
import ContactIndex from './contact_index';
import { removeContact } from '../actions/contact_actions';

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  removeContact: contact => dispatch(removeContact(contact))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactIndex)
