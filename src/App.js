import './App.css';
import API from './utils/API';
import Table from './components/Table';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <>
      <div className="container-fluid">
        <h1>Employee Directory</h1>
      </div>
      <SearchInput />
      <Table />
    </>
  );
}

export default App;
