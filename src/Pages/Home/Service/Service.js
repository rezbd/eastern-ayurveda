import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const { img, title, description, id } = service;
    return (
        <div className="medicine">
            <img className="medicine-img" src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>

            <Link to={`/details/${id}`}>
                <button className="btn btn-danger">Details</button>
            </Link>
        </div>
    );
};

export default Service;