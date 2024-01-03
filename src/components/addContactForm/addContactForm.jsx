import { Component } from 'react';
import css from './addContactForm.module.css';

class AddForm extends Component {
  state = {
    name: '',
    number: '+380',
  };
  inputHandler = ({ target: { name, value } }) => {
    this.setState(prev => ({
      [name]: value,
    }));
  };
  submitHandler = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '+380',
    });

    this.setState({});
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.submitHandler}>
        <div className={css.container}>
          <label htmlFor="name" className={css.inputnames}>
            Name
          </label>
          <input
            value={this.state.name}
            onChange={this.inputHandler}
            placeholder="Jonh Jackson"
            id="name"
            className={css.input}
            type="text"
            name="name"
            required
          />
        </div>
        <div className={css.container}>
          <label htmlFor="number" className={css.inputnames}>
            Phone Number
          </label>
          <input
            value={this.state.number}
            onChange={this.inputHandler}
            placeholder="+380XXXXXXXXX"
            id="number"
            className={css.input}
            type="tel"
            name="number"
            required
          />
        </div>
        <button type="submit" className={css.btn}>
          {' '}
          Add contact
        </button>
      </form>
    );
  }
}

export default AddForm;
