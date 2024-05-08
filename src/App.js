import './App.css';
import "./css/style.scss";
import Header from './components/common/Header';
import Writers from './components/element/Writers';

function App() {
  return (
    <div className="App">
      <div className="view">
        <Header></Header>
        <div className="content">
          <Writers></Writers>
        </div>
      </div>
    </div>
  );
}

export default App;
