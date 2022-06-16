import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard, Register, Landing, Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
