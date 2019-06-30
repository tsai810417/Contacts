import React from 'react';
import ContactItem from './contact_item';

class ContactIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    const contacts = Object.values(this.props.contacts);
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
    return (
      <div className='main-component'>
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
