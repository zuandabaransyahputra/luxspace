import 'assets/css/app.css';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import Details from 'pages/Details';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Provider from 'helpers/hooks/useGlobalContext';

function App() {
  return (
    <Provider>
      <Router>
        <Switch >
          <Route path="/" exact component={HomePage} />
          <Route exact path="/categories/:idc" component={Details} />
          <Route path="/categories/:idc/products/:idp" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
