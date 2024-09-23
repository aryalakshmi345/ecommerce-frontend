import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/private';
import AdminRoute from './components/Routes/adminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Header from './components/Header';
import ForgetPassword from './pages/ForgetPassword';
import Footer from './components/Footer';

function App() {
  const excludedRoutes = ["/reset-password"];

  const location = useLocation();
  const shouldShowHeaderAndFooter = !excludedRoutes.includes('/reset-password');
  return (
    <>
    {shouldShowHeaderAndFooter && <Header />}
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>} />
      <Route path='user/orders' element={<Orders/>} />
      <Route path='user/profile' element={<Profile/>} />
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDashboard/>} />
      </Route>
      <Route path='/admin/create-category' element={<CreateCategory/>} />
      <Route path='/admin/create-product' element={<CreateProduct/>} />
      <Route path='/admin/users' element={<Users/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/policy' element={<Policy/>} />
      <Route path='/reset-password/:token' element={<ForgetPassword/>}/>
    </Routes>
    {shouldShowHeaderAndFooter && <Footer />}
   
    </>
  );
}

export default App;
