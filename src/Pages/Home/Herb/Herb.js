import React from 'react';

const Herb = ({ herb }) => {
    const { img, name, benefit } = herb;
    return (
        <div className="col-12 col-lg-6 p-4">
            <img className="w-100" src={img} alt="" />
            <h4>{name}</h4>
            <p>{benefit}</p>
        </div>
    );
};

export default Herb;