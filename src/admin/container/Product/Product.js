import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

function Product(props) {
    return (
        <div>
            <h1>Product Admine Page</h1>

            <Button variant="outlined" color="error">
                Error
            </Button>

            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>

        </div>
    );
}

export default Product;