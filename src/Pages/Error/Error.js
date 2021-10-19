import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h1 className="text-danger">Oops!</h1>
            <h4>Something's missing</h4>
            <h5>The page you looking for is not found</h5>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default Error;