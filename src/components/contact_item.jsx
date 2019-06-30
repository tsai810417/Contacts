import React from 'react';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModify = this.handleModify.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeContact(this.props.contact);
  }

  handleModify(e) {
    e.preventDefault();
    this.props.showEditForm(this.props.contact);
  }

  render(){
    const { id, name, email, phone } = this.props.contact;
    return (
      <tr className='table-content-row'>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ email }</td>
        <td>{ phone }</td>
        <td>
          <button onClick={ this.handleDelete }>Delete</button>
          <button onClick={ this.handleModify }>Modify</button>
        </td>
      </tr>
    )
  }
}

export default ContactItem;
