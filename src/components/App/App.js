import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import '@fontsource/roboto';

// this is what is displayed to the DOM,  initial movie list page, and movie details page
function App() {
  return (
    <div className="App">
      <h1></h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <MovieDetail />
        </Route>
      </Router>
    </div>
  );
}


export default App;
