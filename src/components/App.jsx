import { Component } from 'react';
import AddForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import { nanoid } from 'nanoid';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: null,
    filter: '',
  };

  addContact = data => {
    const newContact = { ...data, id: nanoid() };
    const ifExist = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (ifExist) {
      return alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, newContact],
      }));
      // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
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

  componentDidMount() {
    const initialData = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const storageData = localStorage.getItem('contacts');

    if (storageData && JSON.parse(storageData).length > 0) {
      this.setState({
        contacts: JSON.parse(storageData),
      });
    } else {
      this.setState({
        contacts: initialData,
      });
      localStorage.setItem('contacts', JSON.stringify(initialData));
    }
  }

  componentDidUpdate(prevPr, prevSt) {
    if (prevSt.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        {this.state.contacts && (
          <ContactList
            arr={this.state.contacts}
            filter={this.state.filter}
            delBtn={this.delBtn}
          />
        )}
      </div>
    );
  }
}

export default App;
