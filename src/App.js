import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import ServiceDetails from './components/Pages/Home/Services/ServiceDetails';
import Navigation from '../src/components/Pages/Shared/Navigation'
import Footer from '../src/components/Pages/Shared/Footer'
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import AuthProvider from './components/Pages/context/AuthProvider';
import NotFound from '../src/components/Pages/NotFound/NotFound'
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
  <Navigation></Navigation>
  <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route  path='/login'>
      <Login></Login>
    </Route>
    <Route  path='/register'>
      <SignUp></SignUp>
    </Route>
    <PrivateRoute path='/serviceDetails/:serviceId'>
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>
    <Route path='*'>
      <NotFound></NotFound>
    </Route>
  </Switch>
  <Footer></Footer>
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
