import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const UnnecessaryRenders = React.lazy(() => import('./examples/unnecessary-renders'))
const Exercise01 = React.lazy(() => import('./exercises/01/'))
const Exercise02 = React.lazy(() => import('./exercises/02/'))
const Exercise03 = React.lazy(() => import('./exercises/03/'))

function App () {
  return (
    <div className="App">
      <React.Suspense fallback={<p>Loading your page...</p>}>
        <Router>
          <Switch>
            <Route path="/exercise/01">
              <Exercise01 />
            </Route>
            <Route path="/exercise/02">
              <Exercise02 />
            </Route>
            <Route path="/exercise/03">
              <Exercise03 />
            </Route>
            <Route path="/unnecessary-renders">
              <UnnecessaryRenders />
            </Route>
            <Route path="/">
              <nav>
                <ul>
                  <li>
                    <Link to="/exercise/01">Code Splitting</Link>
                  </li>
                  <li>
                    <Link to="/exercise/02">useMemo</Link>
                  </li>
                  <li>
                    <Link to="/exercise/03">React.memo</Link>
                  </li>
                  <li>
                    <Link to="/unnecessary-renders">Unnecessary Renders</Link>
                  </li>
                </ul>
              </nav>
            </Route>
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
