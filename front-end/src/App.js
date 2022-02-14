//dependencies
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show"
import Edit from "./pages/Edit"
import FourOFour from "./pages/FourOFour"

//components
import NavBar from "./Components/NavBar";

const API = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index/>} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;