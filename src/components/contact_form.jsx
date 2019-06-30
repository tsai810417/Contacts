import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.formType === 'create') {
      this.state = {
        id: null,
        name: '',
        email: '',
        phone: '',
        errors: {
          name: '',
          email: '',
          phone: ''
        },
        hideSubmit: true
      }
    } else {
      let contact = this.props.contact;
      this.state = {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone.replace('-', ''),
        errors: {
          name: '',
          email: '',
          phone: ''
        },
        hideSubmit: true
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    // used to test the email
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    // used to test the phone numnber
    const isnum = /^\d+$/;
    let errors = this.state.errors;
    let contacts = this.props.contacts;
    // update state according to input
    this.setState({ [name]: value });
    // validate the input
    switch (name) {
      case 'name':
        if (value.length === 0) {
          errors.name = 'Name cannot be empty';
        } else if (contacts[value]) {
          errors.name = 'Name is existed on the list';
        } else {
          errors.name = '';
        }
        break;
      case 'email':
        if (!validEmailRegex.test(value)) {
          errors.email = 'Invalid email';
        } else {
          errors.email = '';
        }
        break;
      case 'phone':
        if (value.length !== 10 || !isnum.test(value)) {
          errors.phone = 'Invalid phone number';
        } else {
         errors.phone = '';
        }
        break;
      default:
        break
    }
    // set the errors to state
    this.setState({ errors, [name]: value });
    if (!errors.name && !errors.email && !errors.phone) {
      this.setState({ hideSubmit: false });
    } else {
      this.setState({ hideSubmit: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // assign id and modify phone number format
    let currentMaxId = 0;
    let number = this.state.phone;
    Object.values(this.props.contacts).forEach(el => {
      currentMaxId = el.id > currentMaxId ? el.id : currentMaxId
    });
    let contact = {
      id: this.props.formType === 'create' ? currentMaxId + 1 : this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone: number.slice(0,2) + '-' + number.slice(2,11)
    };
    if (this.props.formType === 'create') {
      this.props.insertContact(contact);
    } else {
      this.props.updateContact(contact);
    }
    // empty forms after inserted or updated
    this.setState({
      id: null,
      name: '',
      email: '',
      phone: ''
    });
    // close the form
    this.props.closeForm();
  }

  handleCloseForm(e) {
    e.preventDefault();
    this.props.closeForm();
  }

  render() {
    let formTitle = <h3></h3>;
    let nameInput = <input></input>;
    // set form title based on form type
    // disable name input field if the form type is 'edit'
    if (this.props.formType === 'create') {
      formTitle = <h3>Create New Form</h3>;
      nameInput = <input
        type='text'
        name='name'
        onChange={this.handleChange}
        onBlur={this.handleChange}
        value={this.state.name} />;
    } else {
      formTitle = <h3>Edit Contact</h3>;
      nameInput = <input
        disabled
        type='text'
        name='name'
        onChange={this.handleChange}
        onBlur={this.handleChange}
        value={this.state.name} />;
    }

    let saveButton = <button></button>;
    if (this.state.hideSubmit) {
      saveButton = <button disabled>Save</button>;
    } else {
      saveButton = <button type='submit'>Save</button>;
    }

    return (
      <div id='form-modal'>
        <div id='form-content'>
          { formTitle }
          <form
            onSubmit={this.handleSubmit }>
            <label>Name
              { nameInput }
            </label>
            <p className='error-content'>{this.state.errors.name}</p>
            <label>Email
              <input
                type='text'
                name='email'
                onChange={this.handleChange}
                onBlur={this.handleChange}
                value={this.state.email} />
            </label>
            <p className='error-content'>{this.state.errors.email}</p>
            <label>Phone
              <input
                type='text'
                name='phone'
                onChange={this.handleChange}
                onBlur={this.handleChange}
                value={this.state.phone} />
            </label>
            <p className='error-content'>{this.state.errors.phone}</p>
            <div className='button-holder'>
              { saveButton }
              <button onClick={this.handleCloseForm}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm;
