import { Component } from 'react';
import AddForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import { nanoid } from 'nanoid';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = { ...data, id: nanoid() };
    const ifExist = this.state.contacts.find(el => el.name === data.name);
    if (ifExist) {
      return alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, newContact],
      }));
    }
  };

  filter = filterName =>
    this.setState({
      filter: filterName,
    });

  delBtn = nameDel => {
    return this.setState(prev => ({
      contacts: prev.contacts.filter(elm => elm.name !== nameDel),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList
          arr={this.state.contacts}
          filter={this.state.filter}
          delBtn={this.delBtn}
        />
      </div>
    );
  }
}

export default App;
