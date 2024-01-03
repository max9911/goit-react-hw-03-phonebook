import { Component } from 'react';
import css from './filter.module.css';

class Filter extends Component {
  state = {};

  filterHandler = ({ target: { value } }) => {
    this.props.filter(value);
  };

  render() {
    return (
      <div className={css.container}>
        <h3> Find contacts by name </h3>
        <input onChange={this.filterHandler} name="filter" type="text"></input>
      </div>
    );
  }
}
export default Filter;
