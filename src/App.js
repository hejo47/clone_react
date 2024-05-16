import { Routes, Route } from "react-router-dom";
import './App.css';
import "./css/style.scss";
import Home from "./components/pages/Home";
import Header from "./components/common/Header";
import InnerHeader from "./components/common/InnerHeader";
import Container from "./components/common/Container";
import Playbar from "./components/common/Playbar";


function App() {
  return (
    <div className="App">
      <div className="view">
        <Header></Header>
        <div className="content">
          <div className="style__bubble-basic">
            <InnerHeader />
            <section>
              <Routes>
                {/* <Route path="/browse" element={<Browse />}></Route> */}
                <Route path="/home" element={<Home />}></Route>
              </Routes>
            </section>
          </div>
        </div>
        <Playbar />
      </div>
    </div>
  );
}

export default App;
