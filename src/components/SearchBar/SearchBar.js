import React from 'react';
import './SearchBar.css'

let sortByOptions = {
  'Best Match' : 'best_match',
  'Highest Rated' :'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
    let sortByOptionsValue = sortByOptions[sortByOption];
    return <li key={sortByOptionsValue}>sortByOption</li>
    });

  }
  render() {
    return
    ( <div class="SearchBar">
  <div classname="SearchBar-sort-options">
    <ul>
      renderSortByOptions();
    </ul>
  </div>
  <div classname="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div classname="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>)
  }

}

export default SearchBar;
