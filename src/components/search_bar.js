import React, {Component} from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  }
  render() {
      return (
        <div className="search-bar">
            <input
            value={this.state.term}
            onChange={this.onInputChange} />
        </div>
      );
  }
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({term : e.target.value});
    this.props.onSearchTermchange(e.target.value)
  }
}
export default Searchbar;
