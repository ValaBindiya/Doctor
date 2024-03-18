import { Route, Routes } from 'react-router-dom';
import UserRoute from './route/UserRoute';
import AdmineRoute from './route/AdmineRoute';

function App() {
  return (

    <Routes>
        <Route exact path='/*' element={<UserRoute />} />
        <Route exact path='/admin/*' element={AdmineRoute} />
    </Routes>

  );
}

export default App;
