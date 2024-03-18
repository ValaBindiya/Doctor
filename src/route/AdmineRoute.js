import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/container/Product/Product';

function AdmineRoute(props) {
    return (
        <Routes>
            <Route exact path='/Product' element={<Product />} />
        </Routes>
    );
}

export default AdmineRoute;