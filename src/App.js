import { Route, Routes } from 'react-router-dom';
import UserRoute from './route/UserRoute';
import AdmineRoute from './route/AdmineRoute';
import PrivateRoute from './route/PrivateRoute';

function App() {
  return (

    <Routes>
      <Route exact path='/*' element={<UserRoute />} />
      <Route element={<PrivateRoute />} >
        <Route exact path='/admin/*' element={<AdmineRoute />} />
      </Route>

    </Routes>

  );
}

export default App;
