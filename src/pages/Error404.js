import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => (
  <div className="error-container">
    <h1 className="error-code">404</h1>
    <p className="error-message">Oops! The page you were looking for was not found.</p>
    <Link to="/" className="back-to-home">Back to Home</Link>
  </div>
);

export default Error404;