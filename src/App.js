import GetData from "./components/GetData";
import { Routes, Route } from "react-router-dom"
import DisplayBeerInfo from "./components/DisplayBeerInfo";
import Navbar from "./components/Navbar";
import DisplayFavorites from "./components/DisplayFavorites";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/description/:id" element={<DisplayBeerInfo />} />
        <Route path="/favorites" element={<DisplayFavorites /> }/>
      </Routes>
    </div>
  );
}

export default App;
