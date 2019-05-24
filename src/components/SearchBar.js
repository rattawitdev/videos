import React from 'react';
import { Icon, Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment inverted">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            {/* <label>ค้นหา Videos</label> */}
            <Input
              icon={<Icon name='search' inverted circular link />}
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder='ค้นหา Videos...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
