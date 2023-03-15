import style from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Landigpage from './pages/Landigpage';
import Moviedetail from './pages/Moviedetail'

function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={style.title}>Movies</h1></Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId"><Moviedetail /></Route>
          <Route path="/"><Landigpage /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
