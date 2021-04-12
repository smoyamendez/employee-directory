import './App.css';
import axios from "axios";
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import { Component } from 'react';

class App extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchEmployees()
  };

  searchEmployees = () => {
    axios.get("https://randomuser.me/api/?results=15&inc=name,email,dob,phone,id,picture,nat&nat=us")
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  };
  
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    this.handleSearch(this.state.search);
  };
  
  handleSearch = value => {
    console.log(value)
    const stateArray = this.state.results;
    console.log(stateArray);
    const searchFilter = stateArray.filter(result => {
      const employeeName = [result.name.first];
      return employeeName.some(i => i.toLowerCase().includes(value.toLowerCase()))});
    this.setState({
      results: searchFilter
    });
  };
  
  render() {
    console.log(this.state.results);
    return (
      <>
        <div className="container-fluid">
          <h1>Employee Directory</h1>
        </div>
        <SearchInput search={this.state.search} 
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        />
        <Table results={this.state.results} />
      </>
    );
  }
};

export default App;
