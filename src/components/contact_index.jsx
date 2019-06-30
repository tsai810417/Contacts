import React from 'react';
import ContactItem from './contact_item';
import ContactFormContainer from './contact_form_container';

class ContactIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewForm: false,
      showEditForm: false,
      contactToModify: {}
    };
    this.showNewForm = this.showNewForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  showNewForm(e) {
    e.preventDefault();
    this.setState({
      showNewForm: true
    });
  }

  showEditForm(contact) {
    this.setState({
      showEditForm: true,
      contactToModify: contact
    });
  }

  closeForm() {
    this.setState({
      showNewForm: false,
      showEditForm: false,
      contactToModify: {}
    })
  }

  render() {
    const contacts = Object.values(this.props.contacts);
    // define contactItems
    const contactItems = contacts.map(el => {
      return(
        <ContactItem
          key={ el.id }
          contact={ el }
          removeContact = { this.props.removeContact }
          showEditForm={ this.showEditForm }
          closeForm = { this.closeForm }
          />
      )
    });

    // define form for create or edit
    let form = <div></div>;
    if (this.state.showNewForm) {
      form = <ContactFormContainer
        formType='create'
        closeForm={ this.closeForm } />;
    } else if (this.state.showEditForm) {
      form = <ContactFormContainer
        formType='edit'
        contact={ this.state.contactToModify }
        closeForm={ this.closeForm }/>;
    }

    // define if the button for create new contact should be displayed
    let button = '';
    if (!this.state.showNewForm || !this.state.showEditForm) {
      button = <button id='new-button' onClick={ this.showNewForm }>New Contact</button>;
    }

    return (
      <div className='main-component'>
        { form }
        { button }
        <table className='contact-table'>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
            { contacts.length !== 0 ? contactItems: '' }
          </tbody>
        </table>
        { contacts.length === 0 ? <h5 className='no-data-string'>no data</h5> : ''}
      </div>
    )
  }
}

export default ContactIndex;
