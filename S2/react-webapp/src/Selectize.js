import React, { Component } from 'react';
import Fuse from 'fuse.js';

// const Component = React.Component;

export default class Selectize extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  render() {
    console.log("Selectize Component Rerendered!");
    console.log("the state is", this.state);
    return (
      <div>
        <input
          onChange={this.onChange.bind(this)}
          value={this.state.inputValue} />
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    let filtered = this.getFilteredOption();
    return (
      filtered.map((user, index) => {
        return(
          <div key={index} onClick={ () => this.props.onSelect(user) } >
            {index} - {user.name}
          </div>
        )
      })
    )
  }

  getFilteredOption() {
    var config = {
      shouldSort: true,
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name"],
    };
    let fuse = new Fuse(this.props.options, config);
    return fuse.search(this.state.inputValue);
  }

  onChange(e) {
    this.setState({inputValue: e.target.value});
  }

}
