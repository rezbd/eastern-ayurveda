import React from 'react';
import "./Service.css";

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className="medicine">
            <img className="medicine-img" src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn btn-danger">Details</button>
        </div>
    );
};

export default Service;