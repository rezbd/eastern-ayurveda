import React from 'react';

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h5>{description}</h5>
        </div>
    );
};

export default Service;