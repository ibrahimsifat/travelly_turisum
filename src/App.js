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
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import MyBooking from './components/Pages/MyBooking/MyBooking';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import AddService from './components/Pages/AddService/AddService';
import ManageServices from './components/Pages/ManageServiecs/ManagesServices';
import MassageUs from './components/Pages/ContactUs/MassageUs';
import Payment from '../src/components/Pages/Payment/Payment'
import Congratulations from './components/Pages/Congratulations/Congratulations';
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
  <Navigation></Navigation>
  <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route  path='/aboutus'>
      <AboutUs></AboutUs>
    </Route>
    <Route  path='/login'>
      <Login></Login>
    </Route>
    <Route  path='/register'>
      <SignUp></SignUp>
    </Route>
    <Route  path='/messgae'>
      <MassageUs></MassageUs>
    </Route>
    <PrivateRoute  path='/addservice'>
      <AddService></AddService>
    </PrivateRoute>
    <PrivateRoute  path='/Congratulations'>
      <Congratulations></Congratulations>
    </PrivateRoute>
    <PrivateRoute  path='/payment'>
      <Payment></Payment>
    </PrivateRoute>
    <PrivateRoute  path='/manageservices'>
      <ManageServices></ManageServices>
    </PrivateRoute>
    <PrivateRoute  path='/forgotpassword'>
      <ForgotPassword></ForgotPassword>
    </PrivateRoute>
    <PrivateRoute path='/serviceDetails/:serviceId'>
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>
    <PrivateRoute path='/mybooking'>
      <MyBooking></MyBooking>
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
