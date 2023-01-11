
import './App.css';
//components
import Login from './components/Account/Login';
import DataProvider from './context/DataProvider';
function App() {
  return (
    <div className="App">
      <DataProvider>
      <Login/>
      </DataProvider>
    </div>
  );
}

export default App;
