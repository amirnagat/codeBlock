import Login from "./Component/Login";
import { Routes, Route} from "react-router-dom";
import LobbyPage from './Component/LobbyPage'
import CodeOne from "./Component/CodeBlocks/CodeOne";
import CodeTwo from "./Component/CodeBlocks/CodeTwo";
import CodeThree from "./Component/CodeBlocks/CodeThree";
import CodeFour from "./Component/CodeBlocks/CodeFour";

function App() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/LobbyPage" element={<LobbyPage />} />
       <Route path="/codeone" element={<CodeOne />} />
       <Route path="/codeTwo" element={<CodeTwo />} />
       <Route path="/codeThree" element={<CodeThree />} />
       <Route path="/codeFour" element={<CodeFour />} />
    </Routes>
    </div>
  );
}

export default App;
