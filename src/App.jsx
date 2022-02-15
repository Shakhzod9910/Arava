import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';

function App() {
  return (
   <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login}/> 
      </Switch>
   </>
  );
}

export default App;
