import './App.css';
import { Cards } from './components/Card-component/Card';
import { Header } from './components/Header-component/header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Cards />
      </div>
    </>
  );
}

export default App;
