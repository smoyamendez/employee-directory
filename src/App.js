import axios from "axios";
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import { Component } from 'react';

class App extends Component {
  state = {
    search: "",
    results: [],
    searchResults: []
  };

  componentDidMount() {
    this.searchEmployees()
  };

  searchEmployees = () => {
    axios.get("https://randomuser.me/api/?results=15&inc=name,email,dob,phone,id,picture,nat&nat=us")
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    this.handleSearch(value);
  };
  
  handleSearch = value => {
    console.log(value)
    const stateArray = this.state.results;
    console.log(stateArray);
    if (value.length >= 0) {
      const searchFilter = stateArray.filter(result => {
        const employeeName = [result.name.first];
        return employeeName.some(i => i.toLowerCase().includes(value.toLowerCase()))});
        this.setState({
          searchResults: searchFilter
        });
    }
  };
  
  render() {
    console.log(this.state.results);
    const searchResultLength = this.state.searchResults;
    return (
      <>
        <div className="container-fluid">
          <h1>Employee Directory</h1>
        </div>
        <SearchInput 
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        />
        <Table results={searchResultLength.length ? this.state.searchResults : this.state.results} />
      </>
    );
  }
};

export default App;
