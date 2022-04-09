import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
