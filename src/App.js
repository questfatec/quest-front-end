import './App.css';
import QuestionBlock from './components/QuestionBlock';
import SuperUser from './components/SuperUser';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
      <h1>Quest Game - FATEC SP</h1>
      <Routes>
          <Route path="/superuser" element={<SuperUser></SuperUser>}>
          </Route>
          <Route exact path="/" element={<QuestionBlock></QuestionBlock>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
